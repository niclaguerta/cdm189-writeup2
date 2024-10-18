(function(){
    'use strict';

    let globalData;
    let numDataPoints;

    async function getData(){
        const myMoods = await fetch('data/usage.json');
        const data = await myMoods.json();
        const dataPoints = Object.keys(data);
        globalData = Object.values(data);
        numDataPoints = dataPoints.length;
    } 

    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        const changeTime = Math.floor(xPos / timeSection);
        if (changeTime !== prevLoc) {
            moodInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); // end IIFE