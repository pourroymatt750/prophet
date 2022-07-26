import AddQuestion from "../../components/AddQuestion/AddQuestion"

const UnitOne = (props) => {
  return ( 
    <>
      <h1>Most Common Unit One Questions</h1>
      <AddQuestion 
        handleAddQuestion={props.handleAddQuestion}
      />
    </>
  )
}

export default UnitOne;