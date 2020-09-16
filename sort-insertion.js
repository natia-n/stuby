let k=[9, 2, 7, 1, 0, 1, 8, 0]

function insertionSort(a){
    let x;
    let j;
    for (let i=1; i<a.length; i++){
        x=a[i];
        for (j=i-1; j>=0 && x<a[j]; j--){
            a[j+1]=a[j];
        }
        a[j+1]=x;
    }
}

console.log(k);
