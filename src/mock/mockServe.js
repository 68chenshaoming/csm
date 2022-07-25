//引入mock.js模块
import Mock from 'mockjs';
//把JSON数据格式引入进来{json数据格式是默认对外暴露的，是可以引入的}
import banner from './banner.json'
import floor from './floor.json'

//mock数据 第一个参数请求地址  第二个请求的数据
Mock.mock("/mock/banner", {
    code: 200,
    data: banner
}); //模拟首页录播图的数据
Mock.mock("/mock/floor", {
    code: 200,
    data: floor
})