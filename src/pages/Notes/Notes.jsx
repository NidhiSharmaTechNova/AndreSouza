import React from "react";
import "./Notes.css";

const data = [
  {
    year: "2024",
    items: [
      { title: "Hacking Payment Terminals to run Figma", date: "Oct 2024" },
      { title: "Redesigning my portfolio", date: "Sep 2024" },
    ],
  },
  {
    year: "2023",
    items: [{ title: "The Zettelkasten method", date: "Feb 2023" }],
  },
  {
    year: "2022",
    items: [{ title: "How to study & learn", date: "Sep 2022", active: true }],
  },
  {
    year: "2018",
    items: [{ title: "Conversational interfaces", date: "Dec 2018" }],
  },
];

export default function Notes() {
  return (
    <div className="notes-page">
      {data.map((section, i) => (
        <div key={i} className="year-block">
          <h2 className="year">{section.year}</h2>

          {section.items.map((item, j) => (
            <div
              key={j}
              className={`note-row ${item.active}`}
            >
              <span className="title">{item.title}</span>
              <span className="line" />
              <span className="date">{item.date}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
