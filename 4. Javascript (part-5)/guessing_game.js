let max=prompt("Enter the max number:-");
let random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");
while(true)
  {

  
if(guess=="quit")
  {
    console.log("Quit the game.");
    break;
  }
  if(guess==random)
    {
      console.log("Right guess! guess number was "+ random);
      break;
    }
    else if(guess<random)
      {
        guess=prompt("guess number was to small! enter the guess no try again.");

      }
      else
      {
        guess=prompt("guess number was to large! enter the guess no try again.");
      }
    }
