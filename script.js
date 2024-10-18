let data = {};

// Fetch the JSON data from usage.json
fetch('usage.json')
    .then(response => response.json())
    .then(json => {
        data = json;
    })
    .catch(error => console.error('Error loading JSON:', error));

// Function to update the HTML content based on the hovered hour
function updateInfo(hour) {
    const point = data[`point${hour}`];
    if (point) {
        document.getElementById('time').textContent = point.time;
        document.getElementById('usage').textContent = point.usage;
        document.getElementById('cost').textContent = point.cost;
        document.getElementById('notes').textContent = point.notes;
    }
}

// Add event listeners to each hour block
document.querySelectorAll('.hour').forEach((element, index) => {
    element.addEventListener('mouseenter', () => updateInfo(index + 1));
});
