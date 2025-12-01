import React, { useState } from "react";
import TypingText from "../components/TypingText";
import "./Home.css";
import { Link } from "react-router-dom";

const topics = [
  {
    id: "pcr",
    title: "PCR",
    summary:
      "PCR amplifies specific DNA fragments, creating millions of copies through thermal cycling. It is essential for diagnostics, cloning, and genetic analysis.",
    link: "/pcr",
  },
  {
    id: "seq",
    title: "DNA Sequencing",
    summary:
      "Sequencing reveals the order of nucleotides in DNA. Sanger, NGS, and nanopore sequencing methods are common for studying mutations, disease, and genome structure.",
    link: "/seq",
  },
  {
    id: "crispr",
    title: "CRISPR",
    summary:
      "CRISPR uses guide RNA and a protein called Cas9 to edit DNA with precision. Originating from bacterial immunity, it is now a fundamental technology for genetic engineering and therapeutic research.",
    link: "/crispr",
  },
  {
    id: "cloning",
    title: "Cloning",
    summary:
      "Molecular cloning inserts genes into plasmids to replicate them in host cells. It enables protein production, gene studies, and synthetic biology circuits.",
    link: "/cloning",
  },
  {
    id: "gel",
    title: "Gel Electrophoresis",
    summary:
      "Gel electrophoresis separates DNA fragments by size under an electric field, producing band patterns used to verify experiments and analyze genetic material.",
    link: "/gel",
  },
];

function Home() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="home-container">
      <TypingText text="Molecular Biology 101" className="home-title" />
      <p className="home-subtitle">
        Click a bubble to learn the basics of five core molecular biology techniques.
      </p>

     <div className="carousel">
        {topics.map((topic) => {
          const isOpen = expanded === topic.id;

          return (
            <div
              key={topic.id}
              className={`bubble ${isOpen ? "expanded" : ""}`}
              onClick={() => setExpanded(isOpen ? null : topic.id)}
            >
              <div className="bubble-title">{topic.title}</div>

              {isOpen && (
                <div className="bubble-content">
                  <p>{topic.summary}</p>
                  <Link className="learn-btn" to={topic.link}>
                  Learn More →
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
