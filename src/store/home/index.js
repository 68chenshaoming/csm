//home模块的小仓库
import {
    reqCategoryList,
    reqGetBannerList,
    reqGetFloorList
} from '@/api'
const state = {
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
    floorList: []
} //仓库存储数据的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    CATFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
} //修改state的唯一手段
const actions = {
    async categoryList({
        commit
    }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data.splice(0, 16))
        }
    },
    async getBannerList({
        commit
    }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },

    async getFloorList({
        commit
    }) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit("CATFLOORLIST", result.data)
        }
    }
} //处理action 可以书写自己的业务逻辑 可以书写异步
const getters = {} //理解为计算属性 可以通过简化仓库数据 让组件获取仓库的数据更加方便
//对外暴露一个Store类的一个实例
export default ({
    state,
    mutations,
    actions,
    getters
})