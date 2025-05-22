function calculateExitTime() {
    const entryTimeInput = document.getElementById('entry-time');
    const resultDisplay = document.getElementById('result');

    const entryTime = new Date(`1970-01-01T${entryTimeInput.value}:00`);
    const exitTime = new Date(entryTime.getTime() + 8 * 60 * 60 * 1000); // Adding 8 hours

    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    resultDisplay.textContent = `Hora de salida: ${exitTime.toLocaleTimeString('en-US', options)}`;
}

document.getElementById('calculate-button').addEventListener('click', calculateExitTime);