   

        const setCountdown = document.querySelectorAll('.countdown div');

        function updateCountdown(){
        
        const newYear = new Date("December 31, 2024 23:59:59").getTime();
        const currentDate =  Date.now();
        const leftTime = newYear - currentDate;

        const t = {
            seconds: 1000,
            minutes: 1000 * 60,     
            hours: 60000 * 60,
            days: 3600000 * 24 
        }

        const days = Math.floor(leftTime / t.days);
        const hours = Math.floor(leftTime % t.days / t.hours);
        const minutes = Math.floor(leftTime % t.hours / t.minutes);
        const seconds = Math.floor(leftTime % t.minutes / t.seconds);

        const dateArr = [days, hours, minutes, seconds];
        const dateTypeArr = ['days', 'hours', 'minutes', 'seconds'];

        setCountdown.forEach((el, idx) => {
            el.innerHTML = `<div class="set">${dateArr[idx]}<p>${dateTypeArr[idx]}</p></div>`;
        });

        setTimeout(updateCountdown, 1000);
    }

    updateCountdown();
