console.log("Hello Programmer");
const button = document.querySelector('button');
const child = document.getElementById('child');
const xcord = document.getElementById('xcord');
const ycord = document.getElementById('ycord');
const left = document.getElementById('left');
const right = document.getElementById('right');
const center = document.getElementById('center');
const ch1 = document.getElementById('ch-1');
var count = 0;

button.addEventListener('click',(e)=>{
    console.log(e.target);
    count++;
    window.alert(`You Clicked ${count} time`)
});
child.addEventListener('mousemove',(event)=>{
    xcord.innerHTML=`x-cord: ${event.clientX} `;
    ycord.innerHTML=`y-cord: ${event.clientY} `;
});
right.addEventListener('click',()=>{
    child.style='transform:translateX(100%)';
});
left.addEventListener('click',()=>{
    child.style='transform:translateX(-100%)';
});
center.addEventListener('click',()=>{
    child.style='transform:translateX()';
});
ch1.addEventListener('ondrag',(e)=>{
    console.log(e)
})