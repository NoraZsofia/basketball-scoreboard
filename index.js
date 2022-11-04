/** @format */

let homeScoreBoard = document.getElementById("home-score-board");
let guestScoreBoard = document.getElementById("guest-score-board");

let homeBtnAddOne = document.getElementById("btn-home-1");
let homeBtnAddTwo = document.getElementById("btn-home-2");
let homeBtnAddThree = document.getElementById("btn-home-3");
let guestBtnAddOne = document.getElementById("btn-guest-1");
let guestBtnAddTwo = document.getElementById("btn-guest-2");
let guestBtnAddThree = document.getElementById("btn-guest-3");

let homeScore = 0;
let guestScore = 0;

function addOneHome() {
  homeScore += 1;
  homeScoreBoard.textContent = homeScore;
}

function addTwoHome() {
  homeScore += 2;
  homeScoreBoard.textContent = homeScore;
}

function addThreeHome() {
  homeScore += 3;
  homeScoreBoard.textContent = homeScore;
}

function addOneGuest() {
  guestScore += 1;
  guestScoreBoard.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreBoard.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreBoard.textContent = guestScore;
}

let newGameBtn = document.getElementById("btn-new-game");

function newGame() {
  guestScore = 0;
  homeScore = 0;
  guestScoreBoard.textContent = 0;
  homeScoreBoard.textContent = 0;
}
