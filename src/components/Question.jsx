import { useState } from "react"

export default function Question({question, answer, setCount, setQuestionNumber}) {

    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function handleClick(answer) {
        setSelectedAnswer(answer)
    }

    function handleSubmit() {
        setSubmitted(true)
        if (answer == selectedAnswer) {
            setCount(prev=>prev+1)
        }
        setTimeout(() => {
            setQuestionNumber(prev=>prev+1)
            setSelectedAnswer("")
            setSubmitted(false)
        }, 1200)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl text-neutral-100 font-medium mt-4">{question.question}</h2>
            <div className="grid grid-cols-2 mt-5 gap-5 cursor-pointer">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = submitted && option === answer;
                    const isWrong = submitted && isSelected && !isCorrect;
                    return (
                        <p key={index} onClick={()=>handleClick(option)} className={`text-lg bg-neutral-100 border-2 rounded-xl px-6 py-4 ${isSelected?"border-green-500":""} ${isCorrect?"bg-green-500 border-green-500":""} ${isWrong?"bg-red-600 border-red-600":""}`}>{option}</p>
                    );
                })}
            </div>
            <button onClick={handleSubmit} className="w-36 border border-gray-300 rounded-3xl text-lg text-neutral-100 mt-7 py-1 hover:bg-green-700 hover:border-green-700 transition-all">Submit</button>
        </div>
    )
}