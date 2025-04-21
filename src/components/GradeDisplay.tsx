import React from "react";

export const getGrade = (score:any) => {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
};

export default function GradeDisplay({ score }) {
  const grade = getGrade(score);

  return (
    <div>
      <p>نمره: {score}</p>
      <p>رتبه: {grade}</p>
    </div>
  );
}