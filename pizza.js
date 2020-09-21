const pizzas=[
    {
        name: "პეპერონი",
        price: 20
    }, 
    {
        name: "მარგარიტა",
        price: 15
    },
    {
        name: "კომბინირებული",
        price: 22
    }
];
let a=new Date().getTime(); // მილიწამები 1970 დან შეკვეთის დაწყებამდე

function random(){
    return Math.floor(Math.random()*pizzas.length);
};
let x=random(); //მასივის შემთხვევითი ინდექსი

console.log("თქვენი პიცა ("+ pizzas[x].name+") მზადდება");

setTimeout(() => {
    console.log ("თქვენი პიცა გზაშია");
}, 2000);

setTimeout(() => {
    console.log ("თქვენი პიცა ადგილზეა, ფასი - " + pizzas[x].price , "ლარი");
    let b=new Date().getTime(); // მილიწამები 1970 დან შეკვეთის დასრულებისას
    let shekvetisDro=(b-a);
    console.log ("შეკვეთის დრო: " + shekvetisDro, "მილიწამი");
}, 5000);