var angle = Math.ceil(Math.random() * 1800)
var nowtriangle = 0
var triger = false
var listener = document.getElementsByClassName('start')
listener[0].addEventListener('click',clickRun)
function clickRun() {
    console.log("click")
    var target = document.getElementsByClassName("start")[0]
    console.log(target.className)
    if (target.className == "start" && triger == false) {
        console.log('验证通过')
        setTimeout(() => {
            star()
        }, 10);
    }
}
function star() {
    var operate = document.getElementsByClassName('triangle')[0]
    console.log('开始转啊'+angle)
    if (nowtriangle < angle) {
        if(nowtriangle < angle-300){
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