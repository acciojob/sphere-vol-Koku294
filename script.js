function volume_sphere(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the radius value from the input field
    let radius = document.getElementById('radius').value;
    radius = parseFloat(radius); // Convert to a number

    // Validate if the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        // Display error message in the volume input
        document.getElementById('volume').value = `Calculated volume should be 'NaN' due to invalid input.`;
        alert("Please enter a valid non-negative number for the radius.");
        return; // Exit the function if invalid input
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to 4 decimal places
    const roundedVolume = volume.toFixed(4);

    // Set the result in the volume input field with the custom message
    document.getElementById('volume').value = `Calculated volume should be approximately ${roundedVolume}.`;
}

// Attach the event listener to the form's submit event
window.onload = function () {
    // Attach the volume_sphere function to the form's submit event
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
