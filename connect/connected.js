// pages/grid-connected/grid-connected.js
Page({
  go2history: function(){
    wx.navigateTo({
 
      url: '/pages/history/history',
 
      })
  },
  data: {
    showModal: false
},

submit: function() {
    this.setData({
    showModal: true
    })
},

preventTouchMove: function() {

},


go: function() { 
    this.setData({
    showModal: false
    })
},


go2newroom: function(){
  wx.navigateTo({

    url: '/pages/newroom/newroom',

    })
},
go2quickroom: function(){
  wx.navigateTo({

    url: '/pages/quickroom/quickroom',

    })
}
})