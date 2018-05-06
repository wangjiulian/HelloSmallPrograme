//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  takephoto: function(){
    // wx.showToast({
    //   title: '1111',
    //   icon:'none',
    //   duration:2000
      
    // })
    wx.setTopBarText({
      text: 'hello, world!'
    })
    // wx.chooseImage({
    //   count:1,
    //   sizeType: ['original', 'compressed'],
    //   sourceType: ['album', 'camera'],
      
    //   success: function(res) {
    //     var filepath = res.tempFilePaths
    //     console.log(filepath)
        
    //     wx.getImageInfo({
    //       src: filepath[0],
    //       success: function(res){
    //         console.log(res.width)
    //       }
    //     })
    //     wx.saveImageToPhotosAlbum({
    //       filePath: filepath[0],
    //       success(res){
    //         console.log(res.errMsg)
    //       }
    //     })
    //     wx.saveFile({
    //       tempFilePath: filepath[0],
    //       success: function(res){
    //         var savedpath = res.savedFilePath
    //       }
    //     })
    //     wx.getSavedFileList({
    //       success: function(res){
    //         console.log(res.fileList)
    //       }
    //     })
    //   },
    // })

    // wx.scanCode({
    //   success: function(res){
    //     res.result
    //   }
      
    // })

  //  wx.setClipboardData({
  //    data: '1212',
  //    success: function(res){
  //      wx.getClipboardData({
  //        success: function(res){
  //          console.log(res.data)
  //        }
  //      })
  //    }
  //  })

    // wx.onUserCaptureScreen(function (res) {
    //   console.log('用户截屏了')
    // })

   

    // wx.startRecord({
    //   success: function (res) {
    //     var tempFilePath = res.tempFilePath
    //   },
    //   fail: function (res) {
    //     //录音失败
    //   }
    // })
    // setTimeout(function () {
    //   //结束录音  
    //   wx.stopRecord()
    // }, 10000)

  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
