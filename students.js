class Parent{
    m1(){
        console.log("inside parent");
    }
}

class Child  extends Parent{

}

var ob=new Child()
ob.m1()