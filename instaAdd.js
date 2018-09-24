let topScroll = 520;
let scrollCount = 0;
let count = 1;
let rndTime = 1000;
let countToday = 0;
let countRepair = 1;
let checkBtnScroll = 1;
let allBtn;
const forScroll = "j6cq2";
const addButton = "oF4XW";
const time = 90000;
const timeScroll = 1000;

function scrollPage() {

    function stopScroll() {
        clearInterval(scrollBtn);
    }

    function scrollPage() {
        document.getElementsByClassName(forScroll)[0].scrollTop = topScroll;
        topScroll += 520;
        scrollCount++;
        if (scrollCount === 100) {
            stopScroll();
            document.getElementsByClassName(forScroll)[0].scrollTop = -topScroll;
            topScroll = 520;
            allBtn = document.getElementsByClassName(addButton);
            addFriend();
        }
    }
    let scrollBtn = setInterval(scrollPage, timeScroll);
}

scrollPage();

function addFriend() {
    function scrollBlock() {
        document.getElementsByClassName(forScroll)[0].scrollTop = topScroll;
        topScroll += 520;
    }

    function randomTime(minSec, maxSec) {
        var randVal = minSec + (Math.random() * (maxSec - minSec));
        return Math.round(randVal);
    }

    function imitattionCLick() {
        rndTime = randomTime(1000, 9000);
        count++;

        if (checkBtnScroll === 6) {
            scrollBlock();
            checkBtnScroll = 0;
        }

        if (countToday === 1000 || countToday > 1000) {
            stopScript();
            return false;
        }

        allBtn[count].click();
        countToday++;
        checkBtnScroll++;
        console.log("Добавил - " + countToday + " подписок!");

        setTimeout(function() {
            if (document.getElementsByClassName("-Cab_").length > 0) {
                document.getElementsByClassName("-Cab_")[0].click();
            }
        }, 5000);
    }

    function stopScript() {
        clearInterval(intS);
        console.log("СКРИПТ ЗАКОНЧИЛ СВОЮ РАБОТУ!!!");
    }
    let intS = setInterval(imitattionCLick, (time + rndTime));
}