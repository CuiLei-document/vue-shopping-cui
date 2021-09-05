import { request } from './request'

export const getCategory = () => {
    return request({
        url: '/category'
    })
}
//获取各个分类条目下的衣服品种

export function getSubcategory(maitKey) {
    return request({
        url: "/subcategory",
        params: {
            maitKey,
        },
    });
}

//获取pop new sell下的所有商品
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: "/subcategory/detail",
        params: {
            miniWallkey,
            type,
        },
    });
}