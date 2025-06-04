"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Clock, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

// Quiz data
const quizData = {
  title: "Bias Awareness Quiz",
  estimatedTime: "2 min",
  questions: [
    {
      id: 1,
      question: "Which of the following is an example of confirmation bias?",
      options: [
        "Giving preference to candidates from prestigious universities",
        "Only reading news sources that align with your existing beliefs",
        "Assuming someone's technical ability based on their gender",
        "Making decisions based on the most recent information you received",
      ],
      correctAnswer: 1,
      explanation:
        "Confirmation bias is the tendency to search for, interpret, and recall information in a way that confirms one's preexisting beliefs. Reading only news sources that align with your existing beliefs is a classic example of this bias.",
    },
    {
      id: 2,
      question: "What is algorithmic bias?",
      options: [
        "When AI systems make more errors on certain groups of people",
        "When programmers intentionally code prejudice into algorithms",
        "When users misinterpret AI outputs",
        "When algorithms run slower on certain types of data",
      ],
      correctAnswer: 0,
      explanation:
        "Algorithmic bias occurs when an AI system produces results that systematically disadvantage certain groups, often reflecting societal biases in training data rather than intentional prejudice.",
    },
    {
      id: 3,
      question: "Which approach helps mitigate bias in AI systems?",
      options: [
        "Using only data from the last year",
        "Removing all demographic information from datasets",
        "Testing system performance across different demographic groups",
        "Limiting the size of training datasets",
      ],
      correctAnswer: 2,
      explanation:
        "Testing system performance across different demographic groups (disaggregated evaluation) helps identify if an AI system performs worse for certain populations, allowing developers to address these disparities.",
    },
  ],
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quizData.questions.length).fill(-1))
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedCurrentQuestion = localStorage.getItem("quizCurrentQuestion")
    const savedSelectedAnswers = localStorage.getItem("quizSelectedAnswers")
    const savedQuizCompleted = localStorage.getItem("quizCompleted")

    if (savedCurrentQuestion) {
      setCurrentQuestion(Number.parseInt(savedCurrentQuestion))
    }

    if (savedSelectedAnswers) {
      setSelectedAnswers(JSON.parse(savedSelectedAnswers))
    }

    if (savedQuizCompleted === "true") {
      setQuizCompleted(true)
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("quizCurrentQuestion", currentQuestion.toString())
  }, [currentQuestion])

  useEffect(() => {
    localStorage.setItem("quizSelectedAnswers", JSON.stringify(selectedAnswers))
  }, [selectedAnswers])

  useEffect(() => {
    localStorage.setItem("quizCompleted", quizCompleted.toString())
  }, [quizCompleted])

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = Number.parseInt(value)
    setSelectedAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(quizData.questions.length).fill(-1))
    setQuizCompleted(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizData.questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-6">
      <Header />

      <div className="mt-8">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Terug naar dashboard
            </Link>
          </Button>
        </div>

        <Card className="mx-auto max-w-3xl transition-opacity duration-200">
          <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
            <div>
              <h2 className="text-xl font-medium">{quizData.title}</h2>
              {!quizCompleted && (
                <p className="text-sm text-muted-foreground">
                  Vraag {currentQuestion + 1} van {quizData.questions.length}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Ongeveer {quizData.estimatedTime}</span>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            {!quizCompleted ? (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">{quizData.questions[currentQuestion].question}</h3>

                <RadioGroup
                  value={
                    selectedAnswers[currentQuestion] !== -1 ? selectedAnswers[currentQuestion].toString() : undefined
                  }
                  onValueChange={handleAnswerSelect}
                >
                  {quizData.questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-start space-x-2 rounded-md border p-3 hover:bg-muted/50">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="rounded-md bg-muted p-4 text-center">
                  <h3 className="text-lg font-medium">Quiz voltooid!</h3>
                  <p className="mt-1 text-muted-foreground">
                    Je scoorde {calculateScore()} van de {quizData.questions.length}
                  </p>
                  <p className="mt-4 text-sm">
                    Je maakt goede vooruitgang met bias awareness. Blijf leren om je ethics score te verbeteren!
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Jouw antwoorden</h3>

                  {quizData.questions.map((question, qIndex) => {
                    const isCorrect = selectedAnswers[qIndex] === question.correctAnswer

                    return (
                      <div key={qIndex} className="space-y-3 rounded-md border p-4">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium">{question.question}</h4>
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                          )}
                        </div>

                        <div className="space-y-1 text-sm">
                          <p className="font-medium">Jouw antwoord:</p>
                          <p className={isCorrect ? "text-green-500" : "text-red-500"}>
                            {question.options[selectedAnswers[qIndex]]}
                          </p>

                          {!isCorrect && (
                            <>
                              <p className="mt-2 font-medium">Juiste antwoord:</p>
                              <p className="text-green-500">{question.options[question.correctAnswer]}</p>
                            </>
                          )}

                          <div className="mt-3 rounded-md bg-muted p-3">
                            <p className="text-sm">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-4">
            {!quizCompleted ? (
              <>
                <Button variant="outline" asChild>
                  <Link href="/">Quiz verlaten</Link>
                </Button>
                <Button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestion] === -1}>
                  {currentQuestion < quizData.questions.length - 1 ? "Volgende vraag" : "Quiz voltooien"}
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link href="/">Quiz verlaten</Link>
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/article">Lees meer</Link>
                  </Button>
                  <Button onClick={handleRetakeQuiz}>Quiz opnieuw doen</Button>
                </div>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
