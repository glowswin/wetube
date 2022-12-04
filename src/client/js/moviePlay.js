const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const muteBtnIcon = muteBtn.querySelector("i");
const volumeRange = document.getElementById("volume");
const movieController = document.getElementById("videoContainer");
const currenTime = movieController.querySelector("#currenTime");
const totalTime = movieController.querySelector("#totalTime");
const timeline = movieController.querySelector("#timeline");
const expand = movieController.querySelector("#fullScreen");
const search = document.getElementById("search");
const commentForm = document.getElementById("commentForm");

let volumeValue = 0.5;
video.volume = volumeValue;
video.controls = false;

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};
const handleMuteClick = (e) => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
  } else {
    video.muted = true;
  }
  muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};
const handleVolumeChange = (event) => {
  const {
    target: { value },
  } = event;
  console.log(value);
  if (value == 0) {
    video.muted = true;
  } else {
    video.muted = false;
  }
  volumeValue = value;
  video.volume = value;

  muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
};
const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

const handleLoadedMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currenTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};
const handleTimelineChange = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};
const handleFullscreen = () => {
  video.requestFullscreen();
};
const handleEnded = () => {
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};
const keydown = (e) => {
  if (e.key.toLowerCase() === "f") {
    expand.click();
  } else if (e.code === "Space") {
    psBtn.click();
  } else if (e.code === "Escape") {
    document.exitFullscreen();
  }
};
const searchFuc = () => {
  commentForm.submit();
};
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("ended", handleEnded);
video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("ended", handleEnded);
timeline.addEventListener("input", handleTimelineChange);
expand.addEventListener("click", handleFullscreen);
document.addEventListener("keydown", keydown);
search.addEventListener("click", searchFuc);
