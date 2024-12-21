"use client";

import { useState, useEffect } from "react";

export default function DiaryPage() {
  const [entry, setEntry] = useState("");
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 日記と目標を保存するロジックを追加
    alert(`日記が保存されました:\n\n${entry}\n\n目標:\n\n${goal}`);
    setEntry("");
    if (goal) {
      setGoals([...goals, goal]);
      setGoal("");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>日記を書く</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="entry">日記:</label>
          <textarea
            id="entry"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="今日の日記をここに書いてください..."
            style={{ width: "100%", height: "150px", padding: "1rem", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "1rem", resize: "none" }}
          ></textarea>
        </div>
        <div>
          <label htmlFor="goal">目標:</label>
          <input
            id="goal"
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="新しい目標を入力"
            style={{ width: "100%", padding: "1rem", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "1rem" }}
          />
        </div>
        <button type="submit">保存</button>
      </form>
      <h2>目標リスト</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export function scheduleDiaryNotification() {
  // 24時間ごとに通知をスケジュール
  setInterval(() => {
    alert("日記を書く時間です！");
  }, 24 * 60 * 60 * 1000);
}

export function scheduleGoalProgressNotification() {
  // 4日ごとに通知をスケジュール
  setInterval(() => {
    alert("目標の進捗を書く時間です！");
  }, 4 * 24 * 60 * 60 * 1000);
}
