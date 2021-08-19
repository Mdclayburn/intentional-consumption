const countdown = () => {
    //The date we are counting down too
    const countDate = new Date('Janurary 1, 2030 00:00:00').getTime();
    //The time we are currently checking the page
    const now = new Date ().getTime();
    //Calculate the difference in time of now and the countdown date
    const difference = countDate - now;

    //How many milliseconds are in a second? How does time works?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate how many days, hours, minutes until countdown

    const bookingDay = Math.floor(difference / day);
    const bookingHour = Math.floor((difference % day)/ hour);
    const bookingMinute = Math.floor((difference % hour)/ minute);
    const bookingSecond = Math.floor((difference % minute)/ second);

    //Update the days,hour,minute,seconds with these numbers

    document.querySelector(".day").innerText = bookingDay;
    document.querySelector(".hour").innerText = bookingHour;
    document.querySelector(".minute").innerText = bookingMinute;
    document.querySelector(".second").innerText = bookingSecond;
};

setInterval(countdown, 1000);