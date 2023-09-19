import React from 'react'
import Quiz from './Quiz'
import { jsQuizz } from "../constants";
import Sidebar from './Sidebar';
const Body = () => {
  return (
    <div className='flex'>
      {/* <Sidebar/> */}
      <Quiz questions={jsQuizz.questions} />
    </div>
  )
}

export default Body
