const music = 
document.getElementById("bg-music");
const btn = 
document.getElementById("music-btn");

let isPlaying = false;
btn.addEventListener("click", () => {
    if (!isPlaying){
        music.volume = 0.5;
        music.play();
        btn.textContent = "🔈 Pause Music";
    }else{
        music.pause();
        btn.textContent = "🔊 Play Music";
    }
    isPlaying = !isPlaying;
});

const heartsContainer = 
document.querySelector(".hearts");
for(let i=0; i<30; i++){
    const
    heart=document.createElement("div");
    heart.className="hearts";
    heart.style.left=Math.random()*1110
    +"vw";
    heart.style.animationDuration=5+Math.random()*5+"s";
    heartsContainer.appendChild(heart);
}
const countdownEl = 
document.getElementById("countdown");
const birthday = new Date("April 4, 2026 00:00:00").getTime();
setInterval(()=>{
    const now=new Date().getTime();
    const diff = birthday - now;
    if(diff<=0){countdownEl.innerHTML="🎉IT'S Your Birthday Bestie Bby...";return;}
    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff/(1000*60*60))%24);
    const m=Math.floor((diff/(1000*60))%60);
    const s=Math.floor((diff/1000)%60);
    countdownEl.innerHTML=`${d} Days: ${h} Hrs: ${s} Sec 💞`;
},1000);

const text="You are my safe space, my laughter, my answered prayer, and my forever bestie bby. I love you endlessly, but remember that Jesus loves you more.💖 Thank you for being my bestie, thank you for everything, for the love, for the support, for the corrections, for keeping up with my stubborness and for other things i can't mention. You are someone i don't deserve yet somehow, somehow you became my bestie, i bless the day we met. I LOVE YOU my Sunshine🥰❤❣💝💛💞💓💗💖🌻🌸🌹 ";
let i=0;
const
typing=document.getElementById("typingText");
function typeEffect(){
    if(i<text.length){
        typing.innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeEffect,20);
    }
}
typeEffect();

for(let i=0; i<80; i++){
    const
    confetti=document.createElement("div");
    confetti.className="confetti";
    confetti.style.left=Math.random()*100+"vw";

    confetti.style.animationDuration=2+Math.random()*3+"s";
    document.body.appendChild(confetti);
}
document.querySelectorAll(".memory-item img").forEach(img=>{
    img.onclick=()=>{document.getElementById("lightbox").style.display="flex";
        document.getElementById("lightboxImg").src=img.src;
    }
});
function closeLightbox()
{
    document.getElementById("lightbox").style.display="none";
}

const modal =
document.getElementById("mediaModal");
const modalContent =
modal.querySelector(".modal-content");
const closeBtn =
modal.querySelector(".close-btn");

document.querySelectorAll(".gallery-grid img, .gallery-grid video")
.forEach(media => {
    media.addEventListener("click", ()=> {
    modal.classList.add("active");
    modalContent.innerHTML = "";

    if(media.tagName === "IMG"){
        const img =
        document.createElement("img");
        img.src = media.src;
        modalContent.appendChild(img);
    }else{
        const video =
        document.createElement("video");
        video.src = media.src;
        video.controls = true;
        video.autoplay = true;
        modalContent.appendChild(video);
    }
});
});
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});
function closeModal(){
    modal.classList.remove("active");
    modalContent.innerHTML ="";
}

window.addEventListener("load", ()=> {
    const preloader = 
    document.getElementById("birthday-preloader");

    setTimeout(()=> {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";

        setTimeout(() =>{
            preloader.style.display = "none";
        }, 600);
    }, 4000);  //shows for 2.5seconds
});