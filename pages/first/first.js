// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [{
      txt: '火车票',
      url:'../results/results?str=ticket'
    },
    {
      txt: '身份证',
      url:'../results/results?str=idcard'
    },
    {
      txt: '银行卡',
      url:'../results/results?str=bankcard'
    },
    {
      txt: '植物',
      url:'../results/results?str=plant'
    },
    {
      txt: '动物',
      url:'../results/results?str=animal'
    },
    {
      txt: '更多>>',
      url:'../second/second'
    },
    ]
  },
  // 功能栏 {更多} 选项跳转到tabbar第二栏
  click6:function(){
    wx.switchTab({
      url: '../second/second',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  }
})