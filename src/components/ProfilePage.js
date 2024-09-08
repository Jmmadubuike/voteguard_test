// src/components/ProfilePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    age: "",
    role: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Profile</h2>
      <div className={styles.profileBox}>
        {Object.keys(profileData).map((key) => (
          <div key={key} className={styles.profileItem}>
            <label className={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <p className={styles.value}>{profileData[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
