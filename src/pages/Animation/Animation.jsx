import React, { useState, useEffect } from "react";
import "./Animation.css";

const Animation = () => {
  const fieldWidth = 800;
  const fieldHeight = 400;
  const diameter = 100;

  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [spinDuration, setSpinDuration] = useState("2s");
  const [activeBall, setActiveBall] = useState("");

  const toggleRun = () => {
    setRunning(!running);
    if (!running) {
      startSpin();
    } else {
      stopSpin();
    }
  };

  const calculate = () => {
    setX((prevX) => {
      if (goRight) {
        if (prevX >= maxLeft) {
          setGoRight(false);
          setRandomSpinSpeed();
          return prevX;
        }
        return prevX + 5;
      } else {
        if (prevX <= 0) {
          setGoRight(true);
          setRandomSpinSpeed();
          return prevX;
        }
        return prevX - 5;
      }
    });

    setY((prevY) => {
      if (goDown) {
        if (prevY >= maxTop) {
          setGoDown(false);
          setRandomSpinSpeed();
          return prevY;
        }
        return prevY + 5;
      } else {
        if (prevY <= 0) {
          setGoDown(true);
          setRandomSpinSpeed();
          return prevY;
        }
        return prevY - 5;
      }
    });
  };

  const process = () => {
    if (running) {
      calculate();
    }
  };

  const startSpin = () => {
    const ball = document.getElementById("ball");
    ball.style.animation = `spin ${spinDuration} linear infinite`;
  };

  const stopSpin = () => {
    const ball = document.getElementById("ball");
    ball.style.animation = "none";
  };

  const setRandomSpinSpeed = () => {
    const randomDuration = Math.floor(Math.random() * 1.5) + 0.5;
    setSpinDuration(`${randomDuration}s`);
  };

  useEffect(() => {
    setRandomSpinSpeed();
    const interval = setInterval(process, 25);
    return () => clearInterval(interval);
  }, [running, goRight, goDown]);

  const swapBall = (image) => {
    const ball = document.getElementById("ball");
    ball.style.backgroundImage = `url('./${image}.png')`;
    ball.style.backgroundSize = "cover";
    ball.style.backgroundPosition = "center";
    ball.style.backgroundRepeat = "no-repeat";
    ball.style.backgroundColor = "black";
    setActiveBall(image);
  };

  return (
    <div>
      <div
        id="field"
        style={{
          width: fieldWidth,
          height: fieldHeight,
        }}
      >
        <div
          id="ball"
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            height: `${diameter}px`,
            width: `${diameter}px`,
            borderRadius: "50%",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "red",
            boxShadow: "0 0 0.75rem black",
          }}
        />
      </div>

      <div className="animation-button">
        <button
          id="run"
          onClick={toggleRun}
          className={`btn ${running ? "btn-danger" : "btn-success"}`}
        >
          {running ? "PAUSE" : "RUN"}
        </button>

        <div className="animation2-button">
          <button
            className={`btn ${activeBall === "Basketball" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("Basketball")}
          >
            Basketball
          </button>
          <button
            className={`btn ${activeBall === "football" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("football")}
          >
            Football
          </button>
          <button
            className={`btn ${activeBall === "volleyball" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("volleyball")}
          >
            Volleyball
          </button>
          <button
            className={`btn ${activeBall === "face" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("face")}
          >
            Human
          </button>
          <button
            className={`btn ${activeBall === "cartoon" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("cartoon")}
          >
            Cartoon
          </button>
          <button
            className={`btn ${activeBall === "logo" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => swapBall("logo")}
          >
            Logo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Animation;
