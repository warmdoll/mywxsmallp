//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    blogCategory: []
  },
 
  // 进入文章列表
  //事件处理函数
  bindViewTap: function () {

    wx.navigateTo({
      url: '../list/list'
    })
  },
  onLoad: function () {
    var blogCategoryArr=[
          { categorayUrl:'../images/web.png',categorayName:'前端'},
      { categorayUrl: '../images/travel.png', categorayName: '旅行' },
          { categorayUrl: '../images/live.png', categorayName: '生活' },
          { categorayUrl: '../images/study.png', categorayName: '学习' }
        ];
    this.setData({
      blogCategory: blogCategoryArr
    });
  
    
  },
 
})
