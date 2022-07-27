import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import UnitOne from './pages/UnitOne/UnitOne'
import UnitTwo from './pages/UnitTwo/UnitTwo'
import UnitThree from './pages/UnitThree/UnitThree'
import UnitFour from './pages/UnitFour/UnitFour'
import * as questionService from './services/questionService'
import AddQuestion from './components/AddQuestion/AddQuestion'
import QuestionList from './components/QuestionList/QuestionList'
import EditQuestion from './pages/EditQuestion/EditQuestion'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllQuestions = async () => {
      const questionData = await questionService.getAll()
      setQuestions(questionData)
    }
    fetchAllQuestions()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddQuestion = async (newQuestionData) => {
    const newQuestion = await questionService.create(newQuestionData)
    setQuestions([...questions, newQuestion])
  }

  const handleDeleteQuestion = async id => {
    const deletedQuestion = await questionService.deleteOne(id)
    setQuestions(questions.filter(question => 
      question._id !== deletedQuestion._id 
    ))
  }

  const handleUpdateQuestion = async (updatedQuestionData) => {
    const updatedQuestion = await questionService.update(updatedQuestionData)
    const newQuestionsArray = questions.map(question => 
      question._id === updatedQuestion._id ? updatedQuestion : question
    )
    setQuestions(newQuestionsArray)
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/unit-one"
          element={<UnitOne 
            handleAddQuestion={handleAddQuestion}
            questions={questions}
            handleDeleteQuestion={handleDeleteQuestion}
            user={user}
            handleUpdateQuestion={handleUpdateQuestion}
          />}
        />
        <Route 
          path="/unit-one/edit"
          element={<EditQuestion 
            handleUpdateQuestion={handleUpdateQuestion}
          />}
        />
        <Route
          path="/unit-two"
          element={<UnitTwo 
            handleAddQuestion={handleAddQuestion}
          />}
        />
        <Route
          path="/unit-three"
          element={<UnitThree 
            handleAddQuestion={handleAddQuestion}
          />}
        />
        <Route
          path="/unit-four"
          element={<UnitFour 
            handleAddQuestion={handleAddQuestion}
          />}
        />
      </Routes>
    </>
  )
}

export default App
