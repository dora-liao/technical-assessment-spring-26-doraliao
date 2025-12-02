import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";


export default function Pcr({ userId }) {
  return (
    <div className="page-container">
      <h1>Polymerase Chain Reaction (PCR)</h1>
      
      <p>
        PCR is a laboratory technique used to amplify a specific segment of DNA, creating millions or even billions of copies from a tiny initial sample. 
        This makes it possible to study DNA in detail, even if the starting material is extremely limited.
      </p>

      <p>The process relies on three main steps that are repeated in cycles:</p>

      <ul>
        <li>
          <strong>Denaturation:</strong> The double-stranded DNA is heated to separate it into two single strands.
        </li>
        <li>
        <strong>Annealing:</strong> Short DNA{" "}
        <span className="hover-reveal">
          <span className="hover-word">oligos</span>
          <span className="overlay-reveal">
            short, single-stranded synthetic sequences of DNA or RNA
          </span>
        </span>{" "}
        called primers bind to the specific regions of the DNA that need to be copied.
      </li>
        <li>
          <strong>Elongation:</strong> A heat-stable DNA polymerase enzyme builds new DNA strands by adding nucleotides (dNTPs) to the primers, effectively copying the target segment.
        </li>
      </ul>

      <p>
        These three steps—denaturation, annealing, and elongation—are repeated for 20–40 cycles. 
        With each cycle, the amount of target DNA doubles, resulting in exponential amplification.
      </p>

      <p>
        One of the most well-known applications of PCR is in detecting infectious diseases, such as COVID-19. 
        PCR tests for COVID-19 work by identifying the virus’s RNA in patient samples. The viral RNA is first converted into DNA via reverse transcription, 
        which is then amplified using PCR. Even if only a tiny amount of viral genetic material is present, PCR can produce enough copies 
        to detect the virus accurately. This sensitivity made PCR a critical tool in controlling the pandemic by enabling early and reliable diagnosis.
      </p>
      <PollQuestion questionId={1} userId={userId} />
      <CommentSection page="pcr" />
    </div>
  );
}
