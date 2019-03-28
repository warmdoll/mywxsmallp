//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    enterObj: {
      imgUrl:'../images/enter_bg.png',
      enterText:'Welcome to my bolg ~'
    },
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  }
})
