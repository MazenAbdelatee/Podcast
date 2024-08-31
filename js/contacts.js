// take the input form the form

let mForm=document.getElementById("MessageForm");

let firstName=document.getElementById("First");
let lastName=document.getElementById("Last");
let Email=document.getElementById("Email");
let Subject=document.getElementById("Subject");
let area =document.getElementById("text");
let subtn=document.getElementById("submit");
let mass=document.getElementById("mass")


// event on the form


mForm.addEventListener("submit",(e)=>{
    
    let fName=firstName.value;
    let lastName=lastName.value;
    let email=Email.value;
    let Subject=Subject.value;
    let txtArea=area.value;

    mass.classList.remove("alert-danger","alert-succuess");

    let calls= JSON.parse(localStorage.getItem("calls"))||[];
    let real_call =calls.filter(call=>call.fName===fName&&call.email===email&&call.txtArea===txtArea);
    if(real_call.length>0){
        mass.classList.add("alert-danger")
        mass.innerText="we already have this message";
    }
    else{
        call.push({fName:fName,lastName:lastName,email:email,Subject:Subject,txtArea:txtArea});

        localStorage.setItem("calls",JSON.stringify(calls))
        mass.classList.add("alert-success")
        mass.innerText="sent successfully";

        firstName.value ="";
        lastName.value ="";
        Email.value ="";
        Subject.value ="";
    }
})
