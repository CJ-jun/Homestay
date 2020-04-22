// pages/user/user.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    type: 'user'
  },
  onLoad: function () {
    console.log(app.globalData)
  },
  onShow: function () {

  },
  // 登录按钮
  getUserInfo(e) {
    let userInfo = e.detail.userInfo;
    app.globalData.userInfo = Object.assign({}, userInfo);
    console.log(app.globalData.userInfo);
    // 赋值
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 用户头像-个人资料
   */
  showPersonalData: function () {
    wx.navigateTo({
      url: '../user/information/information',
    })
  },
  /**
   * 实名认证——实名认证
   */
  showAuthentication: function() {
    wx.navigateTo({
      url: '../user/authentication/authentication',
    })
  },

  /**
   * 我的钱包-提现
   */
  showWallet: function () {
    wx.navigateTo({
      url: '../user/money/money',
    })
  },

  /**
   * 切换为房东——请先进行实名认证
   */
  nameDetection: function () {
    wx.navigateTo({
      url: '../user/landlord_entrance/landlord_entrance',
    })
  },

  // 切换为房东
  showLandlord:function(){
    wx.switchTab({
      url: '../landlord/landlord',
    })
  },
  
  /**
   * 公司简介-公司简介
   */
  showPresentation:function () {
    wx.navigateTo({
      url: '../user/join/join',
    })
  },

  /**
   * 用户反馈-用户反馈
   */
  showFeedback: function () {
    wx.navigateTo({
      url: '../user/feedback/feedback',
    })
  },

/**
 * 常见问题-常见问题
 */
  showFAQ: function () {
    wx.navigateTo({
      url: '../user/FAQ/FAQ',
    })
  },

  // 添加房源
  addHouse:function(){
    wx.navigateTo({
      url: '../recruit/release/release',
    })
  },

  // 房东收益明细
  showWallet2:function(){
    wx.navigateTo({
      url: '../user/money/wallet_detail/wallet_detail',
    })
  }
})