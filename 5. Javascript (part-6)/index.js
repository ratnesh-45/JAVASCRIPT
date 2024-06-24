//function:-

//create the function.

function hello()
{
  console.log("hello");
}
hello();

function print1To5()
{
  for(let i=1;i<=5;i++)
    {
      console.log(i);
    }
}
print1To5();

function printAge()
{
  let age=23;
  if(age>=18)
    {
      console.log("adult");
    }else{
      console.log("not adult");
    }
}
printAge();

//function with argument:-

function printName(name)
{
  console.log(name);
}
printName("ratnesh");


function printInfo(name,age)
{
  console.log(`${name}'s age is ${age}.`);
}
// printInfo("ratnesh",21);
printInfo("rohit",25);
// printInfo(25);


// function sum(a,b)
// {
//   console.log(a+b);

// }
sum(2,1);
sum(4,6);
sum(6,1);


//return function:-

function sum(a,b)
{
  console.log("hello1");
  return a+b;
  console.log("hello2");
}
// let s=sum(3,4);
// console.log(s);
// console.log(sum(4,6));
console.log(sum(sum(3,6),9));

//scope:

//function scope:-


// let sum=12;//globle scope.
function a(a,b)
{
 let sum=a+b;//function scope.
 console.log(sum);

}
a(1,5);
console.log(sum);

//block scope:

{
  let a=25;//block scope.
}
console.log(a);//not print.

//lexical scope.

function outerFun()
{
  let x=5;
  let y=6;
  function innerFun()
  {
    console.log(x);
  }
  innerFun();
}
outerFun();

//function Expression:

let add=function(a,b)
{
  return a+b;
}

console.log(add(2,8));

let hell=function()
{
  console.log("hello");
}
// hell();

//Higher order function:-

function multipleGreet(func,count)
{
  for(let i=1;i<=count;i++)
    {
      func();
    }
}

let greet=function(){
  console.log("hello");
}

multipleGreet(greet,10);

//higher order function(return):-

function oddOrEvenTest(request)
{
  if(request=="odd")
    {
      let odd=function(n)
      {
        console.log(!(n%2==0));
      }
      return odd;
    }
    else if(request=="even")
      {
        let even=function(n)
        {
          console.log((n%2==0));
        }
        return even;
      }
      else
      {
        console.log("Request wrong.");
      }
}
let request="odd";

let test=oddOrEvenTest(request);
// console.log(test(6));//false
console.log(test(7));//true


//methods:-

const calculater={
add:function(a,b)
{
  return a+b;
},
sub:function(a,b)
{
  return a-b;
},
multi:function(a,b)
{
  return a*b;
}

};

//calling the method:-
console.log(calculater.add(2,4));
console.log(calculater.sub(2,8));
console.log(calculater.add(2,9));

//Define shorthand method:-
const calculater1={
  add(a,b)
  {
    return a+b;
  },
  sub(a,b)
  {
    return a-b;
  },
  multi(a,b)
  {
    return a*b;
  }
  
  };
  //calling the method:-
console.log(calculater1.add(2,4));
console.log(calculater1.sub(2,8));
console.log(calculater1.add(2,9));