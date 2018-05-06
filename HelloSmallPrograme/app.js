//app.js
App({
  onLaunch: function (res) {


  console.log(res)


    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setTabBarBadge({
      index: 0,
      text: '1'
    })

    wx.showTabBarRedDot({
      index: 1,
    })

    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#0000FF',
      borderStyle: 'white'
    })
    wx.getStorageInfo({
      success: function(res) {
        console.log(res)
      },
    })

    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
      },
    })

    wx.getNetworkType({
      success: function(res) {
        console.log(res.networkType)
      },
    })
    wx.onNetworkStatusChange(function(res){
      console.log(res)
    })
 


    // wx.makePhoneCall({
    //   phoneNumber: '111',
    // })

   
//     wx.showLoading({
//       title: '12121',
//       mask:false
//     })

//     setTimeout(function(){
// wx.hideLoading()
//     },2000)   



// wx.showModal({
//   title: '11',
//   content: '222',
//   showCancel:true,
//   cancelText:"取消",
//   success: function(res){
//     wx.showToast({
//       title: res.confirm,
//       icon: 'none'
//     })
//   }
// })

// wx.showActionSheet({
//   itemList: ["11","22"],
//   itemColor:"#000",
//   success: function(res){
//     console.log(res.tapIndex)
//   }
// })


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})