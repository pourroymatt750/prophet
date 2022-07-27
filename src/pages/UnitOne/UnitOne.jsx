import AddQuestion from "../../components/AddQuestion/AddQuestion"
import QuestionList from "../../components/QuestionList/QuestionList"
import styles from './UnitOne.module.css'

const UnitOne = (props) => {
  return ( 
    <>
      <h1>Most Common Unit One Questions</h1>
      <div className={styles.container}>
        <AddQuestion 
          handleAddQuestion={props.handleAddQuestion}
        />
      </div>
      <QuestionList 
        questions={props.questions}
        handleDeleteQuestion={props.handleDeleteQuestion}
        user={props.user}
        handleUpdateQuestion={props.handleUpdateQuestion}
      />
    </>
  )
}

export default UnitOne;