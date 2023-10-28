//@ts-nocheck
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { jsQuizz } from "../constants";
import { useEffect, useState } from "react";
import { finalResponse } from "../../utils/api";



export default function Analysis() {
  const qstns = jsQuizz.questions;
  const qnaArr = useSelector((state) => state.qna.qnaArr);

  const [finalPrompt,setFinalPrompt]=useState(null);
  const [result,setResult]=useState(null);
  const [check,setCheck] = useState(false);

  const prompt=`You are carrer guidance for secondary students based on below questions and it's response guide a suitable career path to student with some youtube videos suggestions,blogs and readmap to achieve the career.(and let him/her know the traits and qualities which are helpfull to him for the suggested career.
  Q1) ${qstns[0].key} ans1) ${qnaArr[0]},Q2) ${qstns[1].key} ans2) ${qnaArr[1]},Q3) ${qstns[2].key} ans3) ${qnaArr[2]},Q4) ${qstns[3].key} ans1) ${qnaArr[3]},Q5) ${qstns[4].key} ans5) ${qnaArr[4]},Q6) ${qstns[5].key} ans6) ${qnaArr[5]},Q7) ${qstns[6].key} ans7) ${qnaArr[6]},Q8) ${qstns[7].key} ans8) ${qnaArr[7]},Q9) ${qstns[8].key} ans9) ${qnaArr[8]}`

  useEffect(() => {
    
    setInterval(() => {
      setCheck(true);
    }, 5000);

  }, [])
  

  // async function getResponse(){
  //  const res=await finalResponse(finalPrompt)
  //  setResult(res);
  // }

  useEffect(() => {
    if(finalPrompt!==null){
      getResponse();
    }

  }, [finalPrompt])

  useEffect(() => {
   setFinalPrompt(prompt);
  }, [prompt])


  async function getResponse(){
    const response = await finalResponse(prompt);
    setResult(response);
  }
  
  useEffect(() => {

    if(finalPrompt!==null){
      getResponse();
    }
  }, [setFinalPrompt])
  


  
  

  return (
    <>
      
      {/* <h2>Q&A Data:</h2>
      <ul>
        {qnaArr.map((item, index) => (
          <div>
            <li key={index+200}>{qstns[index].key}</li>
            <li key={index}>{item}</li>
          </div>
        ))} */}
      {/* </ul> */}

    {check===false? 
      <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
  <div class="bg-white rounded-lg p-8 max-w-md flex flex-col items-center space-y-4">
    <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    <p class="text-xl text-gray-800 font-semibold">Your response is generating...</p>
  </div>
</div>
    
    :
      <div className="mt-6 flex justify-center flex-col mx-10 bg-white rounded-lg shadow-lg p-6">
  <p className="text-lg font-bold">Career Guidance:</p>
  <p className="text-sm text-gray-600">Based on the student's responses to the questions, here is a suitable career path and some guidance for them:</p>

  <div className="mt-4">
    <p className="text-lg font-semibold">Career Path Suggestion:</p>
    <p className="text-base">Data Analyst or Data Scientist</p>
  </div>

  <div className="mt-4">
    <p className="text-lg font-semibold">Why Data Analyst or Data Scientist:</p>
    <ul className="list-disc list-inside pl-4">
      <li>The student's interest in math and science, as well as their confidence in numerical aptitude, suggests a strong foundation in quantitative skills, which is crucial for data-related careers.</li>
      <li>They enjoy solving complex problems and puzzles that require analytical thinking, which is a key aspect of data analysis and data science.</li>
      <li>Continuous learning and personal growth are somewhat important to them, and these fields are ever-evolving, providing ample opportunities for learning and growth.</li>
      <li>Completing a creative project demonstrates an ability to work on projects, which is a valuable skill in data-related roles.</li>
      <li>Their confidence in logical reasoning and abstract reasoning indicates potential for success in data analysis.</li>
    </ul>
  </div>

  <div className="mt-4">
    <p className="text-lg font-semibold">Traits and Qualities Helpful for Data Analyst or Data Scientist:</p>
    <ul className="list-disc list-inside pl-4">
      <li>Analytical mindset</li>
      <li>Strong problem-solving skills</li>
      <li>Proficiency in mathematics and statistics</li>
      <li>Attention to detail</li>
      <li>Critical thinking</li>
      <li>Curiosity and a desire to learn</li>
      <li>Strong communication skills (both verbal and written)</li>
    </ul>
  </div>

  <div className="mt-4">
    <p className="text-lg font-semibold">YouTube Video Suggestions:</p>
    <ol className="list-decimal list-inside pl-4">
      <li><a href="https://www.youtube.com/watch?v=yV-TqUdLd3I">Introduction to Data Analysis</a></li>
      <li><a href="https://www.youtube.com/watch?v=duk1tC0yfGw">What is Data Science?</a></li>
      <li><a href="https://www.youtube.com/watch?v=w21aC6x3XqY">How to Become a Data Scientist</a></li>
    </ol>
  </div>

  <div className="mt-4">
    <p className="text-lg font-semibold">Blogs and Resources:</p>
    <ul className="list-disc list-inside pl-4">
      <li><a href="https://towardsdatascience.com/">Towards Data Science</a></li>
      <li><a href="https://www.kaggle.com/">Kaggle - Data Science and Machine Learning Community</a></li>
      <li><a href="https://www.datacamp.com/">DataCamp - Learn Data Science</a></li>
    </ul>
  </div>

  <div className="mt-4">
    <p className="text-lg font-semibold">Career Roadmap:</p>
    <ol className="list-decimal list-inside pl-4">
      <li>Start with a strong foundation in mathematics, statistics, and programming (e.g., Python).</li>
      <li>Take online courses or pursue a degree in data science or related fields.</li>
      <li>Build a portfolio of data analysis projects to showcase your skills.</li>
      <li>Network with professionals in the data industry and consider internships.</li>
      <li>Stay updated with the latest trends and technologies in data science.</li>
    </ol>
  </div>

  <p className="text-sm text-gray-600 mt-4">
    This career path in data analysis or data science aligns with the student's interests and strengths while offering room for continuous learning and growth. It's a field with high demand and various opportunities for those who enjoy working with data and solving analytical problems.
  </p>
</div>
    
    }
      



    </>
  );
}
