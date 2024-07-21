import quizCompleteImg from '../assets/quiz-complete.png';
// import QUESTIONS from '../questions.js';
import { useState } from 'react';
export default function Summary({ userAnswers, QUESTIONS }) {
  const [formData, setFormData] = useState({
    name: '',
    skippedAnswersShare: '',
    correctAnswersShare: '',
    wrongAnswersShare: ''
  });
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  const handleSaveData = async () => {
    const url = ' https://saved-data-ab3c6-default-rtdb.firebaseio.com/.json'; 
   

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add any other headers as needed
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      const responseData = await response.json();
      console.log('Data saved successfully:', responseData);
      // Optionally, handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error saving data:', error.message);
      // Optionally, handle error (e.g., show an error message)
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      skippedAnswersShare,
      correctAnswersShare,
      wrongAnswersShare
    }));
  };
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div className="input">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name" />
        <button onClick={handleSaveData} >Save Data to API</button>
      </div>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
