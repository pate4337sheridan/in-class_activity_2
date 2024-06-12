function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById('datetime').textContent = now.toLocaleDateString(undefined, options); 
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial display