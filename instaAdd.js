let topScroll = 520;
let scrollCount = 0;
let count = 1;
let rnd = 1000;
let countToday = 0;
let countRepair = 1;
let checkBtnScroll = 1;
let allBtn;
const forScroll = "j6cq2";
const addButton = "oF4XW";
// const delConfirm = "-Cab_";

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
            deleteFriend();
        }
    }
    let scrollBtn = setInterval(scrollPage, 1000);
}

scrollPage();

function deleteFriend() {
    function scrollPages() {
        document.getElementsByClassName(forScroll)[0].scrollTop = topScroll;
        topScroll += 520;
    }

    function randomTime(minSec, maxSec) {
        var randVal = minSec + (Math.random() * (maxSec - minSec));
        return Math.round(randVal);
    }

    function imitattionCLick() {
        rnd = randomTime(1000, 9000);
        count++;

        if (checkBtnScroll === 6) {
            scrollPages();
            checkBtnScroll = 0;
        }

        if (countToday === 200 || countToday > 200) {
            stopMySetInterval();
            return false;
        }

        allBtn[count].click();
        countToday++;
        checkBtnScroll++;
        console.log("Добавил - " + countToday + " подписок!");
    }

    function stopMySetInterval() {
        clearInterval(intS);
        console.log("СКРИПТ ЗАКОНЧИЛ СВОЮ РАБОТУ!!!");
    }
    let intS = setInterval(imitattionCLick, (60000 + rnd));
}