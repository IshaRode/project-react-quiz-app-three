import { NavLink, useLocation } from 'react-router-dom';

function ResultComponent() {
  const location = useLocation();
  const totalScore = location.state.score;
  const youAttempted = location.state.attempted;
  const attemptedNumber = youAttempted.length;

  return(
    <div className='all'>
<div className='total'>
  <div className='res'>
      <h1>Result</h1>
  </div>
  <div className='practice'>
      <h2 className='need'>{totalScore < 6
                ? 'You need more practice!'
                : totalScore >= 6 && totalScore < 11
                ? 'Good job! You can do better!'
                : 'Great job! Keep it up!'}</h2>
      <h1 className='twenty'>Your score is {Math.round((totalScore / 15) * 100)}%</h1>
      <div>
          <div className='Ques'>
             <div> <p className='para'>Total number of questions</p> </div>
             <div><p className='para'>15</p></div>
          </div>
          <div className='Ques'>
             <div> <p className='para'>Number of attempted questions</p> </div>
             <div><p className='para'>{attemptedNumber}</p></div>
          </div>
          <div className='Ques'>
             <div> <p className='para'>Number of correct answers</p> </div>
             <div><p className='para'>{totalScore}</p></div>
          </div>
          <div className='Ques'>
             <div> <p className='para'>Number of wrong answers</p> </div>
             <div><p className='para'>{attemptedNumber - totalScore}</p></div>
          </div>
      </div>
      
  </div>
  <div className='last-buttons'>
  <NavLink to='/Quiz'>
          <button className='play-again'>Play Again</button>
  </NavLink >
  <NavLink to='/'>
          <button className='back-to-home'>Back to home</button>
          </NavLink>
      </div>
</div>
</div> 
  )
}

export default ResultComponent;
