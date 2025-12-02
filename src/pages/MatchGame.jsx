import React, { useState, useEffect } from "react";
import "./MatchGame.css";
import CommentSection from "../components/CommentSection";

const cardsData = [
  // PCR
  { type: "PCR", text: "PCR" },
  { type: "PCR", text: "Uses temperature cycling to denature DNA, anneal primers, and extend strands via Taq polymerase." },

  { type: "PCR2", text: "PCR Primer Design" },
  { type: "PCR2", text: "Requires selecting primer sequences with correct melting temperatures, GC content, and minimal secondary structure." },

  // Sequencing
  { type: "SEQ", text: "Sanger Sequencing" },
  { type: "SEQ", text: "Determines DNA sequence by chain termination using fluorescent dideoxynucleotides that halt polymerase extension." },

  { type: "SEQ2", text: "Next-Generation Sequencing" },
  { type: "SEQ2", text: "Generates millions of short reads in parallel; relies on read depth and coverage to accurately detect variants." },

  // Gel Electrophoresis
  { type: "GEL", text: "Gel Electrophoresis" },
  { type: "GEL", text: "Separates nucleic acids based on size as fragments migrate through an agarose matrix under electric current." },

  { type: "GEL2", text: "Band Intensity" },
  { type: "GEL2", text: "The brightness of DNA bands reflects the amount of DNA present; overloaded samples cause smearing." },

  // CRISPR
  { type: "CRISPR", text: "CRISPR-Cas9" },
  { type: "CRISPR", text: "Uses guide RNA to target genomic sites, where Cas9 introduces a double-strand break repaired by NHEJ or HDR." },

  { type: "CRISPR2", text: "CRISPR Immunity" },
  { type: "CRISPR2", text: "Bacteria store viral DNA sequences in CRISPR arrays, enabling recognition and defense against future infections." },

  // Cloning
  { type: "CLONE", text: "Plasmid Vector" },
  { type: "CLONE", text: "Engineered circular DNA containing an origin of replication, selectable marker, and multiple cloning site." },

  { type: "CLONE2", text: "Restriction-Ligation Cloning" },
  { type: "CLONE2", text: "Uses restriction enzymes to cut DNA at specific motifs, enabling ligation of inserts into plasmid backbones." },
];

// Shuffle helper
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function MatchGame() {
  const [cards, setCards] = useState(() => shuffle(cardsData));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const handleFlip = (index) => {
    if (hasWon) return; // prevent flips after winning
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    setFlipped([...flipped, index]);
  };

  // Matching logic
  useEffect(() => {
    if (flipped.length === 2) {
      const [i1, i2] = flipped;

      if (cards[i1].type === cards[i2].type) {
        setMatched([...matched, i1, i2]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped, cards, matched]);

  // Win condition
  useEffect(() => {
    const uniqueMatches = new Set(matched);
    if (uniqueMatches.size === cardsData.length) {
        setHasWon(true);
    }
  }, [matched]);

  // Reset
  const resetGame = () => {
    setCards(shuffle(cardsData));
    setFlipped([]);
    setMatched([]);
    setHasWon(false);
  };

  return (
    <div className="matchgame-container">
      {hasWon && <div className="win-banner">YOU WIN!</div>}

      <h1>Molecular Biology Matching Game</h1>
      <p className="subtitle">Match each technique with its correct description!</p>

      <div className="game-grid">
        {cards.map((card, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(i);

          return (
            <div
              key={i}
              className={`card 
                ${isFlipped ? "flipped" : ""} 
                ${matched.includes(i) ? "matched" : ""}`}
              onClick={() => handleFlip(i)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{card.text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
      <CommentSection page="match" />
    </div>
  );
}
