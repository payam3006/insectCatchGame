const q = console.log;

const scene = document.getElementById("page3");
let insectNum = 0;
let score = 0;
let insect;

const page = (num) => {
  document.getElementById(`page${num}`).classList.add("in");
};

const choose = (text) => {
  page(3);
  insect = text;
  setTimeout(createInsect, 1500);
  setTimeout(startTimer, 1500);

  // startTimer();
  q(insect);
};

const createInsect = () => {
  let width = scene.getBoundingClientRect().width;
  let height = scene.getBoundingClientRect().height;
  const newInsect = document.createElement("img");
  newInsect.src = `${insect}.gif`;
  newInsect.id = `insect${insectNum + 1}`;
  newInsect.classList.add("insect");
  newInsect.style = `bottom: ${Math.floor(
    Math.random() * (height - 110)
  )}px; right:${Math.floor(Math.random() * (width - 80))}px;`;
  newInsect.addEventListener("click", action);
  scene.appendChild(newInsect);
  // q(height, width);
  insectNum += 1;
};

const action = (ev) => {
  score += 1;
  document.getElementsByClassName("score")[0].innerHTML = `Score: ${score}`;

  if (score == 20) {
    showGuide();
  }
  document.getElementById(ev.target.id).classList.add("out");
  setTimeout(() => {
    scene.removeChild(document.getElementById(ev.target.id));
  }, 500);
  for (let i = 1; i <= 2; i++) {
    createInsect();
  }
  // q(ev.target.id);
};

function showGuide() {
  document.getElementById("guide").classList.remove("hidden");
}

let second = 0;
function startTimer() {
  setInterval(() => {
    second += 1;
    document.getElementById("timer").innerText = `Time: ${convertTime(second)}`;
  }, 1000);
}

const convertTime = (second) => {
  let mm = Math.floor(second / 60);
  let ss = second % 60;
  let mmt = "";
  let sst = "";
  if (mm < 10) {
    mmt = `0${mm}`;
  } else {
    mmt = `${mm}`;
  }
  if (ss < 10) {
    sst = `0${ss}`;
  } else {
    sst = `${ss}`;
  }
  return `${mmt}:${sst}`;
};
