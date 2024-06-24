//1.this keyword:-"this" keyword refers to an object that is executing the current piece code.

let student={
  name:"ratnesh",
  age:21,
  eng:56,
  math:90,
  sci:40,
  getAvg(){
    console.log(this);//student=this.
    let avg=(this.eng+this.math+this.sci)/3;
    console.log(avg);
  }
}
console.log(student.getAvg());

//2.try keyword:- find the error.
//2.catch keyword:-catch the error.

// console.log("hello");
// console.log(a);
// console.log("hello1");

console.log("hello");
try{
  console.log(a);
}catch{
  console.log("caught the error.. a is not define.")  
}

console.log("hello1");