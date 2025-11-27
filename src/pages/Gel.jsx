import CommentSection from "../components/CommentSection";
import PollQuestion from "../components/PollQuestion.tsx";

export default function Gel({ userId }) {
  return (
    <div className="page-container">
      <h1>Gel Electrophoresis</h1>

      <p>
        Gel electrophoresis is a technique used to separate DNA fragments based on size. 
        In this process, molecules are loaded into a gel matrix and an electric current is applied.
        Since DNA is negative charged due to its phosphate groups, the fragments will travel from the negative end to the positive end of the gel. 
        Smaller molecules move through the gel more quickly than larger ones, creating distinct bands that can be visualized and analyzed. 
        This allows researchers to examine the composition and of their samples.
      </p>

      <p>
        Gel electrophoresis is commonly used in combination with other molecular biology techniques, such as PCR, cloning, and restriction digestions to verify that experiments have produced the desired DNA fragments. 
        For example, after amplifying a specific DNA segment using PCR, scientists run the product on a gel to confirm that it matches the expected size. 
      </p>

      <p>
        Beyond the laboratory, gel electrophoresis has practical applications in forensics, medicine, and genetic research. 
        Forensic scientists use it to compare DNA samples from crime scenes, while medical laboratories use it to detect genetic mutations or monitor molecular markers for disease. 
        Despite being a decades-old technique, gel electrophoresis remains a reliable and essential tool in molecular biology, providing a clear and visual way to analyze biological molecules.
      </p>
      <PollQuestion questionId={6} userId={userId} />
      <CommentSection page="gel" />
    </div>
  );
}
