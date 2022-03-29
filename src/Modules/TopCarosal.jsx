import React, { useState, useRef } from "react";
import "./TopCarosal.css";
import vid1 from "../Assests/Video/video1.mp4";
import vid2 from "../Assests/Video/video02.mkv";
import { Carousel } from "react-bootstrap";
// import ReactPlayer from "react-player";
import { FaGooglePlay, FaPlay, FaPause } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

export const TopCarosal = () => {
  // console.log(ele);
  let [toggle, setToggle] = useState(true);
  const [current, setCurrent] = useState(0);
  const vidRef = useRef(null);
  // const rangeBtn = useRef(null);

  // const updateTime = (e) => {
  //   const input = document.querySelector("#progress");
  //   input.value =
  //     (vidRef.current.currentTime / vidRef.current.duration) * 100;
  // };
  console.log(vidRef);
  const btnToggle = () => {
    console.log(vidRef.current);
    if (vidRef.current.paused) {
      setToggle(false);
      vidRef.current.play();
      vidRef.current.volume = 0.0;
    } else {
      setToggle(true);
      vidRef.current.pause();
      vidRef.current.volume = 0.0;
    }
  };
  // const endedFunc = (e) => {
  //   console.log(e);
  // };
  // console.log(range);

  console.log(current);
  const videoCarsoal = [
    {
      id: 0,
      title: "Your Personal Jounary to",
      src: vid1,
      credit: "Mind + Body Health",
      // ref: vidRef,
    },
    {
      id: 1,
      title: "Your Personal Jounary to",
      src: vid1,
      credit: "Sleep/Wake",
    },
    {
      id: 2,
      title: "Your Personal Jounary to",
      src: vid2,
      credit: "Fasting/Nutrition",
      // ref: vidRef3,
    },
    {
      id: 3,
      title: "Your Personal Jounary to",
      src: vid2,
      credit: "Mental Health",
      // ref: vidRef4,
    },
    {
      id: 4,
      title: "Your Personal Jounary to",
      src: vid1,
      credit: "Physical/Functional Fitness",
      // ref: vidRef5,
    },
  ];

  return (
    // <div>
    <Carousel
      interval={null}
      className={"Caption"}
      onSelect={(e) => setCurrent(e)}
    >
      {videoCarsoal.map((videoobj) => {
        return (
          <Carousel.Item
            // interval={null}
            key={videoobj.id}
            className={"carosualChild"}
          >
            <video
              src={videoobj.src}
              ref={videoobj.id === current ? vidRef : null}
              // width={"800px"}
              // height={"800px"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              // onEnded={endedFunc}
              // onTimeUpdate={updateTime}
            />
            <Carousel.Caption className="text-content">
              <p>{videoobj.title}</p>
              <h2>{videoobj.credit}</h2>
              <div className="buttons">
                <button>
                  <span>
                    <BsApple />
                  </span>
                  App Store
                </button>
                <button>
                  {" "}
                  <span>
                    <FaGooglePlay />
                  </span>{" "}
                  Google Play
                </button>
              </div>
              <button className="playBtn" onClick={btnToggle}>
                {" "}
                {toggle ? <FaPlay /> : <FaPause />}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
