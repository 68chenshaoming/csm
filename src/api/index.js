//当前模块：API进行统一管理
import requests from "./request";
import mockRequest from './mockAjax'
//三级联动的接口
// /api/product/getBaseCategoryList get请求 无参数

export const reqCategoryList = () =>
    //发请求 axios发送请求返回结构是promise对象
    requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    })

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () =>
    mockRequest({
        url: '/banner',
        method: 'get'
    })

//获取floor数据
export const reqGetFloorList = () => mockRequest.get('/floor')

//获取搜索模块的数据  地址/api/list   请求方式 post
/* {
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  }*/
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: "get"
})