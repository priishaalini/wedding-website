// Countdown for Engagement (8th Dec 2024, 9:30 AM)
const engagementCountDownDate = new Date("Dec 8, 2024 09:30:00").getTime();
const engagementCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = engagementCountDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("engagement-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(engagementCountdown);
        document.getElementById("engagement-countdown").innerHTML = "The event has started!";
    }
}, 1000);

// Countdown for Wedding (16th Feb 2025, 7:00 PM)
const weddingCountDownDate = new Date("Feb 16, 2025 19:00:00").getTime();
const weddingCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingCountDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("wedding-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(weddingCountdown);
        document.getElementById("wedding-countdown").innerHTML = "The event has started!";
    }
}, 1000);

// Countdown for Dinner Reception (22nd Feb 2025, 7:00 PM)
const dinnerCountDownDate = new Date("Feb 22, 2025 19:00:00").getTime();
const dinnerCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = dinnerCountDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dinner-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(dinnerCountdown);
        document.getElementById("dinner-countdown").innerHTML = "The event has started!";
    }
}, 1000);