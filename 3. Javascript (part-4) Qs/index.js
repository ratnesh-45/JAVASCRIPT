//Loop:-

//1.for loop:-

// for(let i=1;i<=5;i++)
//   {
//     console.log(i);
//   }

//e.g:-
//print all odd number(1 to 15).

// for(let i=1;i<=15;i++)
//   {
//     if(i%2!=0)
//       {
//         console.log(i);
//       }
//   }

//e.g:-
//print even number (2 to 10).

// for(let i=1;i<=10;i++)
//     {
//      if(i%2==0)
//          {
//            console.log(i);
//         }
//     }

//2.infinit loop:-

// for(let i=1;i>=0;i++)
//   {
//     console.log(i);
//   }

//e.g:-
//print multiplication of 5.
// let n=5;
// for(let i=1;i<=10;i++)
//   {
//     console.log(n+"*"+i+"="+n*i);
//   }

//3.nested loop:-

// for(let i=1;i<=3;i++)
//   {
//     for(let j=1;j<=3;j++)
//       {
//         console.log(j);
//       }
//   }

//4.while Loop:-

// let i=1;
// while(i<=5)
//   {
//     console.log(i);
//     i++;
//   }

//e.g:-
//gess game:-

// let favMovie="kick";
// let gess=prompt("Enter your favroite Movie:-");
// while((gess!=favMovie) &&(gess!='quit'))
//   {
//     gess=prompt(" wrong gess plz try again:-");
//   }
//   if(gess==favMovie)
//     {
//      alert("Congraculation!");
//     }

//5.break keyword:-

// let i=1;
// while(i<=5)
//   {
//     if(i==3)
//       {
//         break;
//       }
//       console.log(i);
//       i++;
//   }

//6.loop with array:-

// let fruits=["apple","orange","banana","kivi"];
// for(let i=0;i<fruits.length;i++)
//   {
//     console.log(i,fruits[i]);
//   }

//7.loop with nested array:-

// let students=[["aman",23],["rahul",24],["rohit",25]];
// for(let i=0;i<students.length;i++)
//   {
//     console.log(`index ${i}`);
//     for(let j=0;j<students[i].length;j++)
//       {
//         console.log(students[i][j]);
//       }
//   }

//8.for of loop:-

// let fruits=["mango","apple","banana","orange","kivi"];
// for(i of fruits)
//   {
//     console.log(i);
//   }
//   for(char of "apnacollege")
//     {
//       console.log(char);
//     }

//9.nested for of loop:-

let heroes=[["superman","batman","wonder woman"],["spiderman","ironman","thor"]];

for(list of heroes)
  {
    for(hero of list)
      {
        console.log(hero);
      }
  }