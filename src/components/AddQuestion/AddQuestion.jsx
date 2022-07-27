import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import styles from './AddQuestion.module.css'

const AddQuestion = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]:evt.target.value})
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddQuestion(formData)
  }
  
  return ( 
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
      <div id="question-label">
        <label for="question">Ask your question here:</label>
      </div>
      <div id="question-textarea">
        <textarea type="text" name="question" value={formData.question} onChange={handleChange} id="question-input" placeholder="Enter question" cols="50" rows="15" required></textarea>
      </div>
      <div id="submit-btn">
        <button type="submit" class="btn btn-success">Post</button>
      </div>
    </form>
  )
}

export default AddQuestion;