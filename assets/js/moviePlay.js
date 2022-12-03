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

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst volumeRange = document.getElementById(\"volume\");\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nvideo.controls = false;\nconst handlePlayClick = e => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fa-solid fa-play\" : \"fa-solid fa-pause\";\n};\nconst handleMuteClick = e => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  muteBtnIcon.classList = video.muted ? \"fa-solid fa-volume-xmark\" : \"fa-solid fa-volume-low\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nconst handleVolumeChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  console.log(value);\n  if (value == 0) {\n    video.muted = true;\n  } else {\n    video.muted = false;\n  }\n  volumeValue = value;\n  video.volume = value;\n  muteBtnIcon.classList = video.muted ? \"fa-solid fa-volume-xmark\" : \"fa-solid fa-volume-low\";\n};\nconst handleEnded = () => {\n  playBtnIcon.classList = video.paused ? \"fa-solid fa-play\" : \"fa-solid fa-pause\";\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMuteClick);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.addEventListener(\"ended\", handleEnded);\n\n//# sourceURL=webpack://wetube/./src/client/js/moviePlay.js?");

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