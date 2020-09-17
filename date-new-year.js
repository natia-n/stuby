let x=new Date("2021/1/1").getTime(); //dro 1970 dan 01.01.2021mde
let y=new Date().getTime(); // dro 1970 dan dgemde
let milliSeconds=x-y;
setInterval((a) => {
    return a=a-1000;
}, 1000, milliSeconds);
let seconds=Math.floor(milliSeconds/1000%60);
let minute=Math.floor(milliSeconds/1000/60%60);
let hours=Math.floor(milliSeconds/1000/60/60%60);
let day=Math.floor(milliSeconds/1000/60/60/24);
console.log(day, hours, minute, seconds);


