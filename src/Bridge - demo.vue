<template>
    <div class="newTaskPage">
        <input type="text">
    </div>
</template>

<script>


export default {

  mounted(){
      // this.$bridge.callhandler('testObjcCallback', {'userId':'zhangsan'}, (data) => {
      // // 处理返回数据
      // alert("IDFA为：" + data)
      
    // })
  
    
    // this.$bridge.registerhandler('testJavascriptHandler', function(data, responseCallback){
    //   alert('openUDID为:' + data)
    //   // responseCallback(data, responseCallback)
      // bridge.registerHandler('testJavascriptHandler', function(data, responseCallback){
      //     var responseData = { '用户名': '章三' }
      //       //处理完，回调传值给oc
      //       responseCallback(responseData)
      //   })
    // })

      function setupWebViewJavascriptBridge(callback) {                                            
          if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }       
          if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }              
          window.WVJBCallbacks = [callback];                                                        
          var WVJBIframe = document.createElement('iframe');                                        
          WVJBIframe.style.display = 'none';                                                        
          WVJBIframe.src = 'https://__bridge_loaded__';                                             
          document.documentElement.appendChild(WVJBIframe);                                                
          setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)                  
      }                                                                                                    
                                                                                                    
      setupWebViewJavascriptBridge(function(bridge) {                                                  
                                                                                                    
        bridge.callHandler('testObjcCallback', {'userId':'zhangsan'}, function(response) {                         
              alert('IDFA为:'+response)                                                                           
        })                                                                                                    
                                                                                                                             
        bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {                         
          alert('openID为: ' + JSON.stringify(data))                                                  
                                                                                                    
          var responseData = { '用户名': '章三' }                                                  
                                                                                                    
          responseCallback(responseData)                                                                           
        })                                                                                                    
    })                                                                                                    
  }
}

</script>



<style lang="scss" scoped>
input{
        width:100px;
        height:100px;
    }

</style>
