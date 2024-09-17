import React, { useEffect, useState } from "react";

const Page = ({ level }) => {
  const [risk, setrisk] = useState("LOW")
  const [gauge, setgauge] = useState("rischio1")
  useEffect(() => {
    (() => {
      if (level == "Kurus"){
        setrisk("LOW");
        setgauge("rischio1");
      }else if (level == "Normal"){
        setrisk("MEDIUM");
        setgauge("rischio2");
      } else if (level == "Kelebihan Berat Badan"){
        setrisk("HIGH");
        setgauge("rischio3");
      } else if (level == "Obesitas"){
        setrisk("VERY HIGH");
        setgauge("rischio4");
      }
    })();
  }, [level]);
  return (
    <div className="gauge-wrapper">
      <div className={`gauge four ${gauge} `}>
        <div className="slice-colors">
          <div className="st slice-item"></div>
          <div className="st slice-item"></div>
          <div className="st slice-item"></div>
          <div className="st slice-item"></div>
        </div>
        <div className="needle"></div>
        <div className="gauge-center">
          <div className="label">RISK</div>
          <div className="number">{risk}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
