/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/moviePlay.js":
/*!************************************!*\
  !*** ./src/client/js/moviePlay.js ***!
  \************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst volumeRange = document.getElementById(\"volume\");\nconst movieController = document.getElementById(\"videoContainer\");\nconst currenTime = movieController.querySelector(\"#currenTime\");\nconst totalTime = movieController.querySelector(\"#totalTime\");\nconst timeline = movieController.querySelector(\"#timeline\");\nconst expand = movieController.querySelector(\"#fullScreen\");\nconst search = document.getElementById(\"search\");\nconst commentForm = document.getElementById(\"commentForm\");\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nvideo.controls = false;\nconst handlePlayClick = e => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nconst handleMuteClick = e => {\n  if (video.muted) {\n    video.muted = false;\n    volumeRange.value = volumeValue;\n  } else {\n    video.muted = true;\n  }\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nconst handleVolumeChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  console.log(value);\n  if (value == 0) {\n    video.muted = true;\n  } else {\n    video.muted = false;\n  }\n  volumeValue = value;\n  video.volume = value;\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n};\nconst formatTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5);\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currenTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nconst handleTimelineChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  video.currentTime = value;\n};\nconst handleFullscreen = () => {\n  video.requestFullscreen();\n};\nconst handleEnded = () => {\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nconst keydown = e => {\n  if (e.key.toLowerCase() === \"f\") {\n    expand.click();\n  } else if (e.code === \"Space\") {\n    psBtn.click();\n  } else if (e.code === \"Escape\") {\n    document.exitFullscreen();\n  }\n};\nconst searchFuc = () => {\n  commentForm.submit();\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMuteClick);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"ended\", handleEnded);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideo.addEventListener(\"ended\", handleEnded);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nexpand.addEventListener(\"click\", handleFullscreen);\ndocument.addEventListener(\"keydown\", keydown);\nsearch.addEventListener(\"click\", searchFuc);\n\n//# sourceURL=webpack://wetube/./src/client/js/moviePlay.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/moviePlay.js"]();
/******/ 	
/******/ })()
;