import { debounce } from "common/utify.js";
import { getHomeMultiData, getHomeGoods } from "network/home.js";
export const itemImgListenerMixins = {
    data() {
        return {
            itemImgListener: null,
            newRefresh: null,
        }
    },
    mounted() {
        this.newRefresh = debounce(this.$refs.scroll.refresh, 300);
        this.itemImgListener = () => {
            this.newRefresh();
        };
        this.$eventBus.$on("itemImageLoad", this.itemImgListener);
    },
}

export const backTopListenerMixins = {
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scroll.scrollTo(0, 0);
        },
        backTopListener(position) {
            return this.isVisible = -position.y > 500;
        }
    }
}

export const getLoadMode = {
    data() {
        return {
            types: {
                pop: { page: 0, list: [] },
                new: { page: 0, list: [] },
                sell: { page: 0, list: [] },
            },
        }
    },
    methods: {
        getHomeGoods(type) {
            let page = this.types[type].page + 1;
            getHomeGoods(type, page).then((res) => {
                this.types[type].list.push(...res.data.list);
                this.types[type].page += 1;

                this.$refs.scroll.finishPullUp();
            });
        },
    }
}