window.onload = function () {

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const audio_start = document.getElementById('exam_start')
    const audio_before_end = document.getElementById('exam_before_end');
    const audio_end = document.getElementById('exam_end');

    var button = document.getElementById("start_exam");
    button.onclick = handleButtonClick;

    function handleButtonClick(e) {
        let start_time = document.getElementById('dataid');
        const now = new Date()
        // 将当前时间戳+1分钟赋给参数start_time
        start_time.setAttribute('d', 1676423088000)
    }


    function setDate() {
        let start_time = document.getElementById('dataid').getAttribute('d');
        if (start_time === "0") {
            setDateNow()
        } else {
            setDateCountdown(start_time)
        }
    }

    function setDateNow() {
        const now = new Date()

        const second = now.getSeconds()
        // 秒针角度
        const secondDeg = ((second / 60) * 360) + 90
        // 使用rotate属性旋转秒针
        secondHand.style.transform = `rotate(${secondDeg}deg)`

        const minute = now.getMinutes();
        const minuteDeg = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = now.getHours();
        const hourDeg = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    function setDateCountdown(start_time) {
        const today = new Date();
        const interval = (today.getTime() - start_time) / 1000

        const second = interval % 60;
        let secondDeg = ((second / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        const minute = (interval / 60) % 60;
        const minuteDeg = ((minute / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = 9 + ((interval) / 3600) % 12;
        const hourDeg = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        if (interval > 0 && interval < 1) {
            audio_start.play();
        } else if (interval > 6300 && interval < 6301) {
            audio_before_end.play();
        } else if (interval > 7200 && interval < 7201) {
            audio_end.play()
        }
    }

    setInterval(setDate, 1000);

}