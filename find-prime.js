function isPrime (a){
    if(a==1){
        return false;
    }
    for (let m=2; m<a; m++){
        if (a%m==0) {
            return false;                       
        }        
    }
    return true;
}

function findPrimes(a){
    let b = [];
    for (let i=0; i<a.length; i++){
        if(isPrime(a[i])){
            b.push(a[i]);
        }
        
    }
    return b;
}

let a=[1, 4, 7, 3, 9];
let b=[1, 4, 7, 3, 11];
let c=[1, 4, 7, 3, 17];

let x = findPrimes(a);
x.push(53);
console.log(x);
console.log(findPrimes(b));
console.log(findPrimes(c));
console.log(isPrime(47));
