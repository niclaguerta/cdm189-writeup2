let data = {};

// Fetch the JSON data from usage.json
fetch('usage.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        setHeights(); // Call the function to adjust heights after fetching the data
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

// Function to set the height of each hour block based on usage data
function setHeights() {
    document.querySelectorAll('.hour').forEach((element, index) => {
        const point = data[`point${index + 1}`];
        if (point && point.usage) {
            // Adjust height using a multiplier (e.g., 100) to make it visually proportional
            element.style.height = `${point.usage * 100}px`;
        }
    });
}

// Add event listeners to each hour block
document.querySelectorAll('.hour').forEach((element, index) => {
    element.addEventListener('mouseenter', () => updateInfo(index + 1));
});
