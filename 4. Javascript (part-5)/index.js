// Object literls:- it can store (key,value).


//create the object:-
const student={//this is object.
  name:"ratnesh",
  age:21,
  mark:45.6
};

const items={
  price:120.3,
  discount:40,
  colors:["red","pink"]
};

//create the post:
const post={
  username:"ratneshkumar",
  content:"this is my #first post",
  likes:120,
  reposts:5,
  tags: ["@apnacollege","@ratnesh"]
};

//get/acess value:-
//syntax:- objectName["keyName"];
//objectName.keyName;

const student1={
  name:"ratnesh",
  content:120
};

console.log(student1["name"]);
console.log(student1.content);

//conversion to get value:-
//objectkey converts autometically string formet.

const obj={
  1:"a",
  2:"b",
  null:"c",
  true:"d",
  undefined:"e",
  
}

console.log(obj[1]);// not use double qoute in big bricket.
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[true]);
console.log(obj[name]);

//Add_update in object:-

const student2={
  name:"ratnesh",
  age:21,
  marks:88.8,
  city:"muzaffarpur"
}
console.log(student2);
//update:-
console.log(student2.city="mumbai");
console.log(student2);

//add:-
console.log(student2.gender="male");
console.log(student2);

//update:-
console.log(student2.marks="A");
console.log(student2);
console.log(student2.marks=[12,45,68]);
console.log(student2);

//delete key and value:-

console.log( delete student2.marks);
console.log(student2);


//object of objects:-

const classInfo={
  ratnesh:{
    marks:23,
    city:"mumbai"
  },
  rahul:{
     marks:45,
    city:"pune"
  },
  rohit:{
     marks:56,
    city:"delhi"
  }

};

console.log(classInfo);

console.log(classInfo.ratnesh);
//update
console.log(classInfo.rohit="kolkta");
console.log(classInfo.rohit);

//Array of objects:-

const classInfo1=[
  {name:"ratnesh",
    city:"delhi"
  },
  {
    name:"rohit",
    city:"mumbai"
  },
  {
    name:"rahul",
    city:"pune"
  }
];
console.log(classInfo1);
console.log(classInfo1[1]);
console.log(classInfo1[2].city);
//update city
console.log(classInfo1[1].city="gurgao");
console.log(classInfo1);
//add gender
console.log(classInfo1[0].gender="male");
console.log(classInfo1[0]);







