import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./HomePage.css";

const HomePage = () => {

  return (
    <div className="home-container">
      <div className="motion-texts">
        <div className="motion-texts-inner">
          <div className="moving-text">
            VoteGuard: Ensuring Transparent Elections
          </div>
          <div className="moving-text">Your Voice Matters - VoteGuard</div>
          <div className="moving-text">
            Reliable Election Monitoring with VoteGuard
          </div>
          <div className="moving-text">Join Us in Upholding Democracy</div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <h2>Integrity</h2>
          <p>
            VoteGuard stands as a symbol of integrity, ensuring that every vote
            counts and every voice is heard.
          </p>
        </div>
        <div className="feature">
          <h2>Transparency</h2>
          <p>
            Our platform offers real-time monitoring and reporting to ensure
            full transparency in the electoral process.
          </p>
        </div>
        <div className="feature">
          <h2>Credibility</h2>
          <p>
            By using cutting-edge technology, VoteGuard guarantees that
            electoral data is accurate, reliable, and tamper-proof.
          </p>
        </div>
      </section>

      <div className="button-container">
        <NavLink to="/register">
          <button className="login-button">Register on VoteGuard</button>
        </NavLink>

        <NavLink to="/login">
          <button className="login-button">Login to VoteGuard</button>
        </NavLink>
      </div>

      <section className="support-section">
        <h2>Support VoteGuard with Crypto</h2>
        <p>
          You can support the mission of VoteGuard by donating BTC to the
          address below:
        </p>
        <p>
          <strong>BTC Wallet Address:</strong>{" "}
          bc1qt0je3608ug97pe5wesu3jdgmzl3z034clkfre9
        </p>
        <div className="btc-qr-code">
          <img
            src={require("../assets/btc-qr-code.jpg")}
            alt="Scan to donate BTC"
          />
        </div>
      </section>

      <div className="button-container"></div>

      <div className="party-list">
        <h2>Political Parties in Nigeria</h2>
        <ul>
          <li>All Progressives Congress (APC)</li>
          <li>Peoples Democratic Party (PDP)</li>
          <li>Labour Party (LP)</li>
          <li>Social Democratic Party (SDP)</li>
          <li>All Progressives Grand Alliance (APGA)</li>
          <li>Democratic Peoples Congress (DPC)</li>
          <li>Democratic Alternative (DA)</li>
          <li>National Conscience Party (NCP)</li>
          <li>National Democratic Liberty Party (NDLP)</li>
          <li>United Political Party (UPP)</li>
          <li>Progressive Peoples Alliance (PPA)</li>
          <li>All Nigeria Peoples Party (ANPP)</li>
          <li>Conservative Party (CP)</li>
          <li>National Democratic Party (NDP)</li>
          <li>Democratic Party of Nigeria (DPN)</li>
          <li>Action Alliance (AA)</li>
          <li>Hope Democratic Party (HDP)</li>
          <li>People's Redemption Party (PRP)</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
