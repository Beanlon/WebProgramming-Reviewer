function updateClock() {

    const now = new Date();
    let hrs = now.getHours();
    const meridiem = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    hrs = hrs.toString().padStart(2,0);
    const mins = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hrs}:${mins}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);