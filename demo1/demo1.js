var thetext = '这是一个实现自动打字效果的demo,我预备用setTimeout实现'
var textdata = thetext.split('')
var textarea = document.getElementById("aimtext")
// textarea.focus()
var i =0
console.log(textarea)
// var startbutton = document.getElementById("start")
document.onclick=function(e){
    let target = e.target
    if(target.id=='start'){start()}
    if(target.id=='end'){end()}
    // if(target.id=='delete'){delete()}
}
function start(){
    let len = textdata.length
    stopcontrol = setInterval(()=>{
        if(i>=len){
            clearInterval(stopcontrol)
        }else{
            write0(textdata[i++])
        }
    },300)
}
function write0(str){
    textarea.innerHTML +=str
}
function end(){
    clearInterval(stopcontrol)
}
// function delete(){  //delete这里不是很会
//     stopcontrol = setInterval(()=>{
//         if(i>=len){
//             clearInterval(stopcontrol)
//         }else{
//             write0(textdata[i++])
//         }
//     },150)
// }