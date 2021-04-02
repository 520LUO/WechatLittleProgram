// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user: {
          account: "", 
          password: "" 
      }
  },
  //获取账号内容
  getAccount: function (res) {
      var username = "user.account";
      this.setData({
          [username]: res.detail.value
      });
  },
  //获取密码内容
  getPassWord: function (res) {
      var password = "user.password";
      this.setData({
          [password]: res.detail.value
      });
  },
  //登录
  login: function () {
      var account = this.data.user.account;
      var password = this.data.user.password

      if ((account == "") || (password == "")) {
          console.log("null");
          //弹窗
          wx: wx.showModal({
              title: '警告⚠️',
              content: '用户名或密码不能为空',
              showCancel: false,
          })
      } else {
          //向服务器发送查找账号请求
          wx.request({
              url: 'http://127.0.0.1:7001/searchAccount',
              method: 'POST',
              data: {
                  account: account
              },
              success: (res) => {
                  //核对数据库，查询账号是否存在
                  if (res.data.succ == false) {
                      wx: wx.showModal({
                          title: '警告⚠️',
                          content: '账户未注册，请注册后登陆',
                          showCancel: false,
                      })
                  }
                  else {
                      wx.request({
                          url: 'http://127.0.0.1:7001/search',
                          method: 'POST',
                          data: {
                              account: account,
                              password: password,
                          },
                          success: (res) => {
                              // 账号和密码不匹配，提示密码错误
                              if (res.data.succ == false) {
                                  wx.showModal({
                                      title: '警告⚠️',
                                      content: '密码错误',
                                      showCancel: false,
                                  })
                              } else {
                                  // 账号和密码匹配，提示登录成功
                                  wx.showModal({
                                      title: '提示',
                                      content: '登录成功✔️',
                                      showCancel: false,
                                      success: () => {
                                           wx.reLaunch({
                                              // 跳转并将account账号传给个人中心页面
                                              url: '../third/third?account=' + this.data.user.account,
                                          })
                                      }
                                  })
                              }
                          }
                      })


                  }
              }
          })
      }
  },

  // 跳转到注册页面
  goto_register: function () {
      wx.navigateTo({
          url: "../register/register"
      })
  },

  //跳转到找回密码页面
  goto_forget_password: function () {
      wx.navigateTo({
          url: "../resetpassword/resetpassword"
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