import {
    reqGetSearchInfo
} from "@/api"
//search模块的小仓库
const state = {
    searchList: {}
} //仓库存储数据的地方
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
} //修改state的唯一手段
const actions = {
    //获取search模块输数据
    async getSearchList({
        commit
    }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
} //处理action 可以书写自己的业务逻辑 亦可以吃力异步
const getters = {
    goodsList(state) { //state是当前仓库下的state
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    }
} //理解为计算属性 可以通过简化仓库数据 让组件获取仓库的数据更加方便
//对外暴露一个Store类的一个实例
export default ({
    state,
    mutations,
    actions,
    getters
})