import { Link, useLocation, useNavigate, Navigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const EditQuestion = (props) => {
  const location = useLocation()
  const formElement = useRef()
  const [validForm, setValidForm] = useState(true)
  const [formData, setFormData] = useState(location.state.question)
  const navigate = useNavigate()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]:evt.target.value})
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateQuestion(formData)
  }

  return ( 
    <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name-input" className="form-label">Edit your question here:</label>
      </div>
      <div className="form-control">
        <textarea type="text" name="question" value={formData.question} onChange={handleChange} id="question-input" placeholder="Enter question" cols="30" rows="10" required></textarea>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-fluid"
            disabled={!validForm}>Edit Question</button>
				<Link to="/unit-one" className="btn btn-danger btn-fluid">Cancel</Link>
      </div>
    </form>
  )
}

export default EditQuestion;