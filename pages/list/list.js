//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    blogCategory: []
  },
  onPullDownRefresh() {
    //wx.stopPullDownRefresh();
    wx.startPullDownRefresh()
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    console.log("df")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("sd")
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
