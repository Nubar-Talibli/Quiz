import { useEffect, useState } from "react"
import Question from "./components/Question"
import data from "./components/questions.json"
const questions = data.questions

function App() {

  const [selectedQuestion, setSelectedQuestion] = useState(questions)
  const [answer, setAnswer] = useState(questions[0].answer)
  const [count, setCount] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(()=> {
    if (questionNumber < questions.length) {
      setAnswer(questions[questionNumber].answer)
    }
  }, [questionNumber])

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-customPurple">

      <div className="absolute top-44 right-64 flex flex-col items-center justify-center text-3xl text-neutral-100">
        <p>Your Result :</p>
        <p className="border rounded-md mt-5 py-3 px-4">{count}</p>
      </div>

      <header>
        <h1 className="text-3xl font-semibold text-neutral-100">Question {questionNumber+1}</h1>
      </header>

      <main>
        <Question question={selectedQuestion[questionNumber]} answer={answer} setCount={setCount} setQuestionNumber={setQuestionNumber}></Question>
      </main>

    </section>
  )
}

export default App
