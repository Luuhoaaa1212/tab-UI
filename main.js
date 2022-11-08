const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const tabs=$$('.tab-item')
const panes=$$('.tab-pane')
const tabActive=$('.tab-item.active')
const line=$('.tabs .line')
console.log([tabActive]);
styleItem(line,tabActive)
tabs.forEach((tab,index)=>{
    var pane=panes[index]
    tab.onclick=function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        styleItem(line,this)

        this.classList.add('active')
        pane.classList.add('active')
    }
})

function styleItem(line,tab){
    line.style.left=tab.offsetLeft + 'px'
    line.style.width=tab.offsetWidth + 'px'
}