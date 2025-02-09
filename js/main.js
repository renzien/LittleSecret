const message = [
    "Are you sure ?",
    "Really sure ?",
    "Are you really sure ?",
    "Please....",
    "J-Just think about it!",
    "If you say no, I'll be sad...",
    "I will be very sad...",
    "I will be very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding~, can you say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = message[messageIndex];
    messageIndex = (messageIndex + 1) % message.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}