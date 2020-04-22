// pages/more/more.js
//获取应用实例
import showDetail from "../../modules/showDetail";
import showcDetail from "../../modules/showcDetail";
const app = getApp()
Page({

  data: {
    index_slides: [],
    nav_data: [],
    index_block: [],
    isTap: false,
    isLoading: false,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
   
  },
  onLoad() {
    // 定义传输值
    const index_slides = app.globalData.index_slides,
      nav_data = app.globalData.nav_data,
      index_block = app.globalData.index_block,
      sectionList = index_block.map((section) => {
        return section.section;
      })
    console.log(sectionList);
    // 赋值给data
    this.setData({
      index_slides,
      nav_data,
      index_block,
    });

  },
  onShow(e) {
    this.setData({
      isTap: false
    });
  },
  //事件处理函数
  toSearch(e) {
    this.setData({
      isTap: true
    });
    wx.navigateTo({
      url: "../search/search"
    })
  },
  
  // showDetail(e){
  //   const id=e.currentTarget.dataset.pid;
  //   console.log(id);
  // }
  showDetail,
  showcDetail
})
