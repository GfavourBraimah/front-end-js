

const usersDatabase ={
    "Braimah" : {
     firstName: "Braimah",
     lastName: "Gfavour",
     email: "gfbraimah@gmail.com",
     accountActivated: true,
     password: "12345678"
    },
    "bog_reaper" : {
     firstName: "bog",
     lastName: "Reaper05",
     email: "bogreaper05@gmail.com",
     accountActivated: false,
     password: "bog12345"
    },
    "Bobito" : {
     firstName: "Braimah",
     lastName: "Bobito",
     email: "bobitobraimah@gmail.com",
     accountActivated: true,
     password: "bobito12345"
    },
    "Geefff" : {
     firstName: "Braimah",
     lastName: "Geefff",
     email: "gfffbraimah@gmail.com",
     accountActivated: true,
     password: "gefff12345"
    },
  }
  

function displayUserDetails(){
    //Enter password
    let username = prompt("Enter your user name");

while(validateUsername(username) == false){
 username = prompt("User name not valid .Please enter a valid user name ")
    
}

if (username == null){
    return
}
 
// eEnter password
 let password = prompt("Enter your password");
 validatePassword(password)

 while(validatePassword(password) == false){
   password = prompt("Password invalid. Please enter a valid password")
}

if (password == null){
    return
}

//Confirm password
let passwordConfirm = prompt("Confirm your password")
//if confirm password is not equals to password
while (passwordConfirm !== password) {
    passwordConfirm = prompt("Password Incorrect. Confirm your password again!")
}

if (passwordConfirm == null){
    return
}

//console.log(username, password, passwordConfirm)

// check the user name is this database exist
const user = usersDatabase[username]

if (user == undefined){
    alert("User not found")
    return
}


 alert(`
  User found with the following details:
  First Name: ${user.firstName}
  Last Name: ${user.lastName}
  Email: ${user.email}
  Account Activated: ${user.accountActivated}
 
 `)

}

displayUserDetails()
alert("You have come to the end of this program! Goodbye");
 




 function validateUsername(username){
    if (username == null){
        return true
    }
    if (username.length > 10){
        return false
    }else{
        return true
    }
 }

 function validatePassword(password){
    if(password == null){
        return true
    }
    if (password.length > 6){
        return true 
    }else{
        return false
    }
 }
