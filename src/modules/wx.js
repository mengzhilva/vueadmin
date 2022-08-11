/**
 * 微信js-sdk
 * 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 * wx.config({
    debug: false,
    appId: '<?php echo $signPackages["appId"];?>',
    timestamp: <?php echo $signPackages["timestamp"];?>,
    nonceStr: '<?php echo $signPackages["nonceStr"];?>',
    signature: '<?php echo $signPackages["signature"];?>',
    jsApiList: 
 */
import wx from 'weixin-js-sdk'
import Axios from 'axios'
const wxApi = {
  /**
  * [wxRegister 微信Api初始化]
  * @param  {Function} callback [ready回调函数]
  */
  wxRegister (callback) {
    // 这边的接口请换成你们自己的
    Axios.post('/api/user/getconfig').then((res) => {
        console.log("赋值前res", res)
      let data = res.data// PS: 这里根据你接口的返回值来使用
      console.log("赋值后", data)
      wx.config({
        debug: true, // 开启调试模式
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard']
        })


    }).catch((error) => {
      console.log(error)
    })
    wx.ready((res) => {
      // 如果需要定制ready回调方法
      console.log("ready1")
      if (callback) {
        callback()
        console.log("ready2")

      }
      console.log("ready3")

    })
  },
  /**
  * [ShareTimeline 微信分享到朋友圈]
  * @param {[type]} option [分享信息]
  * @param {[type]} success [成功回调]
  * @param {[type]} error   [失败回调]
  */
  ShareTimeline (option) {
    console.log("执行第一步")
    wx.onMenuShareTimeline({
        title: option.title, // 分享标题
        link: option.link, // 分享链接
        imgUrl: option.imgUrl, // 分享图标
        success () {
        // 用户成功分享后执行的回调函数
        console.log("执行第三部")
        option.success()
        },
        cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
        }
    })
  },
  /**
  * [ShareAppMessage 微信分享给朋友]
  * @param {[type]} option [分享信息]
  * @param {[type]} success [成功回调]
  * @param {[type]} error   [失败回调]
  */
  ShareAppMessage (option) {
    wx.onMenuShareAppMessage({
      title: option.title, // 分享标题
      desc: option.desc, // 分享描述
      link: option.link, // 分享链接
      imgUrl: option.imgUrl, // 分享图标
      success () {
        // 用户成功分享后执行的回调函数
        option.success()
      },
      cancel () {
        // 用户取消分享后执行的回调函数
        option.error()
      }
    })
  }
}
export default wxApi