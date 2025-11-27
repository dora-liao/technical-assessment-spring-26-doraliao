import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";

export default function Cloning({ userId }) {
  return (
    <div className="page-container">
      <h1>Molecular Cloning & Gene Circuit Design</h1>

      <p>
        Molecular cloning is a technique that allows scientists to copy and manipulate genes of interest. 
        It involves inserting a specific DNA fragment into a circular DNA molecule called a plasmid, 
        which is then introduced into bacteria or other host cells. 
        As the host cells replicate, they produce many copies of the target gene. 
        This method is widely used to study gene function, produce clinally-relevant proteins such as insulin, 
        or create genetically engineered organisms for research and biotechnology.
      </p>

      <p>
        Gene circuit design builds on molecular cloning by arranging multiple genes, regulatory elements, and selection markers
        into synthetic networks that control gene expression in a predictable way. 
        In the lab, this process typically involves designing DNA sequences on a computer, assembling them using cloning techniques, and inserting them into host cells. 
        Scientists then test how the circuit behaves in vitro, often using fluorescent proteins like GFP or other reporter genes to visualize activity. 
        For example, a simple gene circuit might turn a cell green in response to a specific chemical, allowing researchers to see how genes interact and respond to environmental signals experimentally.
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
