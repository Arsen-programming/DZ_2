// TASK 1

const container = document.getElementById("container");
const addElement = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "element");
    div.innerText = "Element";
    container.appendChild(div)
};


// TASK 2

const container2 = document.getElementById("container2");
const addElement2 = () => {
    const div2 = document.createElement("div");
    div2.setAttribute("class", "element");
    div2.innerHTML = Math.floor(Math.random()* 20);
    container2.appendChild(div2)
};

addElement2();

let interval = setInterval(addElement2, 5000);
const startInterval = () => {
    interval = setInterval(addElement2, 5000)
};

const stopInterval = () => {
    clearInterval(interval)
};

// TASK 3

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start2 = document.getElementById("start2");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const timer = () => {
   seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, "0");
   if (+seconds.textContent === 60){
       minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, "0");
       seconds.textContent = "00";
   }
};

const intervalStart = () => {
    timerInterval = setInterval(timer, 1000);
    start2.disabled = true;
    pause.disabled = false;
    reset.disabled = false;
};

const intervalStop = () => {
    clearInterval(timerInterval);
    start2.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
};

const intervalReset = () => {
    clearInterval(timerInterval);
    minutes.textContent = "00";
    seconds.textContent = "00";
    start2.disabled = false;
    pause.disabled = false;
    reset.disabled = true;
};

// TASK 4

const user = document.forms[0];
const login = user.lastElementChild;

const check = () => {
    if (user.username.value.length < 6 || user.password.value.length < 6){
        login.disabled = true;
    }else {
        login.disabled = false;
    }

};
const log = (e) => {
    e.preventDefault();
    alert(`Username = ${user.username.value} \n Password ${user.password.value}`)
};

user.addEventListener('change', check);
login.addEventListener('click', log);