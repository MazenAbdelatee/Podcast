



fetch("data.json")
.then((response)=>{return response.json();})
.then((json)=>{
    let data=json;
    let slide=document.getElementById("1");
    
    let trans=document.getElementsByClassName("trans");
    let count=0;
    
    data.forEach(el => {
        // General Slide (limit to 6 slides)
        if (count < 6) {
            slide.innerHTML+= `
                <div class="swiper-slide">
                    <div class="slide-content">
                        <img src="${el.url}" alt="${el.title}" class="Image">
                        <div class="overlay">
                            <h3>${el.title}</h3>
                            <p class="text-wrap text-start">${el.body}</p>
                            <a href="#" class="btn">Watch Now</a>
                        </div>
                    </div>
                </div>
            `;
            count++;
        }
        // Category
        if (el.category === "tech") {
            let wrap = document.getElementById("Technology");
            wrap.innerHTML += `
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        if (el.category === "history") {
            let his = document.getElementById("history");
            his.innerHTML+= `
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        if (el.category==="programming") {
            let pro=document.getElementById("pro");
            pro.innerHTML+=`
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `
        }
        if (el.category==="time management") {
            let time=document.getElementById("time");
            time.innerHTML+=`
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `
        }
        if (el.category==="Hobbies") {
            let time=document.getElementById("Hobbies");
            time.innerHTML+=`
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `
        }
        if (el.category==="Scince") {
            let time=document.getElementById("Scince");
            time.innerHTML+=`
                <div class="swiper-slide" id="${el.id}">
                    <div class="course-card">
                        <img src="${el.url}" alt="${el.title}" class="img-fluid">
                        <h3 class="text-light">${el.title}</h3>
                        <div class="rating">
                            <span class="text-light text-wrap">${el.rate}</span>
                        </div>
                    </div>
                </div>
            `
        }


    });
    

   
})
.catch(err=>{
    console.log(err); 
})

