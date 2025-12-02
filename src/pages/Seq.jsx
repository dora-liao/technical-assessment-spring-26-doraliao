import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";

export default function Seq({ userId }) {
  return (
    <div className="page-container">
      <h1>DNA Sequencing</h1>

      <p>
        DNA sequencing is the process of determining the precise order of nucleotides in a DNA molecule. 
        By reading this sequence, scientists can understand genes, study mutations, and explore the molecular basis of diseases. 
      </p>

      <h2>Sanger Sequencing</h2>
      <p>
        {""}
        <span className="hover-reveal">
          <span className="hover-word">Sanger sequencing</span>
          <span className="overlay-reveal">
            Sanger sequencing is named after English biochemist Frederick Sanger
          </span>
        </span>{""}, developed in the 1970s, was the first widely adopted method for reading DNA. 
        It uses {" "}
        <span className="hover-reveal">
          <span className="hover-word">modified nucleotides</span>
          <span className="overlay-reveal">
            these nucleotides lack a hydroxyl group, causing DNA polymerase to stop adding nucleotides when one is incorporated
          </span>
        </span>{" "} to terminate DNA synthesis at specific points, generating fragments of <span className="hover-reveal">
        <span className="hover-word">different lengths</span>
        <img
          src={require("../sanger.png")}
          alt="Sanger"
          className="overlay-image"
        />
      </span> 
        {" "} that are then separated and read to determine the DNA sequence. While Sanger sequencing is highly accurate, it is best suited 
        for smaller DNA fragments or targeted gene analysis rather than large-scale{" "}
        <span className="hover-reveal">
          <span className="hover-word">genome</span>
          <span className="overlay-reveal">
            an organism's complete set of DNA
          </span>
        </span>{" "}projects. 
        It remains a standard method for validating results from newer sequencing technologies.
      </p>

      <h2>Next-Generation Sequencing (NGS)</h2>
      <p>
        <span className="hover-reveal">
        <span className="hover-word">Next generation sequencing</span>
        <img
          src={require("../ngs.png")}
          alt="NGS"
          className="overlay-image"
        />
      </span> (NGS) refers to a collection of modern high-throughput methods that can sequence millions of DNA fragments simultaneously. 
        NGS drastically reduces the time and cost required to sequence entire genomes, allowing researchers to study complex genetic information at an unprecedented scale. 
        Applications of NGS range from identifying genetic mutations in cancer to analyzing microbial communities and studying evolutionary relationships. 
        During the COVID-19 pandemic, NGS was critical for sequencing the SARS-CoV-2 genome and monitoring emerging variants, enabling rapid responses in public health and vaccine development.
      </p>

      <h2>Nanopore Sequencing</h2>
      <p>
        <span className="hover-reveal">
        <span className="hover-word">Nanopore sequencing</span>
        <img
          src={require("../nanopore.png")}
          alt="Nanopore"
          className="overlay-image"
        />
      </span> is an innovative technology that reads DNA molecules directly as they pass through tiny protein pores-called nanopores-in a membrane. 
        A single-stranded DNA molecule is guided through the nanopore by an electrical current, and each nucleotide disrupts the current in a distinct way. 
        These disruptions are measured and converted into the DNA sequence. 
        Nanopore sequencing can read very long strands of DNA in real time and detect chemical modifications, such as methylation, which affect gene regulation. 
        Portable devices, like Oxford Nanopore’s <span className="hover-reveal">
        <span className="hover-word">MinION</span>
        <img
          src={require("../minION.webp")}
          alt="MinION Flow Cell"
          className="overlay-image"
        />
      </span>
      , have made it possible to sequence pathogens in the field.
      </p>

      <p>
        Together, these sequencing technologies—Sanger, NGS, and nanopore—provide researchers with a versatile toolkit for understanding the genome, diagnosing disease, and advancing biotechnology. 
      </p>
      <PollQuestion questionId={7} userId={userId} />
      <CommentSection page="seq" />
    </div>
  );
}
