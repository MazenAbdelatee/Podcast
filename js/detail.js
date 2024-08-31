

fetch("data.json").then(res=>{
    return res.json();
}).then(json=>{
    let data=json;
    let info=document.getElementById("info");
    info.innerHTML=`
        <div class="podcast-cover">
            <img src="${localStorage.getItem("cardinfo")}" alt="Podcast Cover">
        </div>
        <div class="podcast-info">
            <h1 class="podcast-title">Podcast Episode Title</h1>
            <p class="podcast-description">This is a brief description of the podcast episode.</p>
        </div>
        <div class="audio-player">
            <audio controls>
                <source src="./audio/game-over-classic-206486.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    
    `
})