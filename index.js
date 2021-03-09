/**
 *  浏览器页面隐藏超过3分钟后 停止轮询操作函数，否则轮询执行函数
 * */
var MAX_WAIT_TIME = 1000 * 60 * 3;
function load() {
    if (document.hidden) {
        //如果
      if (Date.now() - hiddenTime > MAX_WAIT_TIME) {
        return setTimeout(load, 100);
      }
    } else {
      hiddenTime = Date.now();
    }
    //...other roperations  
}
load()

/**
 * 浏览器页面显示和隐藏的判断
 */
//Document.hidden （只读属性）返回布尔值，表示页面是（true）否（false）隐藏。
// 添加监听器
document.addEventListener('visibilityChange', function() {
    console.log("当前页面是否被隐藏：" + document[hidden]);
}, false);