//@ts-nocheck
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { jsQuizz } from "../constants";

export default function Analysis() {
  const qstns = jsQuizz.questions;
  const qnaArr = useSelector((state) => state.qna.qnaArr);

  const prompt=`You are carrer guidance for secondary students based on below questions and it's response guide a suitable career path to student with some youtube videos suggestions,blogs and readmap to achieve the career.(and let him/her know the traits and qualities which are helpfull to him for the suggested career.
  Q1) ${qstns[0].key} ans1) ${qnaArr[0]},Q2) ${qstns[1].key} ans2) ${qnaArr[1]},Q3) ${qstns[2].key} ans3) ${qnaArr[2]},Q4) ${qstns[3].key} ans1) ${qnaArr[3]},Q5) ${qstns[4].key} ans5) ${qnaArr[4]},Q6) ${qstns[5].key} ans6) ${qnaArr[5]},Q7) ${qstns[6].key} ans7) ${qnaArr[6]},Q8) ${qstns[7].key} ans8) ${qnaArr[7]},Q9) ${qstns[8].key} ans9) ${qnaArr[8]}`

  

  return (
    <>
      This is Analysis page.
      <h2>Q&A Data:</h2>
      <ul>
        {qnaArr.map((item, index) => (
          <div>
            <li key={index+200}>{qstns[index].key}</li>
            <li key={index}>{item}</li>
          </div>
        ))}

        <div>{prompt}</div>
      </ul>
    </>
  );
}
