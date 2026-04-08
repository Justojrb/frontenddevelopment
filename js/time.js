const timeDisplay = document.getElementById("timePanel");
timeDisplay.innerText = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);
function updateTime() {
    const date = new Date();
    console.log(date);
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    timeDisplay.innerText = date.getSeconds();

}