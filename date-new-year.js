// Date.now();
// Date.UTC()
// // Date.prototype.getDate()
// Date.prototype.getTime()
// console.log (Date.prototype.getTime());

// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
// // console.log(utcDate1.toUTCString());
// console.log(utcDate2.toUTCString());
// Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
// let utcDate1=Date.UTC(1970, 09, 16, 11, 12, 7);
// console.log(utcDate1);

let x=new Date("2021/1/1").getTime();
let y=new Date().getTime();
let milliSeconds=x-y;
let milliSeconds2=milliSeconds%1000;
let seconds=Math.floor(milliSeconds/1000%60);
let minute=Math.floor(milliSeconds/1000/60%60);
let hours=Math.floor(milliSeconds/1000/60/60%60);
let day=Math.floor(milliSeconds/1000/60/60/24%365);
let year=Math.floor(milliSeconds/1000/60/60/24/365);
console.log(year, day, hours, minute, seconds, milliSeconds2);

