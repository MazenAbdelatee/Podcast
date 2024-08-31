

fetch("data.json").then(resposnse=>{
    return resposnse.json();
}).then((json)=>{
    let data=json;
    // console.log(data);
    
    data.forEach((el)=>{
        let card=document.getElementById("cardshow");
        card.innerHTML +=`
        <div class="col-12 col-md-5 my-3 mx-auto">
        <div class="card bg-dark" >
        <img src="${el.url}" class="">
        <div class="card-body">
        <h5 class="card-title text-light">${el.title}</h5>
        <p class="card-text text-light" id="card-text" style="  overflow: hidden;
        height:60px;  text-overflow: ellipsis;
        ">${el.body}</p>
        <a href="#" class="btn btn-link text-decoration-none text-light read-more-btn" id="read-more-btn">Read More</a>
        <div class="d-flex justify-content-around">
        <a href="#" class="btn btn-danger">Add to watchlist</a>                          
        <a href="#" class="btn btn-danger" onclick="watch(${el.id})">Watch now</a>
        </div>
        </div>
        </div>
        </div>
        `
    })
    let buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            let cardText = this.previousElementSibling; // Select the corresponding card text
            
            if (cardText.style.height === "fit-content") {
                cardText.style.height = "60px"; // Collapse back to 60px
                this.textContent = "Read More";
            } else {
                cardText.style.height = "fit-content"; // Expand to show full content
                this.textContent = "Show Less";
            }
        });
        
        
    })
    
});


let darkbtn=document.getElementById("darkMode");
let isclicked=false;

darkbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!isclicked){
        document.body.style.cssText=`
        background-color:white;
        `
        isclicked=false;
    }else{
        document.body.style.cssText=`
        background-color:#121212;
        `
    }
})


