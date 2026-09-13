console.log("welcome to music player")

// initialized the variables
let songindex = 0;
let audioElement = new Audio('songs/1.mpeg');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "wo pal", filePath: "songs/1.mpeg", coverPath: "covers/cover1.jpg" },
    { songName: "laalpari", filePath: "songs/2.mpeg", coverPath: "covers/cover2.jpg" },
    { songName: "sayaara", filePath: "songs/3.mpeg", coverPath: "covers/cover3.jpg" },
    { songName: "zara tasveerr", filePath: "songs/4.mpeg", coverPath: "covers/cover4.jpg" },
    { songName: "kajrare", filePath: "songs/5.mpeg", coverPath: "covers/cover8.jpg" },
    { songName: "zara sa khawboh", filePath: "songs/6.mpeg", coverPath: "covers/cover6.jpg" }

]
songitems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});


// audioElement.play();

// handle the play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
})


// listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
          element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
// console.log(e.target)
makeAllPlays();
songindex= parseInt(e.target.id);
gif.style.opacity = 1;
e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songindex+1}.mpeg`;
        mastersongname.innerText = songs[songindex].songName;
         audioElement.currentTime=0;
        audioElement.play();
          masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
        songindex=0
    }
    else{
songindex +=1;

    }
 audioElement.src= `songs/${songindex+1}.mpeg`;
 mastersongname.innerText = songs[songindex].songName;
         audioElement.currentTime=0;
        audioElement.play();
          masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
songindex -=1;

    }
 audioElement.src= `songs/${songindex+1}.mpeg`;
 mastersongname.innerText = songs[songindex].songName;
         audioElement.currentTime=0;
        audioElement.play();
          masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})