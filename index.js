const music = document.querySelector("audio");
const img =document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
curr = 3;// initially first song
const songs = [
  {
    name:"song1",
    title:"Farming",
    artist:"Laddi Chahal",
  },
  {
    name: "song2",
    title:"2 Rafflan",
    artist:"Mankirt Aulakh",
  },
{
  name:"song3",
  title:"Pasoori",
  artist:"Ali Sethi & Shae Gill",
},
{
  name: "song4",
  title: "Excuses",
  artist: "AP Dhillon & Gurinder Gill",
},
{
  name: "song5",
  title:"NaJa",
  artist:"Pav Dharia",
},
];
var len=songs.length;

let isPlaying =false;
//for pause function
const playMusic = () => {
  isPlaying =true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
//for pause function
const pauseMusic = () =>{
  isPlaying =false ;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener('click', () =>{
  isPlaying ? pauseMusic() : playMusic();
});

// changing the current song
const loadSong = (song) => {
title.textContent = song.title;
artist.textContent = song.artist;
music.src = "music/" + song.name + ".mp3";
img.src = "images/" + song.name + ".jpg";
};

// loadSong(songs[]);
const nextSong = () =>{
curr = (curr + 1)% len;
loadSong(songs[curr]);
music.play();
playMusic();
};

const prevSong = () =>{
curr = (curr - 1 + len)% len;
loadSong(songs[curr]);
music.play();
playMusic();
};

// music.addEventListener('timeupdate',(event)=>{
//   const {currentTime,duration} =event.srcElement;
//   let progressTime=(currentTime/duration)*100;

// });

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);