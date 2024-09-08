// src/pages/MissionVision.js
import React from "react";
import "./MissionVision.css";

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <section className="mission-vision-content">
        <h2>Our Mission</h2>
        <p>
          At VoteGuard, our mission is to revolutionize the electoral process by
          ensuring the highest levels of transparency and credibility. We focus
          on providing a platform that accurately shares election vote data,
          offering a clear view of electoral outcomes. While we do not declare
          winners, our commitment is to display results promptly and
          transparently, facilitating informed and trustworthy democratic
          engagement.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a future where every election is characterized by
          transparency and fairness, with results presented clearly and
          accurately. Our goal is to be the foremost platform for sharing
          electoral data, empowering voters and stakeholders with reliable,
          real-time information and reinforcing trust in the democratic process.
        </p>
      </section>
    </div>
  );
};

export default MissionVision;
