import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";

export default function Crispr({ userId }) {
  return (
    <div className="page-container">
      <h1>CRISPR Gene Editing</h1>

      <p>
        <span className="hover-reveal">
        <span className="hover-word">CRISPR</span>
        <img
          src={require("../crispr-diagram.jpg")}
          alt="CRISPR Diagram"
          className="overlay-image"
        />
      </span> (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary tool that allows scientists to make precise, targeted changes to DNA. 
        It uses a piece of guide RNA to locate a specific DNA sequence via complementary base pairing and the Cas9 protein, which cuts the DNA at that location. 
        Once the DNA is cut, the cell’s {" "}
        <span className="hover-reveal">
          <span className="hover-word">natural repair mechanisms</span>
          <span className="overlay-reveal">
            NHEJ (rapid but error-prone) and HDR (slower but highly accurate) are two primary DNA repair pathways
          </span>
        </span>{" "} can be used to remove, replace, and/or modify genes. 
      </p>

      <p>
        CRISPR originally evolved as a natural defense system in bacteria. When viruses infect a bacterial cell,
         the bacteria can capture small pieces of the viral DNA and store them in their own genome.
          These stored sequences act like a genetic memory, allowing the bacteria to recognize and defend against the virus if it attacks again.
      </p>

      <p>
        CRISPR has enabled scientists to study gene function with unprecedented accuracy, create models of human diseases, and explore potential therapies for genetic disorders. 
        Its <span className="hover-reveal">
        <span className="hover-word">applications</span>
        <img
          src={require("../crispr-apps-2.png")}
          alt="CRISPR Diagram"
          className="overlay-image"
        />
      </span> extend beyond healthcare - for example, it can be used to develop crops with improved traits such as disease resistance or enhanced nutritional value. 
        It has also been used in synthetic biology to engineer organisms for industrial and environmental purposes, making it one of the most versatile tools in modern molecular biology.
      </p>

      <p>
        However, CRISPR also raises important ethical considerations. Gene editing in humans, particularly in embryos,
         sparks debates about safety, unintended consequences, and the potential for “{""}
        <span className="hover-reveal">
          <span className="hover-word">designer babies</span>
          <span className="overlay-reveal">
            a genetically engineered infant created to exhibit specific traits or to avoid certain genetic conditions
          </span>
        </span>{""}.” 
        There are also questions about ecological impacts when editing the genomes of animals or plants. 
        As a result, researchers and policymakers are actively discussing guidelines and regulations to ensure that CRISPR is used responsibly and ethically,
         balancing scientific progress with societal concerns.
      </p>
      <PollQuestion questionId={5} userId={userId} />
      <CommentSection page="crispr" />
    </div>
  );
}
