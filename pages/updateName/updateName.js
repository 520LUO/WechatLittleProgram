// pages/updateName/updateName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
        account: "", 
        newname: "",
    }
},
//获取用户名
getAccount: function (re) {
    var account = "user.account";
    this.setData({
        [account]: re.detail.value
    });
},

//获取新用户名
getNewname: function (re) {
    var newname = "user.newname";
    this.setData({
        [newname]: re.detail.value
    });
},

// 修改用户名
updateName: function () {
    var account = this.data.user.account;
    var newname = this.data.user.newname;
    if ((account == "") || (newname == "")) {
        console.log("空值");
        //弹窗
        wx: wx.showModal({
            title: '警告⚠️',
            content: '帐户名不能为空',
            showCancel: false,
        })
    } else if (account == newname) {
        console.log("新用户名不能和原用户名相同");
        //弹窗
        wx: wx.showModal({
            title: '警告⚠️',
            content: '新用户名不能和原用户名相同',
            showCancel: false,
        })
    } else {
        wx: wx.request({
            url: 'http://127.0.0.1:7001/searchAccount',
            method: 'POST',
            data: {
               account: account,
            },
            success: (res) => {
                if (res.data.succ == false) {
                       wx.showModal({
                        title: '警告⚠️',
                        content: '账号不存在',
                        showCancel: false,
                    })
                }
                else {
                    //获取查找到账号的主键id
                    var id = res.data.data[0].id;
                    wx.request({
                        url: 'http://127.0.0.1:7001/updateName',
                        method: 'POST',
                        data: {
                            id: id,
                            account:newname
                        },
                        success: (res) => {
                            if (res.data.succ == true) {
                              this.setData({
                            account:newname
                              })
                                wx: wx.showModal({
                                    title: '提示',
                                    content: '用户名修改成功',
                                    showCancel: false,
                                    success: (res) => {
                                        //如果用户名修改成功点击确认，关闭其他页面，并跳转到个人中心
                                        console.log(res);
                                        if (res.confirm == true) {
                                          var newname = this.data.user.newname;
                                            wx.reLaunch({
                                                url: "../third/third?account="+newname
                                            })
                                        }
                                    }
                                });

                            }
                            else{
                                wx: wx.showModal({
                                    title: '警告⚠️',
                                    content: '用户名修改失败，请重新填写',
                                    showCancel: false,
                                })
                            }
                        }

                    })
                }
            }
        })
    }

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