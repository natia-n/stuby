const Staff = {
    name: "",
    position: "",
    id: "",
    salary: 0,
    coefficient: 0,
    coefficient_Price: 0,
    bonus: function (){
        return this.coefficient * this.coefficient_Price;
    }
}

const staff1 = {...Staff};
staff1.name = "Natia Nakashidze";
staff1.position = "Accountant-1";
staff1.id = '61006010876';
staff1.salary = 2000;
staff1.coefficient = 12;
staff1.coefficient_Price = 30;

const staff2 = {...Staff};
staff2.name = "Mehmet Esen";
staff2.position = "Director";
staff2.id = '61224152574';
staff2.salary = 7500;
staff2.coefficient = 15;
staff2.coefficient_Price = 30;

const staff3 = {...Staff};
staff3.name = "Teona Kakabadze";
staff3.position = "Assistant";
staff3.id = '61224152511';
staff3.salary = 4500;
staff3.coefficient = 13;
staff3.coefficient_Price = 30;

const staff4 = {...Staff};
staff4.name = "Nino Kakhiani";
staff4.position = "Head HR";
staff4.id = '61666152511';
staff4.salary = 2500;
staff4.coefficient = 11;
staff4.coefficient_Price = 30;

const staff5 = {...Staff};
staff5.name = "Khalid Nakashidze";
staff5.position = "Head Accountant";
staff5.id = '616661525500';
staff5.salary = 5500;
staff5.coefficient = 16;
staff5.coefficient_Price = 30;

const staff6 = {...Staff};
staff6.name = "Maia Kontselidze";
staff6.position = "Accountant-2";
staff6.id = '616661525498';
staff6.salary = 1500;
staff6.coefficient = 8;
staff6.coefficient_Price = 30;


const Department = {
    id: 0,
    name: "",
    staff: [],
    addStaff: function(s){
        this.staff.push(s);
    },
    biggestSalary: function(){
        if(this.staff.length == 0) {
            return null;
        }        
        let m = this.staff[0];
        for(let i=1; i<this.staff.length; i++){
            this.staff[i];
            if(m.salary < this.staff[i].salary){
                m=this.staff[i];
            }
        }
        return m.salary;
    },
    lowestSalary: function(){
        if(this.staff.length==0){
            return null;
        }
        let m = this.staff[0];
        for(let i=1; i<this.staff.length; i++){
            if(m.salary > this.staff[i].salary){
                m=this.staff[i];
            }
        }
        return m.salary;
    },
    biggestBonus: function() {
        if(this.staff.length ==0){
            return null;
        }
        let m=this.staff[0];
        for(let i=1; i<this.staff.length; i++){
            if(m.bonus<this.staff[i].bonus){
                m=this.staff[i];
            }
        }
        return m;
    },
    allSalaries: function() {
        let m=0;
        for(let i=0; i<this.staff.length; i++){
            m=m+this.staff[i].salary;
        }  
        return m;
    },
    robinHood: function(){
        let m = this.biggestSalary()*0.1;
        this.biggestSalary()-=m;
        this.lowestSalary()+=m;
    }
}


const department1 = {...Department, staff: [...Department.staff]};
department1.name = "Management";
department1.id = 1;


const department2 = {...Department, staff: [...Department.staff]};
department2.name="Accountant";
department1.id = 2;

department1.addStaff(staff2);
department2.addStaff(staff1);
department1.addStaff(staff3);
department1.addStaff(staff4);
department2.addStaff(staff5);
department2.addStaff(staff6);

const Company = {
    name: '',
    departments: [],
    addDepartment: function (d){
        this.departments.push(d);
    },
    richestDepartment: function(){

    }
}

const company1 = {...Company, departments: [...Company.departments]};
company1.name = "Casino";

company1.addDepartment(department1);
company1.addDepartment(department2);
