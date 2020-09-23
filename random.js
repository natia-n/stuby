function random(b){
    return Math.floor(Math.random()*b)
}
console.log(random(11));



function random(a, b){
    return Math.floor(Math.random() * (b-a)+a);
};