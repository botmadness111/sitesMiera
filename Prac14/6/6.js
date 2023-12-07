document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('ball');
    let startTime;
    const duration = 2000;

    function animateBall(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {

            const x = bezier(progress, 50, 550, 250, 750);
            const y = bezier(progress, 500, 500, 100, 100);

            ball.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(animateBall);
        }
        else{
            cancelAnimationFrame(requestId);
        }
    }

    function bezier(t, p0, p1, p2, p3) {
        const term1 = Math.pow(1 - t, 3);
        const term2 = 3 * Math.pow(1 - t, 2) * t;
        const term3 = 3 * (1 - t) * Math.pow(t, 2);
        const term4 = Math.pow(t, 3);

        const a = term1 * p0 + term2 * p1 + term3 * p2 + term4 * p3; //формула кубической кривой Безье

        return a;
    }

    var requestId = requestAnimationFrame(animateBall);
});
