// pages/register/register.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        headimg: "../../images/添加.png",
        user: {
            account: "",
            password: "",
            identifypassword: "",
        }
    },
    //添加图片
    addImage: function () {
        wx.chooseImage({
            success: (res) => {
                // 将添加的头像并显示
                this.setData({
                    headimg: res.tempFilePaths[0]
                })
            }
        })
    },
    //获取账号信息
    getAccount: function (res) {
        var username = "user.account";
        this.setData({
            [username]: res.detail.value
        });
    },
    //获取密码信息
    getPassWord: function (res) {
        var password = "user.password";
        this.setData({
            [password]:res.detail.value
        });
    },
    //获取确认密码
    getidentifyPassword: function (res) {
        var  identifypassword = "user.identifypassword";
        this.setData({
            [identifypassword]: res.detail.value
        });
    },

    // 注册
    register: function () {
        var account = this.data.user.account;
        var password = this.data.user.password;
        var identifypassword = this.data.user.identifypassword;
        var headimg = this.data.headimg;

        // 如果必选项有一个或多个为空
        if ((account == "") || (password == "") || (identifypassword == "") || (headimg == "../../images/添加.png")) {
            console.log("null");
            //弹窗
             wx.showModal({
                title: '警告⚠️',
                content: '用户名/密码为空或未上传头像',
                showCancel: false,
            })
        }
        // 如果密码和确认密码不相等，则报错
        else if (password != identifypassword) {
            console.log("密码和确认密码不一致");
            //弹窗
            wx: wx.showModal({
                title: '提示:',
                content: '密码和确认密码不一致',
                showCancel: false,
            })
        }
        else {
            // 如果注册步骤都正确，则向服务器发送请求，查找注册的账号是否存在
            wx: wx.request({
                url: 'http://127.0.0.1:7001/searchAccount',
                method: 'POST',
                data: {
                    account: account,
                },
                success: (res) => {
                    // 如果账号存在，则提示账号存在
                    if (res.data.succ == true) {
                        wx: wx.showModal({
                            title: '警告⚠️',
                            content: '账号已存在',
                            showCancel: false,
                        })
                    }
                    else {
                        // 如果账号不存在，则向服务器发送添加账户请求
                        wx.request({
                            url: 'http://127.0.0.1:7001/addAccount',
                            method: 'POST',
                            data: {
                                account: account,
                                password: password,
                                headimg: headimg

                            },
                            success: (res) => {
                                // 注册成功，提示成功
                                if (res.data.succ == true) {
                                     wx.showModal({
                                        title: '提示',
                                        content: '注册成功',
                                        showCancel: false,
                                        success: (res) => {
                                            if (res.confirm == true) {
                                                wx.reLaunch({
                                                    url: "../../pages/login/login"
                                                })
                                            }
                                        }
                                    });

                                }
                                else {
                                    // 注册失败，提示注册失败
                                    wx: wx.showModal({
                                        title: '警告⚠️',
                                        content: '注册失败，请重新注册',
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