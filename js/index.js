function changeEvent() {
    const dropdown = document.getElementById("event-dropdown");
    const selectedEvent = dropdown.value;
    const weinvierteltage = document.getElementById("weinvierteltage");
    const stefflkirtag = document.getElementById("stefflkirtag");

    // Show or hide the carousels based on the selected event
    if (selectedEvent === "weinvierteltage") {
        weinvierteltage.style.display = "block";
        stefflkirtag.style.display = "none";
    } else if (selectedEvent === "stefflkirtag") {
        weinvierteltage.style.display = "none";
        stefflkirtag.style.display = "block";
    }
}

// index.html - Dropdown Bilder Medien
document.getElementById("event-dropdown").addEventListener("change", changeEvent);
