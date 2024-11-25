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
  let settings = {
    addRegistry:true,
    checkRegistry:true,
    banPerson:true,
    checkBans:true
  }
  
  function AddUserToRegistry() {
    readline.question("What is the user name?", _users=>{
      for (let i=0; i<banned.length; i++){
        if (banned[i] === _users) {
          settings.addRegistry = false;
        }
      } // this is to check is new user is already on banned list
      if (settings.addRegistry === true){
        users.push(_users);
        StartApp();
      } else if (settings.addRegistry === false) {
        console.log('${_users} is banned and can not be registered.')
      } else {
        console.log("PERMISSION DENIED! GO HOME")
      }
    })
    //user readline to prompt for the name of the user to be added
  }
  
  function CheckRegistry() {
    if (settings.checkRegistry === true){
      for(let i=0; i<users.length; i++){
        console.log(`User: ${users[i]}`)
      }
      StartApp();
    } else {
      console.log("PERMISSION DENIED! GO HOME")
    }
    //loop through all the users and log them
  }
  
  function BanUser(){
    if (settings.banPerson === true){
      readline.question("Who is the user you want to ban?", _banned=>{
        banned.push(_banned);
        StartApp();
      })
      } else {
        console.log("PERMISSION DENIED! GO HOME")
      }
    //use readline to prompt for the name of the user to be banned
  }
  
  function CheckBanned(){
    if (settings.checkBans === true){
      for(let i=0; i<banned.length; i++){
        console.log(`Banned User: ${banned[i]}`)
      }
      StartApp();
     } else {
      console.log("PERMISSION DENIED! GO HOME")
     }
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