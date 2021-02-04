(function() {
  'use strict';
let stopBtn = document.getElementById("stopButton");
let slowBtn = document.getElementById("slowButton");
let startBtn = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");
// when stop button click change color to red and back to black
stopBtn.addEventListener('click', event => {
  if(document.getElementById('stopLight').style.backgroundColor === 'red'){
    document.getElementById('stopLight').style.backgroundColor = 'black';
    console.log(`${stopBtn.textContent} bulb off`)
  } else {
    document.getElementById('stopLight').style.backgroundColor = 'red';
    console.log(`${stopBtn.textContent} bulb on`)
  }
});
// when slow button click change color to orange back to black
slowBtn.addEventListener('click', event =>{
  if(document.getElementById('slowLight').style.backgroundColor === 'orange'){
    document.getElementById('slowLight').style.backgroundColor = 'black';
    console.log(`${slowBtn.textContent} bulb off`)
  } else {
    document.getElementById('slowLight').style.backgroundColor = 'orange';
    console.log(`${slowBtn.textContent} bulb on`)
  }
});
// when start button click change color to green back to black
startBtn.addEventListener('click', event =>{
  if(document.getElementById('goLight').style.backgroundColor === 'green'){
    document.getElementById('goLight').style.backgroundColor = 'black';
    console.log(`${startBtn.textContent} bulb off`)
  } else {
    document.getElementById('goLight').style.backgroundColor = 'green';
    console.log(`${startBtn.textContent} bulb on`)
  }
});
// mouse enter & leave for top button
stopBtn.addEventListener('mouseenter', event =>{
  console.log(`entered ${stopBtn.textContent} button`)
});
stopBtn.addEventListener('mouseleave', event =>{
  console.log(`left ${stopBtn.textContent} button`)
});
// mouse enter & leave for slow button
slowBtn.addEventListener('mouseenter', event =>{
  console.log(`entered ${slowBtn.textContent} button`)
});
slowBtn.addEventListener('mouseleave', event =>{
  console.log(`left ${slowBtn.textContent} button`)
});
// mouse enter & leave for start button
startBtn.addEventListener('mouseenter', event =>{
  console.log(`entered ${startBtn.textContent} button`)
});
startBtn.addEventListener('mouseleave', event =>{
  console.log(`left ${startBtn.textContent} button`)
});
})(); 
