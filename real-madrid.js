const player = {
    ID: 0,
    name: '',
    nationality: '',
    position: '',
    age: 0,
    height: 0,
    weight: 0,
    goals: 0,
    assists: 0,
    cards: 0,
    matchs: 0,
    salary: 0,
    bonus: function(){
        if(this.matchs > 5 ){
           return this.matchs  * 1000;
        }
        return 0;
    },
    discipline: function(){
        return parseInt (this.matchs / this.cards);
    },
    MVPpoints:  function (){
        return Math.floor (((this.goals +  this.assists) / this.matchs)*100);
        
    }
}


const player1 = Object.create(player);
player1.ID = 1;
player1.name = "Curtois";
player1.nationality = "Belgium";
player1.position = "Gk";
player1.age = 26;
player1.height = 198;
player1.weight = 105;
player1.goals= 0;
player1.assists = 0;
player1.cards = 3;
player1.matchs = 14;
player1.salary = 50000;

const player2 = Object.create(player);
player2.ID = 2;
player2.name = "Ramos";
player2.nationality = "Spain";
player2.position = "CB";
player2.age = 32;
player2.height = 185;
player2.weight = 80;
player2.goals= 3;
player2.assists = 0;
player2.cards = 5;
player2.matchs = 15;
player2.salary = 150000;

const player3 = Object.create(player);
player3.ID = 3;
player3.name = "Varane";
player3.nationality = "France";
player3.position = "CB";
player3.age = 27;
player3.height = 190;
player3.weight = 85;
player3.goals= 1;
player3.assists = 0;
player3.cards = 4;
player3.matchs = 12;
player3.salary = 50000;

const player4 = Object.create(player);
player4.ID = 4;
player4.name = "Carvajal";
player4.nationality = "Spain";
player4.position = "RB";
player4.age = 27;
player4.height = 172;
player4.weight = 73;
player4.goals= 0;
player4.assists = 2;
player4.cards = 2;
player4.matchs = 15;
player4.salary = 55000;

const player5 = Object.create(player);
player5.ID = 5;
player5.name = "Marcelo";
player5.nationality = "Brasil";
player5.position = "LB";
player5.age = 32;
player5.height = 174;
player5.weight = 73;
player5.goals= 12;
player5.assists = 3;
player5.cards = 4;
player5.matchs = 13;
player5.salary = 75000;

const player6 = Object.create(player);
player6.ID = 6;
player6.name = "casemiro";
player6.nationality = "Brasil";
player6.position = "CDM";
player6.age = 28;
player6.height = 184;
player6.weight = 83;
player6.goals= 2;
player6.assists = 4;
player6.cards = 8;
player6.matchs = 13;
player6.salary = 76000;

const player7 = Object.create(player);
player7.ID = 7;
player7.name = "modrich";
player7.nationality = "croatia";
player7.position = "CM";
player7.age = 31;
player7.height = 170;
player7.weight = 70;
player7.goals= 3;
player7.assists = 9;
player7.cards = 3;
player7.matchs = 15;
player7.salary = 96000;

const player8 = Object.create(player);
player8.ID = 8;
player8.name = "cross";
player8.nationality = "Germany";
player8.position = "CM";
player8.age = 32;
player8.height = 177;
player8.weight = 74;
player8.goals= 2;
player8.assists = 6;
player8.cards = 4;
player8.matchs = 13;
player8.salary = 86000;

const player9 = Object.create(player);
player9.ID = 9;
player9.name = "Bale";
player9.nationality = "wales";
player9.position = "RF";
player9.age = 32;
player9.height = 183;
player9.weight = 79;
player9.goals = 6;
player9.assists = 4;
player9.cards = 3;
player9.matchs = 12;
player9.salary = 106000;

const player10 = Object.create(player);
player10.ID = 10;
player10.name = "Hazard";
player10.nationality = "Belgium";
player10.position = "LF";
player10.age = 29;
player10.height = 168;
player10.weight = 69;
player10.goals= 4;
player10.assists = 3;
player10.cards = 2;
player10.matchs = 12;
player10.salary = 108000;

const player11 = Object.create(player);
player11.ID = 11;
player11.name = "Benzema";
player11.nationality = "France";
player11.position = "CF";
player11.age = 32;
player11.height = 183;
player11.weight = 80;
player11.goals= 12;
player11.assists = 3;
player11.cards = 3;
player11.matchs = 15;
player11.salary = 109000;


const Team = {
    name: '',
    players: [ ],
    addPlayer: function (p){
        this.players.push(p);
        this.sortPlayersBySalary();
    },
    playersBySalary: [],
    sortPlayersBySalary: function (){
        let a = [...this.players];
        let x;
        let j;
        for (let i=1; i<a.length; i++){
            x=a[i];
            for (j=i-1; j>=0 && x.salary<a[j].salary; j--){
                a[j+1]=a[j];
            }
            a[j+1]=x;
        }
        this.playersBySalary = a;
    },
    bestAssister: function () {
       let a = [...this.players];
       let c=[];
       let x=a[0];
       for (let i=1; i<a.length; i++){
            if(x.assists <= a[i].assists){
                x=a[i];
                c.push(x);
            }
       }   
       return c; 
    },
    
    bestBombardier: function () {
        let a = [...this.players];
        let x=a[0];

        for (let i=1; i<a.length; i++){
            if(x.goals < a[i].goals || x.goals == a[i].goals && x.assists < a[i].assists){
                 x=a[i];
             }
        }
        return x;
    },   

        randomPlayer: function(){
            b=this.players.length;
            let x=Math.floor(Math.random()*b);
            return this.players[x];
        }
    
}

const team1 = Object.create(Team);
team1.name = 'Real Madrid';

team1.addPlayer(player1);
team1.addPlayer(player2);
team1.addPlayer(player3);
team1.addPlayer(player4);
team1.addPlayer(player5);
team1.addPlayer(player6);
team1.addPlayer(player7);
team1.addPlayer(player8);
team1.addPlayer(player9);
team1.addPlayer(player10);
team1.addPlayer(player11);

// console.log(team1.playersBySalary);
// console.log(team1.players);
// console.log (team1.bestBombardier());


console.log(team1.randomPlayer());