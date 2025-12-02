import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";

export default function Cloning({ userId }) {
  return (
    <div className="page-container">
      <h1>Molecular Cloning & Gene Circuit Design</h1>

      <p>
        <span className="hover-reveal">
        <span className="hover-word">Molecular cloning</span>
        <img
          src={require("../cloning-diagram.png")}
          alt="Cloning Diagram"
          className="overlay-image"
        />
      </span> is a technique that allows scientists to copy and manipulate genes of interest. 
        It involves inserting a specific DNA fragment into a small circular DNA molecule called a {" "}
        <span className="hover-reveal">
          <span className="hover-word">plasmid</span>
          <span className="overlay-reveal">
            plasmids can replicate independently of the cell's main chromosome
          </span>
        </span>{""}, 
        which is then introduced into bacteria or other host cells. 
        As the host cells replicate, they produce many copies of the target gene. 
        This method is widely used to study gene function, produce clinally-relevant proteins such as insulin, 
        or create genetically engineered organisms for research and biotechnology.
      </p>

      <p>
        Gene circuit design builds on molecular cloning by arranging multiple genes, {" "}
        <span className="hover-reveal">
          <span className="hover-word">regulatory elements</span>
          <span className="overlay-reveal">
            regulates when, where, and how much a gene is transcribed
          </span>
        </span>{""}, and {" "}
        <span className="hover-reveal">
          <span className="hover-word">selection markers</span>
          <span className="overlay-reveal">
            identifies cells that have successfully incorporated foreign DNA
          </span>
        </span>{" "}
        into <span className="hover-reveal">
        <span className="hover-word">synthetic networks</span>
        <img
          src={require("../plasmid-map.png")}
          alt="Plasmid Map"
          className="overlay-image"
        />
      </span> that control gene expression in a predictable way. 
        In the lab, this process typically involves designing DNA sequences on a computer, assembling them using {" "}
        <span className="hover-reveal">
          <span className="hover-word">cloning techniques</span>
          <span className="overlay-reveal">
            Gibson Assembly and Golden Gate cloning are common techniques
          </span>
        </span>{""}, and inserting them into host cells. 
        Scientists then test how the circuit behaves in vitro, often using fluorescent proteins like green fluorescent protein (GFP) or other reporter genes to visualize activity. 
        For example, a simple gene circuit might <span className="hover-reveal">
        <span className="hover-word">turn a cell green</span>
        <img
          src={require("../gfp.png")}
          alt="Cells expressing GFP"
          className="overlay-image"
        />
      </span> in response to a specific chemical, allowing researchers to see how genes interact and respond to environmental signals experimentally.
      </p>

      <p>
        By combining cloning and gene circuit design, researchers can construct complex systems like synthetic metabolic pathways and programmable gene switches. 
        These tools are widely used in synthetic biology to explore fundamental biological processes and develop practical applications in medicine, agriculture, and industrial biotechnology. 
        The process in the lab involves careful design, iterative testing, and precise molecular techniques to ensure the circuits function as intended.
      </p>
      <PollQuestion questionId={4} userId={userId} />
      <CommentSection page="cloning" />
    </div>
  );
}
