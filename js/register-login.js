let signInForm = document.getElementById("signForm");
let signName = document.getElementById("name");
let signEmail = document.getElementById("Email");
let signPassword = document.getElementById("Password");
let confirmation = document.getElementById("Re-enterPassword");
let signButton = document.getElementById("sButton");
let message=document.getElementById("massage");


// event on the form

signInForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let Sname=signName.value;
    let Semail=signEmail.value;
    let Spass=signPassword.value;
    let SconfirmPass=confirmation.value;

    message.classList.remove("alert-danger", "alert-success");
    // check the password length
    if (Spass.length>=8) {

        //confirm password
        if (Spass===SconfirmPass) {
            let users = JSON.parse(localStorage.getItem("users"))||[];
    
            const existUser=users.filter(user=>(user.Sname===Sname||user.Semail===Semail))
        
            if (existUser.length>0) {
                message.innerText="user already exist";
                message.classList.add("alert-danger")
            
            }else{
                users.push({Sname:Sname,Semail:Semail,Spass:Spass,SconfirmPass:SconfirmPass});
    
                localStorage.setItem("users",JSON.stringify(users));
                message.innerText='user added succussfully';
                message.classList.add("alert-success");
                signName.value='';
                signEmail.value='';
                signPassword.value='';
                confirmation.value='';    
            }   
        }else{
            message.innerText="Re-enter the password correctly";
            message.classList.add("alert-danger");
    
        }
        
    }else{
        message.innerText='the password must be at least 8 character';
        message.classList.add("alert-danger");
    }
});
// set all needing variable

let logForm= document.getElementById("logForm");

// let logBtn=document.getElementById('logButton');
let massage=document.getElementById("massage");



//event on form


logForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let logEmail=document.getElementById("logEmail").value;
    let logPass=document.getElementById("logPassword").value;

    // console.log(logEmail);
    // console.log(logPass);
    
    

    massage.classList.remove("alert-danger", "alert-success");

    let user=JSON.parse(localStorage.getItem("users"))||[];

    let users= user.filter(user=>user.logEmail===logEmail&&user.logPass===logPass)

    console.log(user);
    

    if(users){
        massage.innerText = "login successfully";
        massage.classList.add("alert-success");

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000)
    }
    else{
        
        massage.innerText="The Email or password isn't correct";
        massage.classList.add("alert-danger");
    }
});


