window.addEventListener("DOMContentLoaded", (event) => {
    const gameContainer = document.getElementById("game-container");
    const player = document.getElementById("player");
    let targets = [];
    let bullets = [];

    gameContainer.addEventListener("mousemove", movePlayer);
    gameContainer.addEventListener("click", shoot);

    setInterval(moveTargets, 1000);
    setInterval(moveBullets, 50);

    function movePlayer(event) {
        player.style.top = event.clientY - 10 + "px";
    }

    function shoot() {
        const bullet = document.createElement("div");
        bullet.className = "bullet";
        bullet.style.top = parseInt(player.style.top) + 10 + "px";
        bullet.style.left = "40px";
        gameContainer.appendChild(bullet);
        bullets.push(bullet);
    }

    function moveTargets() {
        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const currentLeft = parseInt(target.style.left);
            if (currentLeft <= 0) {
                target.remove();
                targets.splice(i, 1);
                i--;
            } else {
                target.style.left = currentLeft - 20 + "px";
            }
        }

        const newTarget = document.createElement("div");
        newTarget.className = "target";
        newTarget.style.top =
            Math.random() * (gameContainer.offsetHeight - 20) + "px";
        newTarget.style.left = gameContainer.offsetWidth - 20 + "px";
        gameContainer.appendChild(newTarget);
        targets.push(newTarget);
    }

    function moveBullets() {
        for (let i = 0; i < bullets.length; i++) {
            const bullet = bullets[i];
            const currentLeft = parseInt(bullet.style.left);
            if (currentLeft >= gameContainer.offsetWidth) {
                bullet.remove();
                bullets.splice(i, 1);
                i--;
            } else {
                bullet.style.left = currentLeft + 5 + "px";
                checkCollision(bullet);
            }
        }
    }

    function checkCollision(bullet) {
        const bulletRect = bullet.getBoundingClientRect();

        for (let i = 0; i < targets.length; i++) {
            const target = targets[i];
            const targetRect = target.getBoundingClientRect();

            if (
                bulletRect.left < targetRect.right &&
                bulletRect.right > targetRect.left &&
                bulletRect.top < targetRect.bottom &&
                bulletRect.bottom > targetRect.top
            ) {
                bullet.remove();
                bullets.splice(bullets.indexOf(bullet), 1);
                target.remove();
                targets.splice(i, 1);
                i--;
            }
        }
    }
});
