function convertToArr(c){ //რიცხის გადაქცევა სიმრავლედ
    let a=[];
    while (c>0){
        a.push(c%10);
        c=parseInt(c/10);
    }
    return a;
}

function isPal(a){ //სიმრავლის სიმეტრიულობის შემოწმება
    for (let i=0; i<a.length/2; i++){
        if(a[i]!=a[a.length-1-i]){
            return false;
        }
    }
    return true;
}

function palArr (a){//სიმრავლიდან სიმეტრიული რიცხვების ახალი სიმრავლის შექმნა
     let b=[];
     let c;
     for (let i=0; i<a.length; i++){
        c=convertToArr(a[i]);
        if (isPal(c)){
            b.push(a[i]);
        }
     }
     return b;
}

function average(a){//სიმრავლის საშუალო არითმეტიკული
    let x=0;
    for (let i=0; i<a.length; i++){
        x=x+a[i];
    }
    return x/a.length;
}

let a=[3,1211,11,8,224];
let b=palArr(a);
let ans = average(b);
console.log(ans.toFixed(2));
