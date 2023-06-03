document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const player = document.getElementById("player");
    let targets = [];

    gameContainer.addEventListener("mousemove", movePlayer);
    gameContainer.addEventListener("click", shoot);

    setInterval(moveTargets, 1000);

    function movePlayer(event) {
        player.style.top = event.clientY - 10 + "px";
    }

    function shoot() {
        const bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.top = parseInt(player.style.top) + 5 + "px";
        bullet.style.left = "30px";
        gameContainer.appendChild(bullet);
        animateBullet(bullet);
    }

    function animateBullet(bullet) {
        const bulletInterval = setInterval(function () {
            const currentLeft = parseInt(bullet.style.left);
            if (currentLeft >= gameContainer.offsetWidth - 10) {
                clearInterval(bulletInterval);
                bullet.remove();
            } else {
                bullet.style.left = currentLeft + 10 + "px";
                checkCollision(bullet);
            }
        }, 50);
    }

    function moveTargets() {
        const newTarget = document.createElement("div");
        newTarget.className = "target";
        newTarget.style.top =
            Math.floor(Math.random() * (gameContainer.offsetHeight - 20)) +
            "px";
        newTarget.style.left = gameContainer.offsetWidth - 20 + "px";
        gameContainer.appendChild(newTarget);
        animateTarget(newTarget);
        targets.push(newTarget);
    }

    function animateTarget(target) {
        const targetInterval = setInterval(function () {
            const currentLeft = parseInt(target.style.left);
            if (currentLeft <= 0) {
                clearInterval(targetInterval);
                target.remove();
                const targetIndex = targets.indexOf(target);
                targets.splice(targetIndex, 1);
            } else {
                target.style.left = currentLeft - 5 + "px";
            }
        }, 50);
    }

    function checkCollision(bullet) {
        const bulletRect = bullet.getBoundingClientRect();
        targets.forEach(function (target) {
            const targetRect = target.getBoundingClientRect();
            if (
                bulletRect.left < targetRect.right &&
                bulletRect.right > targetRect.left &&
                bulletRect.top < targetRect.bottom &&
                bulletRect.bottom > targetRect.top
            ) {
                bullet.remove();
                target.remove();
                const bulletIndex = bullets.indexOf(bullet);
                const targetIndex = targets.indexOf(target);
                bullets.splice(bulletIndex, 1);
                targets.splice(targetIndex, 1);
            }
        });
    }
});
