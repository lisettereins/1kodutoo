let h, m, s, hour, minute, second, dateElement, day, month, year, weekday;

let r, g, b;
const dayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
dateElement = document.getElementById('date');
let monthNames = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'detsember']
const fonts = [
    'Arial', 
    'Courier New', 
    'Georgia', 
    'Times New Roman', 
    'Verdana', 
    'Comic Sans MS', 
    'Impact', 
    'Trebuchet MS'
  ];
  wkday = document.getElementById('weekday');

function changeFont(){
    const randomIndex = Math.floor(Math.random() * fonts.length);
    const randomFont = fonts[randomIndex];
    document.getElementById("container").style.fontFamily = randomFont;

}

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    document.getElementById('container').style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
}
function interval(){
   intervalId = setInterval(changeColor, 250);
}

function stopInterval(){
    clearInterval(intervalId);
}

function changeFontColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    document.getElementById('container').style.color = "rgb(" + r + "," + g + "," + b +")";
}
function clearAll() {
    // Stop any running interval
    clearInterval(intervalId);

    // Reset background color
    document.getElementById('container').style.backgroundColor = 'aquamarine'; 

    // Reset font color
    document.getElementById('container').style.color = 'black';

    // Reset font family
    document.getElementById('container').style.fontFamily = 'Times New Roman';
}
//-chatgpt 2025

function updateClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    weekday = date.getDay();


    if(hour < 10){
        hour = '0'+ hour
    }
    if(minute < 10){
        minute = '0'+ minute
    }
    if(second < 10){
        second = '0'+ second
    }

    h.innerHTML = hour + ':';
    m.innerHTML = minute + ':';
    s.innerHTML = second + ' ';
    dateElement.innerHTML = day+ '.' + monthNames[month]+ ' ' + year;
    wkday.innerHTML = dayNamesEt[weekday];
}
document.getElementById('nicolas').addEventListener('click', changeColor);
document.getElementById('nicolas2').addEventListener('click', interval);
document.getElementById('nicolas4').addEventListener('click', stopInterval);
document.getElementById('nicolas3').addEventListener('click', changeFont);
document.getElementById('nicolas5').addEventListener('click', changeFontColor);
document.getElementById('nicolas6').addEventListener('click', clearAll);
setInterval(updateClock, 1000);
updateClock();