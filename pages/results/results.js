// pages/jump0/jump0.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '../../images/选择.png',
    str: '',
    array: [],
    cute_img:''
  },
  click: function () {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          img: res.tempFilePaths[0]
        })
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          success: (res) => {
            wx.request({
              url: 'http://127.0.0.1:7001/' + this.data.str,
              method: "post",
              data: {
                image: res.data
              },
              success: (res) => {
                console.log(res)
                var str =this.data.str
                if ( str== 'text'||str=='ticket'||str=='idcard'||str=='passport'||str=='car') {
                  this.setData({
                    array: res.data.data.words_result
                  })
                }
      
                if(str== 'bankcard'||str=='plant'||str=='animal'){

                  var array = res.data.data.result
                  array.forEach(el => {
                    el.score = Math.round(el.score * 100)
                  })
  
                  this.setData({
                    array: res.data.data.result
                  })
                }
  
                if(str=='cute'){
                  this.setData({
                  cute_img: res.data.data.image
                  })
                }
                
                if(str=='qrcode'){
                  this.setData({
                    array:res.data.data.codes_result
                  })
                }

              }
            })
          }
        })

      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        image:options.image,
        str:options.str
      }
    )
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