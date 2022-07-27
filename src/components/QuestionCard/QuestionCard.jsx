import { Link } from "react-router-dom"
import EditQuestion from "../../pages/EditQuestion/EditQuestion"

function QuestionCard({question, handleDeleteQuestion, user}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">Question: {question.question}</h2>
        <p className="card-text">From: {question.owner?.name}</p>
      </div>
      {user?.profile === question.owner._id &&
        <div className="card-footer">
          <Link 
            className='btn btn-sm btn-warning'
            to='/unit-one/edit'
            state={{question}}
          >
            Edit
          </Link>
          <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeleteQuestion(question._id)}>
            Delete
          </button>
        </div>
      }
    </div>
  )
}

export default QuestionCard