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

function keyPush(evt) {
  switch (evt.keyCode) {
    case 65: //a
      xv = -1;
      yv = 0;
      break;
    case 37: //leftArr
      xv = -1;
      yv = 0;
      break;
    case 87: //w
      xv = 0;
      yv = -1;
      break;
    case 38: //upArr
      xv = 0;
      yv = -1;
      break;
    case 68: //d
      xv = 1;
      yv = 0;
      break;
    case 39: //rightArr
      xv = 1;
      yv = 0;
      break;
    case 83: //s
      xv = 0;
      yv = 1;
      break;
    case 40: //downArr
      xv = 0;
      yv = 1;
      break;
  }
}

window.onload = function () {
  canv = document.getElementById("canv");
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 10);
};

const resetButton = document.querySelector(`.reset`);
resetButton.addEventListener("click", () => {
  location.reload();
  return true;
});
