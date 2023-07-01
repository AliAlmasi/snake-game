px = py = 10;
gs = tc = 20;
ax = ay = Math.floor(Math.random() * 20);
xv = yv = 0;
trail = [];
tail = 3;

function game() {
  px += xv;
  py += yv;

  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";

  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == px && trail[i].y == py) {
      tail = 3;
    }
  }

  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

window.onload = function () {
  canv = document.getElementById("canv");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") {
      xv = 0;
      yv = -1;
    }
    if (e.key === "d" || e.key === "ArrowRight") {
      xv = 1;
      yv = 0;
    }
    if (e.key === "s" || e.key === "ArrowDown") {
      xv = 0;
      yv = 1;
    }
    if (e.key === "a" || e.key === "ArrowLeft") {
      xv = -1;
      yv = 0;
    }
  });
  setInterval(game, 1000 / 10);
};

const resetButton = document.querySelector(`.reset`);
resetButton.addEventListener("click", () => {
  location.reload();
});
