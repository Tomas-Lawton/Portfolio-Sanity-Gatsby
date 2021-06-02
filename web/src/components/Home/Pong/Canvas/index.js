import React, { useRef, useEffect } from "react";
import { FullSizeCanvas } from "./Style";
import { window } from "browser-monads";
// PONG BASED OFF THIS TUTORIAL
// https://www.youtube.com/watch?v=ju09womACpQ
// Changed for react, webpage and AI easing
class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  get len() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  set len(value) {
    const factor = value / this.len;
    this.x *= factor;
    this.y *= factor;
  }
}

class Rec {
  constructor(w, h) {
    this.pos = new Vec();
    this.size = new Vec(w, h);
  }

  left() {
    return this.pos.x - this.size.x / 2; // if change to circle use radius
  }
  right() {
    return this.pos.x + this.size.x / 2; // if change to circle use radius
  }
  top() {
    return this.pos.y - this.size.y / 2; // if change to circle use radius
  }
  bottom() {
    return this.pos.y + this.size.y / 2; // if change to circle use radius
  }
}

class Ball extends Rec {
  constructor() {
    super(10, 10);
    this.vel = new Vec();
  }
}

class Player extends Rec {
  constructor() {
    super(20, 70);
    this.score = 0;
  }
}

class Pong {
  constructor(canvas, updateScore) {
    this._canvas = canvas;
    this._context = canvas.getContext("2d");

    this.updateScoreUI = updateScore;

    this.ball = new Ball(10, 10);
    this.players = [new Player(), new Player()];

    this.setupPadels();
    let lastTime;
    const callBack = (milli) => {
      if (lastTime) {
        this.update((milli - lastTime) / 1000); //seconds
      }
      lastTime = milli;
      requestAnimationFrame(callBack);
    };
    callBack();
    this.reset();
  }
  setupPadels() {
    this.players[0].pos.x = 0;
    this.players[1].pos.x = this._canvas.width;

    this.players.forEach((player) => {
      player.pos.y = this._canvas.height / 2;
    });
  }
  drawRect(rect) {
    this._context.fillStyle = "#fff";
    this._context.fillRect(rect.left(), rect.top(), rect.size.x, rect.size.y);
  }
  randomizer() {
    const val = 1500 * (Math.random() - 0.5);
    return val > 1900 || val < 1100 ? val : 0;
  }
  collide(player, ball) {
    if (
      player.left() < ball.right() &&
      player.right() > ball.left() &&
      player.top() < ball.bottom() &&
      player.bottom() > ball.top()
    ) {
      const len = ball.vel.len;
      ball.vel.x = -ball.vel.x;
      ball.vel.y += this.randomizer(); // change y angle
      ball.vel.len = len * 1.03;
    }
  }
  updateCanvasSize(newWidth, newHeight) {
    this._canvas.width = newWidth;
    this._canvas.height = newHeight;
    this.setupPadels();
  }
  draw() {
    // update background
    this._context.fillStyle = " #151515";
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    // ball
    this.drawRect(this.ball);
    // padels
    this.players.forEach((player) => this.drawRect(player));
  }
  reset() {
    this.ball.pos.x = this._canvas.width / 2;
    this.ball.pos.y = this._canvas.height / 2;
    this.ball.vel.x = 0;
    this.ball.vel.y = 0;
  }
  start() {
    if (this.ball.vel.x === 0 && this.ball.vel.y === 0) {
      this.ball.vel.x = 400 * (Math.random() > 0.5 ? 1 : -1);
      this.ball.vel.y = 400 * (Math.random() * 2 - 1);
      this.ball.vel.len = 500;
    }
  }
  update = (dt) => {
    this.ball.pos.x += this.ball.vel.x * dt;
    this.ball.pos.y += this.ball.vel.y * dt;
    // score point
    if (this.ball.left() < 0 || this.ball.right() > this._canvas.width) {
      const playerId = (this.ball.vel.x < 0) | 0; // determine player point by ball direction
      this.players[playerId].score++;
      this.reset();
      this.ball.vel.x = -this.ball.vel.x;
      this.updateScoreUI(this.players);
    }

    if (this.ball.top() < 0 || this.ball.bottom() > this._canvas.height) {
      this.ball.vel.y = -this.ball.vel.y;
    }
    // Fix height boundaries
    let posY = this.checkHeight(this.ball.pos.y - 35, this._canvas);
    // AI Position Padel with fixed height and easing
    const normalisedEase = this.easeInOutBack(
      this.stretchRange(posY, 35, this._canvas.height - 35, 0, 1)
    );
    const unNormalisedValue = this.stretchRange(
      normalisedEase,
      0,
      1,
      35,
      this._canvas.height - 35
    );

    this.players[1].pos.y = unNormalisedValue;
    this.players.forEach((player) => this.collide(player, this.ball));
    this.draw();
  };
  stretchRange(input, in_min, in_max, out_min, out_max) {
    return (
      ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  }
  checkHeight(position, inputCanvas) {
    if (position > inputCanvas.height - 35) {
      //half padel height
      position = inputCanvas.height - 35;
    } else if (position < 35) {
      position = 35;
    }
    return position;
  }
  easeInOutBack(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }
}

const Canvas = ({ updateScore }) => {
  const canvasReference = useRef();

  useEffect(() => {
    const getCanvas = canvasReference.current;
    // init correct pixels for canvas paint
    getCanvas.width = getCanvas.parentNode.clientWidth;
    getCanvas.height = getCanvas.parentNode.clientHeight;
    // bubble up state to update ui
    const pong = new Pong(getCanvas, updateScore);
    // To unmount easily
    const resize = () => {
      getCanvas.width = getCanvas.parentNode.clientWidth;
      getCanvas.height = getCanvas.parentNode.clientHeight;
      pong.updateCanvasSize(getCanvas.width, getCanvas.height);
    };
    const moveMouse = (event) => {
      let padelPos = pong.checkHeight(event.offsetY, getCanvas);
      pong.players[0].pos.y = padelPos;
    };

    window.addEventListener("resize", resize());
    getCanvas.addEventListener("mousemove", moveMouse);
    getCanvas.addEventListener("click", () => {
      pong.start();
    });

    return () => {
      window.removeEventListener("resize", resize);
      getCanvas.removeEventListener("mousemove", moveMouse);
      getCanvas.removeEventListener("click", () => {
        pong.start();
      });
    };
  }, []);

  return (
    <>
      {" "}
      {/* <p>oiweoi</p> */}{" "}
      <FullSizeCanvas ref={canvasReference}> </FullSizeCanvas>{" "}
    </>
  );
};

export default Canvas;
