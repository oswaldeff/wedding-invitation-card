import React, { useEffect, useRef } from "react";

import "./GreetingCanvas.css";
import Flower from "../../components/greeting/Flower";
import flower from "../../images/flower.png";

// SECTION GREETING BODY
const GreetingCanvas = () => {
  const component = useRef(null);

  // FUNCTION Greeting Body Render
  useEffect(() => {
    // NOTE Canvas Component
    component.current = document.querySelector(".flower");
    const canvas = component.current;
    const context = canvas.getContext("2d");

    // NOTE Canvas Sizing
    const PIXELRATIO = 1.4;
    canvas.width = window.innerWidth * PIXELRATIO;
    canvas.height = window.innerHeight * PIXELRATIO;

    // NOTE Canvas Resize // deprecated
    // window.addEventListener("resize", function() {
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    //   render();
    // });

    // NOTE Flower
    const TOTAL = 20;
    const petalArray = [];
    const petalImg = new Image();
    petalImg.src = flower;
    petalImg.addEventListener("load", () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    });

    // FUNCTION Rendering Images
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const text =
        "나를 더 좋은 사람이고 싶게 하는 인연을 만나<br></br>" +
        "어제보다 나은 내일을<br></br>" +
        "함께 그려나가려고 합니다.<br></br>" +
        "<br></br>" +
        "둘이 함께 그려나갈 새로운 페이지에<br></br>" +
        "결혼이라는 첫 단어를 새기는<br></br>" +
        "그 순간, 그 자리를<br></br>" +
        "여러분께서 빛내주신다면<br></br>" +
        "더욱 아름다운 첫 페이지가 될 것 같습니다.";
      petalArray.forEach((petal) => petal.animate());
      window.requestAnimationFrame(render);
    }
    // FUNCTION Petal Speed
    let mouseX = 0;
    function touchHandler(e) {
      mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
    }
    window.addEventListener("mousemove", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    // NOTE Petal class
    class Petal {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 15 + Math.random() * 15;
        this.h = 10 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();

        this.xSpeed = 0.8 + Math.random() * 0.02;
        this.ySpeed = 1.0 + Math.random() * 0.01;
        this.flipSpeed = Math.random() * 0.001;
      }

      draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
          this.x = -petalImg.width;
          this.y = Math.random() * canvas.height * 2 - canvas.height;
          this.xSpeed = 1.3 + Math.random() * 2;
          this.ySpeed = 0.8 + Math.random() * 1;
          this.flip = Math.random() * 1.1;
        }
        context.globalAlpha = this.opacity;
        context.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
          this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
        );
      }

      animate() {
        this.x += this.xSpeed + mouseX * (Math.random() * 0.3);
        this.y += this.ySpeed + mouseX * (Math.random() * 0.3);
        this.flip += this.flipSpeed;
        this.draw();
      }
    }
  });
  return (
    <section id="greeting-canvas" className="greeting-canvas">
      <Flower />
    </section>
  );
};

export default GreetingCanvas;
