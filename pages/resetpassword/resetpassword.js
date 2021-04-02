// pages/forgetpassword/forgetpassword.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user: {
            account: "", 
            password: "", 
            identifypassword: "" 
        }
    },

    //获取账号
    getAccount: function (re) {
        var username = "user.account";
        this.setData({
            [username]: re.detail.value
        });
    },
    //获取密码
    getPassWord: function (re) {
        var password = "user.password";
        this.setData({
            [password]: re.detail.value
        });
    },
    //获取确认密码
    getidentifyPassword: function (re) {
        var identifypassword = "user.identifypassword";
        this.setData({
            [identifypassword]: re.detail.value
        });
    },

    // 修改密码
    updatePassword: function () {
        var account = this.data.user.account;
        var password = this.data.user.password;
        var identifypassword = this.data.user.identifypassword;
        if ((account == "") || (password == "") || (identifypassword== "")) {
            console.log("空值");
    
            wx.showModal({
                title: '警告⚠️',
                content: '帐户名/密码/确认密码不能为空',
                showCancel: false,
            })
        } else if (password != identifypassword) {
            console.log("密码和确认密码不一致");

             wx.showModal({
                title: '警告⚠️',
                content: '密码和确认密码不一致',
                showCancel: false,
            })
        } else {
             wx.request({
                url: 'http://127.0.0.1:7001/searchAccount',
                method: 'POST',
                data: {
                    account: account,
                },
                success: (res) => {
                    if (res.data.succ == false) {
                        wx: wx.showModal({
                            title: '警告⚠️',
                            content: '账号不存在,请注册',
                            showCancel: false,
                        })
                    }
                    else {
                        //获取查找用户的主键id
                        var id = res.data.data[0].id;
                        wx.request({
                            url: 'http://127.0.0.1:7001/updatePassword',
                            method: 'POST',
                            data: {
                                id: id,
                                password: password
                            },
                            success: (res) => {
                                if (res.data.succ == true) {
                                    wx: wx.showModal({
                                        title: '提示',
                                        content: '密码修改成功',
                                        showCancel: false,
                                        success: (res) => {
                                            //密码修改成功点击确认，跳转到登录页面
                                            console.log(res);
                                            if (res.confirm == true) {
                                                wx.reLaunch({
                                                    url: "../login/login"
                                                })
                                            }
                                        }
                                    });

                                }
                                else{
                                    wx: wx.showModal({
                                        title: '警告⚠️',
                                        content: '密码修改失败，请重新修改密码',
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