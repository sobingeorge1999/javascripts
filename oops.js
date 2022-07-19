// classical approch


class Person{
    setPerson(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
        // this.name,age,gender instance variable
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
    
}

var P1= new Person()
P1.setPerson("arun",23,"M")
P1.printPerson()

class New1{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
        // this.name,age,gender instance variable
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }
    
}

var P1= new New1("arun",22,"f")
P1.printPerson()