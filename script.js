document.addEventListener('DOMContentLoaded', function() {
    // Handle page cover disappearing
    const cover = document.querySelector('.cover');
    if (cover) {
        cover.addEventListener('click', function () {
            cover.style.display = 'none';
        });
    }

    // Retrieve sarahDate from localStorage (initialize if empty)
    window.sarahDate = JSON.parse(localStorage.getItem("sarahDate")) || [];
});

// Function to select a date
function selectDate(date) {
    let storedData = JSON.parse(localStorage.getItem("sarahDate")) || []; // Retrieve stored data
    storedData[0] = date; // Ensure the first entry is always the date
    localStorage.setItem("sarahDate", JSON.stringify(storedData)); // Save updated data
    console.log("Selected Date:", storedData);
}

// Function to select food
function selectFood(food) {
    let storedData = JSON.parse(localStorage.getItem("sarahDate")) || []; // Retrieve stored data

    if (!storedData.length) {
        console.error("No date selected yet!");
        return;
    }

    storedData[1] = food; // Save food as the second item in the array
    localStorage.setItem("sarahDate", JSON.stringify(storedData)); // Save updated data
    console.log("Selected Date & Food:", storedData);
}

// Function to select time
function selectTime(time) {
    let storedData = JSON.parse(localStorage.getItem("sarahDate")) || []; // Retrieve stored data

    if (!storedData.length) {
        console.error("No date selected yet!");
        return;
    }

    storedData[2] = time; // Save food as the second item in the array
    localStorage.setItem("sarahDate", JSON.stringify(storedData)); // Save updated data
    console.log("Selected Date & Food & Time:", storedData);
}

// Function to select dresscode
function selectDress(dress) {
    let storedData = JSON.parse(localStorage.getItem("sarahDate")) || []; // Retrieve stored data

    if (!storedData.length) {
        console.error("No date selected yet!");
        return;
    }

    storedData[3] = dress; // Save food as the second item in the array
    localStorage.setItem("sarahDate", JSON.stringify(storedData)); // Save updated data
    console.log("Selected Date & Food & Time:", storedData);
}

// Function to display stored selections (for page2-yes.html)
function displaySelection() {
    let storedData = JSON.parse(localStorage.getItem("sarahDate")) || [];
    if (storedData.length) {
        document.getElementById("selected-info").innerText = 
            `Date: ${storedData[0]} \nFood: ${storedData[1] || "Not selected yet"}`;
    }
}

function sendEmail() {
    let email = "dfarkouh@gmail.com"; 
    let subject = "Sarah's Valentine's Date Selection";
    let body = `Date Choice : ${sarahDate[0]}%0D%0A Food Choice : ${sarahDate[1]}%0D%0A Time Choice : ${sarahDate[2]}%0D%0A Dress Code Choice : ${sarahDate[3]}%0D%0A Are there any additional information you would like to add ? Ex: prefered restaurant?`;
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}