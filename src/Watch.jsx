import React, { useState } from "react";

const Watch = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }, 1000);

  return (
    <>
      <div className="watch">
        <h2><span className="clock">🕗 </span>Live Digital clock<span className="clock"> 🕗</span></h2>
        <h3>{ctime}</h3>
      </div>
    </>
  );
};

export default Watch;
