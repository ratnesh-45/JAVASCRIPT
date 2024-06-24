//Qs.1
function printAvg(a,b,c)
{
  let avg=(a+b+c)/3;
  console.log("Avarage is",avg);
}
printAvg(3,6,5);

//Qs.2

function printTable(n)
{
  for(let i=1;i<=10;i++)//for(let i=n;i<=n*10;i+=n)
    {
      console.log(`${n}*${i}=${n*i}`);

    }
}
printTable(19);


//Qs.3
function print1ToN(n)
{
  let sum=0;
  for(let i=1;i<=n;i++)
    {
      sum+=i;
    }
    return sum;
}
console.log(print1ToN(10));

//Qs.4

let str=["i","am","ratnesh","kumar."];

function concat(str)
{
  let result="";
  for(let i=0;i<str.length;i++)
    {
      result+=str[i];
    }
    return result;
}
console.log(concat(str));

//Qs.5

let greet="hello";
function outergreet()
{
  let greet="namaste";
  console.log(greet);
  function innergreet()
  {
    console.log(greet);
  }
  innergreet();
}
console.log(greet);
outergreet();

//Qs.6

let arr=[2,4,3,6,8,10];
function largest()
{
  for(let i=0;i<arr.length;i++)
    {
      if(arr[i]==key)
        {
          return arr[i];
        }
    }
}

//Qs.7
let num=(Math.floor(Math.random()*10)+1);
console.log(num);

//Qs.8

// let str1="apple";
// let count=0;
// function countStr(str1)
// {
//   for(let i=0;i<str1.length;i++)
//     {
//       if(str1[i]=='a' || str1[i]=='e' ||str1[i]=='i' str1[i]=='o' || str1[i]=='u'){
//         count++;
//       }


//     }
//     console.log(count);
// }

// countStr(str1);
