import { useState } from 'react';
import DataFetchingComponent from './components/DataFetchingComponent.jsx';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';

function App() {
  const [QUESTIONS, setQUESTIONS] = useState([])
  // const QUESTIONS=[
  //   {
  //     "id": "q1",
  //     "text": "What is the capital city of fasdfas?",
  //     "answers": ["sdfg", "sdf", "sdfg", "sdfg"]
  //   },
  //   {
  //     "id": "q2",
  //     "text": "Who wrote the play 'Romeo and Juliet'?",
  //     "answers": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"]
  //   },
  //   {
  //     "id": "q3",
  //     "text": "Which planet is known as the 'Red Planet'?",
  //     "answers": ["Mars", "Jupiter", "Venus", "Saturn"]
  //   },
  //   {
  //     "id": "q4",
  //     "text": "What is the largest ocean on Earth?",
  //     "answers": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
  //   },
  //   {
  //     "id": "q5",
  //     "text": "Who painted the famous work 'The Starry Night'?",
  //     "answers": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"]
  //   },
  //   {
  //     "id": "q6",
  //     "text": "What is the capital city of Japan?",
  //     "answers": ["Tokyo", "Beijing", "Seoul", "Bangkok"]
  //   },
  //   {
  //     "id": "q7",
  //     "text": "Who discovered penicillin?",
  //     "answers": ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"]
  //   },
  //   {
  //     "id": "q8",
  //     "text": "What is the largest organ in the human body?",
  //     "answers": ["Skin", "Heart", "Liver", "Lungs"]
  //   },
  //   {
  //     "id": "q9",
  //     "text": "Who wrote the novel '1984'?",
  //     "answers": ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "J.R.R. Tolkien"]
  //   },
  //   {
  //     "id": "q10",
  //     "text": "Which famous scientist developed the theory of relativity?",
  //     "answers": ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Niels Bohr"]
  //   }
  // ]
  const receiveMessageFromChild = (messageFromChild) => {
    setQUESTIONS(messageFromChild);
  };
  return (
    <>
      <Header />
      <main>
        <Quiz  QUESTIONS={QUESTIONS}/>
      </main>
      <p>Questions all about:</p>
      <DataFetchingComponent
      onMessageSend={receiveMessageFromChild}
      title={"Iran"}
      url={'https://quiz-6fcdd-default-rtdb.firebaseio.com/.json'}/>
      <DataFetchingComponent
      onMessageSend={receiveMessageFromChild}
      title={"General Knodlege"}
      url={'https://questions-about-general-default-rtdb.firebaseio.com/.json'}/>
      <DataFetchingComponent
      onMessageSend={receiveMessageFromChild}
      title={"Boys"}
      url={'https://girls-da-default-rtdb.firebaseio.com/.json'}/>
      <DataFetchingComponent
      onMessageSend={receiveMessageFromChild}
      title={"Girls"}
      url={'https://girls-4real-default-rtdb.firebaseio.com/.json'}/>
    </>
  );
}

export default App;
