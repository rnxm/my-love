"use strict";

/**
 * @type {HTMLElement}
 */
const gift = document.getElementById("gift");
/**
 * @type {HTMLElement}
 */
const letter = document.querySelector(".card");

let movedCount = 0;
let resizedCount = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

gift.addEventListener("click", (e) => {
    // when the user clicks on the gift, reposition it to a random position
    const initSize = parseFloat(getComputedStyle(gift).fontSize);
    console.log(initSize);
    
    if(movedCount < 5) {
        const x = Math.random() * window.innerWidth * .85;
        const y = Math.random() * window.innerHeight * .85;
        document.body.style.position = "relative";
        gift.style.position = "absolute";
        gift.style.top = `${y}px`;
        gift.style.left = `${x}px`;

        gift.style.transition = "transform 0.5s ease";
        movedCount++;
    } else if (resizedCount == 0 && movedCount >= 5) {
        document.body.style.position = "static";
        gift.style.position = "static";
        resizedCount++;
        console.log("a");

    } else if(movedCount >= 5 && resizedCount < 5) {
        gift.style.fontSize = `${initSize * 1.5}px`;
        gift.classList.add("shake");

        setTimeout(() => {
            gift.classList.remove("shake");
        }, 500);
        
        resizedCount++;
    } else {
        gift.classList.add("fade");

        sleep(500).then(() => {
            gift.style.display = "none";

            letter.style.display = "block";
            letter.classList.add("fade-reverse");
        });
    }
})