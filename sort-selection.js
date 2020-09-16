let a=[2, 8, 1, 3, 0, 1, 0]
let m;
let x;
for (let i=0; i<a.length; i++){
    m=i;
    for (let j=i+1; j<a.length; j++){
        if (a[m]>a[j]){
            m=j;
        }
    }
    x=a[i];
    a[i]=a[m];
    a[m]=x;
}
console.log(a);
