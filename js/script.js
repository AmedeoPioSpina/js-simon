const newCountdownContent = (timeRemained) => {
    const countdownContainer = document.querySelector(".countdown-container");
    const pElement = document.createElement("p");
    pElement.classList.add("countdown");
    for(let i = 0; i < 4; i++){
        const spanElement = document.createElement("span");
        spanElement.textContent = timeRemained[i];
        pElement.appendChild(spanElement);
        if(i !== 3){
            pElement.innerHTML += " : ";
        }
    }
    countdownContainer.appendChild(pElement);
    return pElement;
}

const countdown = (timeRemained) => {
    timeRemained[3] -= 1;
        if(timeRemained[3] < 0 && timeRemained[2] >= 0){
            timeRemained[2] -= 1
            timeRemained[3] = 59;
            if(timeRemained[2] < 0 && timeRemained[1] >= 0){
                timeRemained[1] -= 1
                timeRemained[2] = 59;
                if(timeRemained[1] < 0 && timeRemained[0] >= 0){
                    timeRemained[0] -= 1
                    timeRemained[1] = 59;
                }
                else{
                    if(timeRemained[3] === 0 && timeRemained[2] === 0 && timeRemained[1] === 0 && timeRemained[0] === 0){
                        clearInterval(countdownTimer);
                        endCountdownMessage(timeRemained);
                    }
                }
            }
            else{
                if(timeRemained[1] < 0 && timeRemained[0] >= 0){
                    timeRemained[0] -= 1
                    timeRemained[1] = 59;
                }
                else{
                    if(timeRemained[3] === 0 && timeRemained[2] === 0 && timeRemained[1] === 0 && timeRemained[0] === 0){
                        clearInterval(countdownTimer);
                        endCountdownMessage(timeRemained);
                    }
                }
            }
        }
        else{
            if(timeRemained[2] < 0 && timeRemained[1] >= 0){
            timeRemained[1] -= 1
            timeRemained[2] = 59;
            }
            else{
                if(timeRemained[1] < 0 && timeRemained[0] >= 0){
                    timeRemained[0] -= 1
                    timeRemained[1] = 59;
                }
                else{
                    if(timeRemained[3] === 0 && timeRemained[2] === 0 && timeRemained[1] === 0 && timeRemained[0] === 0){
                        clearInterval(countdownTimer);
                        endCountdownMessage(timeRemained);
                    }
                }
            }
        }

    countdownHtmlUpdate(timeRemained);
}

const countdownHtmlUpdate = (timeRemained) => {
    const spanList = document.querySelectorAll("span");
        spanList[0].textContent = timeRemained[0];
        spanList[1].textContent = timeRemained[1];
        spanList[2].textContent = timeRemained[2];
        spanList[3].textContent = timeRemained[3];
}

const endCountdownMessage = (timeRemained) => {
    if(timeRemained[0] === 0 && timeRemained[1] === 0 && timeRemained[2] === 0 && timeRemained[3] === 0){
        let countdownContainer = document.querySelector(".countdown-container");
        let message = document.createElement("p")
        message.classList.add("message");
        message.textContent = "Buon Anno Nuovo!"
        countdownContainer.appendChild(message);
    }
}

const start = () => {
    let date = new Date();
    let daysRemained = 30 - date.getDay() + 31;
    let dayHoursRemained = 24 - date.getHours();
    let hourMinutisRemained = 60 - date.getMinutes();
    let minuteSecondsRemained = 60 - date.getSeconds();
    let countdownAry = [
        daysRemained,
        dayHoursRemained,
        hourMinutisRemained,
        minuteSecondsRemained,
    ]
    newCountdownContent(countdownAry);

    countdownAry[0] = 0;
    countdownAry[1] = 0;
    countdownAry[2] = 0;
    countdownAry[3] = 5;

    countdownTimer = setInterval(countdown, 1000, countdownAry);
};

let countdownTimer;

start();