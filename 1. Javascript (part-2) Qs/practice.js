// let startA="Ap";
// let length=startA.length;
// if(length>3)
//   {
//     console.log("This is good String.");
//   }
//   else
//   {
//     console.log("This is Not good String.");
//   }

//Q.1:-

// let num=10; //good
// //let num=15; bad
// if(num%10==0)
//   {
//     alert("This number is good.");
//   }
//   else
//   {
//     alert("This number is Not good.");
//   }

//Q.2:-

// let name=prompt("Enter the Name:-");
// let age=prompt("Enter the Age:-");

// let result=name+" is "+age+" years old.";
// alert(result);

//Q.3:-

// let quarter=3;
// switch(quarter)
// {
//   case 1:
//     {
//         alert("January,February,March");
//     break;
//     }
  
//     case 2:
//       {
//         alert("April,May,June");
//     break;
//       }
    
//     case 3:
//       {
//         alert("July,August,September");
//     break;
//       }
    
//     case 4:
//       {
//           alert("October,November,December");
//     break;
//       }
  
//     default:
//       {
//         alert("None");
//       }
      
// }

//Q.4:-

// let string="apple";
// let length=string.length;

// if(length>=5)
//   {
//     alert("String is golden.");
//   }
//   else
//   {
//     alert("String is Not golden.");
//   }

//Q.5:-

// let a=prompt("Enter the 1st Number:-");
// let b=prompt("Enter the 2nd Number:-");
// let c=prompt("Enter the 3rd Number:-");

// if(a>b && c<a)
//   {
//     alert("largest Number is "+a);
//   }
//   else if(b>a && c<b)
//   {
//     alert("largest Number is "+b);
//   }
//   else
//   {
//     alert("largest Number is "+c);
//   }

//Q.6:-
  let a=prompt("Enter the 1st Number:-");
let b=prompt("Enter the 2nd Number:-");

if((a%10)==(b%10))
  {
    alert("Same last digit both numbers.");
  }
  else
  {
    alert(" Not Same last digit both numbers.");
  }
