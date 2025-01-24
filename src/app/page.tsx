"use client";
import Image from "next/image";
import styles from "./page.module.css";
import data from "../../data.json";
import { useState } from "react";

export default function Home() {
  const userId = data.user.userID;
  const [streak, setStreak] = useState(0);
  const [link, setLink] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const year2YY = new Date().getFullYear().toString().slice(-2);
  const month2MM = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const day2DD = new Date().getDate().toString().padStart(2, "0");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLink(value);
    setIsButtonDisabled(!value.trim());
  };

  return (
    <main className={styles.main}>
      <div className={styles.subject}>
        <div style={{ flexDirection: "column" }}>
          <div>
            {year2YY}.{month2MM}.{day2DD}
          </div>
          <input
            type="text"
            id="linkInput"
            style={{
              border: "1px white",
              marginRight: 20,
            }}
            value={link}
            onChange={handleInputChange}
            width="100%"
            placeholder="링크 입력하기"
          />
          <button
            id="submitBtn"
            style={{ backgroundColor: "none", border: "0px" }}
            disabled={isButtonDisabled}
            onClick={() => {
              setStreak(streak + 1);
              setLink("");
              setIsButtonDisabled(true);
            }}
          >
            ✅
          </button>
        </div>

        <Image
          src="/myduck.png"
          alt="omo Logo"
          className={styles.omoLogo}
          width={60}
          height={130}
          priority
        />
      </div>
      <p style={{ fontSize: 20 }}>{userId} Lv 1️⃣</p>
      <div
        style={{
          border: "10px #FFCC63 solid",
          width: "100%",
          borderRadius: 50,
        }}
      ></div>
      <div style={{ textAlign: "initial" }}>
        <p>각자도생 스터디 🔥 {streak}</p>
        <p>듀오링고 🥶 {streak}</p>
      </div>
    </main>
  );
}
