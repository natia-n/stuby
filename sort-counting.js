function countingSort (a){
    let c=new Array (9).fill(0);
    let b=[];
    for (let i=0; i<a.length; i++){
        c[a[i]]=c[a[i]]+1;
    }
    for (i=0; i<a.length; i++){
        while (c[i]>0){
            c[i]=c[i]-1;
            b.push(i);
        }           
    }
    return b;
}

let a=[1,6,2,4,1,4,1,0,6];
console.log(countingSort(a));