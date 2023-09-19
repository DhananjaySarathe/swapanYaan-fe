//@ts-nocheck
import Navbar from "../components/Navbar";
import {useSelector} from 'react-redux'
export default function Analysis(){
    const qnaArr = useSelector((state) => state.qna.qnaArr );
    return(
        <>
            This is Analysis page.
            <h2>Q&A Data:</h2>
      <ul>
        {qnaArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        </>
    )
}