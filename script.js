const songs = [
    "and-i-love-her.mp3",
    "babies-on-fire.mp3",
    "bad-news.mp3",
    "banana-brain.mp3",
    "birth.mp3",
    "california.mp3",
    "confession.mp3",
    "cookies-thumber.mp3",
    "deep-coccolino.mp3",
    "do-you-feel-like.mp3",
    "happy-go.mp3",
    "maybe.mp3",
    "my-funny-valentine.mp3",
    "night-call.mp3",
    "no-sleep.mp3",
    "passion-fruit.mp3",
    "piece-of-my-heart.mp3",
    "seek-and-destroy.mp3",
    "takmayacaksin.mp3",
    "tension.mp3",
    "time-moves-slow.mp3",
    "whos-gonna-save-my-soul-now.mp3",
    "you-and-me.mp3",
    "you-know-whaaaaat.mp3",
];

const player = document.getElementById("player");

const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());
const links = document.querySelectorAll("li");
for (const link of links) {
  link.addEventListener("click", setSong);
}

function setSong(e) {
  document.querySelector("#headphones").classList.remove("pulse");

  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;
  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  player.load();
  player.play();

  document.querySelector("#headphones").classList.add("pulse");
}

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}