import styles from './QuestionList.module.css'
import QuestionCard from '../QuestionCard/QuestionCard'

const QuestionList = (props) => {
  return ( 
    <>
      <div className={styles.container}>
        {props.questions.map(question => 
          <QuestionCard 
            key={question._id}
            question={question}
            handleDeleteQuestion={props.handleDeleteQuestion}
            user={props.user}
            handleUpdateQuestion={props.handleUpdateQuestion}
          />
        )}
      </div>
    </>
  )
}

export default QuestionList;