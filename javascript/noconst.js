class Employee
{
    id=38;
    name="sampath";

    displayInfo(){
        console.log(this.id+"   "+this.name);
    }
}
let emp=new Employee(38,"sampath");
emp.displayInfo();