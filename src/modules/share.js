import wx from 'weixin-js-sdk'

export default {
  install : function (Vue, options) {
  Vue.prototype.shareList = function (imgUrl, link, desc, title) {
    // 分享
    var url = encodeURIComponent(location.href.split('#')[0])
    Vue.http.post('http://fubala.xiemy.cn/api/' + 'Wechat/getSignPackage', {url: url}).then(function (res) {
      res = res.data.data

      wx.config({
        debug: false, // true:调试时候弹窗
        appId: res.appId, // 微信appid
        timestamp: res.timestamp, // 时间戳
        nonceStr: res.nonceStr, // 随机字符串
        signature: res.signature, // 签名
        jsApiList: [
          // 所有要调用的 API 都要加到这个列表中
          'onMenuShareTimeline', // 分享到朋友圈接口
          'onMenuShareAppMessage', //  分享到朋友接口
          'onMenuShareQQ', // 分享到QQ接口
          'onMenuShareWeibo' // 分享到微博接口
        ]
      })
      wx.checkJsApi({
        jsApiList: [
          // 所有要调用的 API 都要加到这个列表中
          'onMenuShareTimeline', // 分享到朋友圈接口
          'onMenuShareAppMessage', //  分享到朋友接口
          'onMenuShareQQ', // 分享到QQ接口
          'onMenuShareWeibo' // 分享到微博接口
        ],
        success: function (res) {
        }
      })

      wx.ready(function () {
        // 微信分享的数据
        var shareData = {
          imgUrl: imgUrl, // 分享显示的缩略图地址
          link: link, // 分享地址
          desc: desc, // 分享描述
          title: title, // 分享标题
          success: function () {
            // 分享成功可以做相应的数据处理
            console.log('分享成功')
            console.log('appId:' + res.appId)
            console.log('timestamp:' + res.timestamp)
            console.log('nonceStr:' + res.nonceStr)
            console.log('signature:' + res.signature)
          },
          fail: function () {
            console.log('调用失败')
          },
          complete: function () {
            console.log('调用结束')
          }
        }
        wx.updateTimelineShareData(shareData)
        wx.updateAppMessageShareData(shareData)
        wx.onMenuShareQQ(shareData)
        wx.onMenuShareWeibo(shareData)
      })
      wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，
        // 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
        // 对于SPA可以在这里更新签名。
        console.log('分享失败')
      })
    }, function (res) {
      console.log(res)
      console.log(parseInt(res.code))
    })
  }
}
}
