const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  /*
  We will create an application where we will register people into an array. 
  We will have a function that allows the host to check the registry to see all the user registered.
  Use a for loop to go through all the users registered
  
  This application also allows the host add users to the banned list and check them when they need to
  
  CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
  - hint, you will need a boolean to check... let checkBan = false...
  
  CHALLENGE 2, use the settings to allow the adding the go through or not
  
  PLANNNING:
  Adding User to Registry or Banning a User:
  Use readline.question to prompt for the name of the user to be addeed or banned. Use .push to push the name inputted 
  into the array of users or banned. 
  (Example: users.push or banned.push to push the new inputted name into the users or banned array)
  
  Checking Registry or Bans:
  Use for loop to read through all the names in the Registry/Banned List. Set i=0 to start from the first item in the
  array, keep the loop running until all the names have been shown using i < the length of the array (users.length/banned.length), 
  use i++ to add to the i everytime the loop loops to keep moving through the array. Use console.log inside the for loop 
  in order to display each name in the array. (Example: console.log(`User: ${users[i]}`))
  Output will show "User:" or "Banned User:"
  
  Adding Settings:
  Add each funtion code inside if statement (if settings for each function returns true then the function will run 
  and StartApp() will be called,if it returns false or etc. then permission will be denied and function will not run.)
  */
  
  if (_users === banned){
    let addRegistry = false;
  }
  
  let users = [];
  let banned = [];
  
  
  function AddUserToRegistry() {
    
    //user readline to prompt for the name of the user to be added
  }
  
  function CheckRegistry() {
    
    //loop through all the users and log them
  }
  
  function BanUser(){
  
    //use readline to prompt for the name of the user to be banned
  }
  
  function CheckBanned(){
    
    //loop through all the banned users and log them
  }
  
  function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      //add other commands here to add
    
      if (_command !== "quit") {
        StartApp();
      } else {
        readline.close();
      }
    });
  }
  
  StartApp();