import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./Interaction.css";
import Background from "../../components/interaction/Background";

// SECTION INTERACTION
const Interaction = () => {
  const component = useRef(null);

  // FUNCTION Interaction Render
  useEffect(() => {
    const gsapContext = gsap.context(async () => {
      // NOTE Canvas Component
      component.current = document.querySelector(".background");
      const canvas = component.current;

      const context = canvas.getContext("2d");

      // NOTE Canvas Sizing
      canvas.width = window.innerWidth * 1; //0.94;
      canvas.height = window.innerHeight;

      // NOTE Canvas Resize // deprecated
      // window.addEventListener("resize", function() {
      //   canvas.width = window.innerWidth;
      //   canvas.height = window.innerHeight;
      //   render();
      // });

      // NOTE Canvas Animation
      const FRAME = 200;
      // FIXME AWS S3
      const currentFrame = (index) => {
        return "s3 url";
      };
      const images = [];
      const imageSeq = {
        frame: 0,
      };

      for (let i = 0; i < FRAME; i++) {
        const image = new Image();
        image.src = currentFrame(i);
        images.push(image);
      }

      gsap.to(imageSeq, {
        frame: FRAME - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
          markers: false,
        },
        onUpdate: render,
      });

      images[0].onload = render;

      // FUNCTION Rendering Images
      async function render() {
        console.log("ImageSeq Frame: ", imageSeq.frame);
        await scaleImage(images[imageSeq.frame], context);
      }

      // FUNCTION Scaling Images
      async function scaleImage(image, context) {
        const canvas = context.canvas;
        const hRatio = canvas.width / image.width;
        const vRatio = canvas.height / image.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - image.width * ratio) / 2;
        const centerShift_y = (canvas.height - image.height * ratio) / 2;
        await context.clearRect(0, 0, canvas.width, canvas.height);
        await context.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          centerShift_x,
          centerShift_y,
          image.width * ratio,
          image.height * ratio
        );
        context.scale(1, 1);
      }

      ScrollTrigger.refresh();
    }, component);

    return () => gsapContext.revert();
  }, []);

  return (
    <section ref={component} id="interaction" className="interaction">
      <Background />
    </section>
  );
};

export default Interaction;
