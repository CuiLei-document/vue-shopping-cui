<template>
  <div class="profile">
    <nav-bar class="navbar">
      <template v-slot:content>
        <div>分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <Scroll class="scroll" :pull-up-load="true" @pullingUp="loadMode">
        <tab-content-category :subcategories="showSubCategories" />
        <tab-control :titles="['热销', '新品', '销量']" @tabClick="tabClick" />
        <tab-content-detail
          :categoryDetail="showCategoryDetail"
        ></tab-content-detail>
      </Scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComps/TabMenu.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";
import TabControl from "content/tabControl/TabControl.vue";
import TabContentDetail from "./childComps/TabContentDetail.vue";

import NavBar from "common/NavBar.vue";
import Scroll from "common/scroll/Scroll.vue";
import { getLoadMode } from "common/mixins.js";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category.js";
import { POP, NEW, SELL } from "common/const.js";
export default {
  components: {
    TabMenu,
    TabContentCategory,
    TabContentDetail,
    TabControl,
    NavBar,
    Scroll,
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: POP,
    };
  },
  created() {
    this._getCategory();
  },
  computed: {
    showSubCategories() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this._getCategories(0);
      });
    },
    // 获取事件相关的方法
    _getCategories(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(NEW);
        this._getCategoryDetail(SELL);
      });
    },
    _getCategoryDetail(type) {
      // 获取请求的 miniWallkey
      let miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 发送请求，传入 miniWallkey 和 type
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
      }
    },

    loadMode() {},
    selectItem(index) {
      this._getCategories(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: 100vh;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.scroll {
  height: 100%;
  flex: 1;
}
.navbar {
  background: #ff8e96;
  color: white;
  // z-index:10;
}
</style>