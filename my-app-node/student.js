
class Student{
  constructor(id , name)
    {
        this.id = id;
        this.name = name;
    }
    
    show(){
        console.log('Student:  '+this.name+' id: '+this.id);
    }
    
    go(){
        console.log(`Student  ${this.id}  ${this.name} GO OUT!!!!shhhhhhhhhhhhh`);
    }
    
    stop(){
        console.log(`Student ${this.id}  ${this.name} stop talking!!`);
    }
    
    }
    
    function getGoodStudent() {
        console.log('good student');
    }
    
    let myStudent=new Student(1 , 'Sara');
    
    
    module.exports={
        Student,
        myStudent,
        getGoodStudent
    }
    
    
    