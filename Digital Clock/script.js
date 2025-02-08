const clockElement = document.getElementById('digitalClock');
const toggleButton = document.getElementById('toggleButton');

let is24HourFormat = false;

function updateClock() {
    const now = new Date(); 

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let ampm = '';
    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
    }

    const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
    
    
    clockElement.textContent = timeString;
}

toggleButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleButton.textContent = is24HourFormat ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
    toggleButton.classList.add('clicked');

    setTimeout(() => toggleButton.classList.remove('clicked'), 200);
});

setInterval(updateClock, 1000);

updateClock();
