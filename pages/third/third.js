// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      headimg: "",
      account: ""
  },
  // 退出登录
  exit: function () {
      wx: wx.reLaunch({
          url: '../login/login'
      })
  },
  // 跳转到修改密码页面
  goto_resetpassword: function () {
      wx.navigateTo({
          url: '../resetpassword/resetpassword',
      })
  },
  
  //跳转修改昵称页面
  goto_updateName:function(){
      wx.navigateTo(
          {
              url:'../updateName/updateName'
          }
      )
  },
  //修改头像
  updateheadimg: function () {
      var account =this.data.account;
      wx.chooseImage({
          success: (res) => {
              this.setData({
                  headimg: res.tempFilePaths[0],
              })
              var headimg =this.data.headimg;
              console.log(headimg);
              wx.request({
                  url: 'http://127.0.0.1:7001/searchAccount',
                  method: 'POST',
                  data: {
                      account: account,
                  },
                  success: (res) => {
                      var id = res.data.data[0].id;
                      wx.request({
                          url: 'http://127.0.0.1:7001/updateHeadimage',
                          method: 'POST',
                          data: {
                              id: id,
                              headimg: headimg
                          },
                      })
                  }
              })


          }
      })
  },
// 跳转到指南页面
goto_operation: function () {
    wx.navigateTo({
        url: '../op&help/op&help',
    })
},
//跳转帮助与反馈页面
goto_contact:function(){
    wx.navigateTo({
      url: '../op&help/op&help',
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          account: options.account
      })
      var account = this.data.account;
      // 获取数据库图片地址
      wx.request({
          url: 'http://127.0.0.1:7001/searchAccount',
          method: 'POST',
          data: {
              account: account,
          },
          success: (res) => {
              this.setData({
                  headimg: res.data.data[0].headimg
              })
          }
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

  }
})