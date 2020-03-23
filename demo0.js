var angle = Math.ceil(Math.random() * 1800)
var nowtriangle = 0
var triger = false
function getTags(classname) {    //获取dom节点
    return document.getElementsByClassName(classname)[0]
}
document.onclick = function (e) {
    console.log("click")
    var target = e.target || e.srcElement
    console.log(target.className)
    if (target.className == "start" && triger == false) {
        console.log('验证通过')
        setTimeout(() => {
            star()
        }, 10);
    }
}
function star() {
    var operate = getTags('triangle')
    console.log('开始转啊'+angle)
    if (nowtriangle < angle) {
        if(nowtriangle < angle-200){
            nowtriangle = nowtriangle + 10
        }else{
            nowtriangle = nowtriangle + 5
        }
        operate.style.transform = "rotate(" + nowtriangle + "deg)"
        operate.style.transformOrigin = 'bottom'
        setTimeout(() => {
            star()
        }, 10);
    } else {
        angle = Math.ceil(Math.random() * 1800)
        nowtriangle = 0
        console.log(false)
        return
    }

}