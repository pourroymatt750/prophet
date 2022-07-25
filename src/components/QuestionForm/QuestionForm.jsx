const QuestionForm = () => {
  return ( 
    <form>
      <div id="question-label">
        <label for="question">Ask your question here:</label>
      </div>
      <div id="question-textarea">
        <textarea type="text" name="question" id="question-input" cols="30" rows="10"></textarea>
      </div>
      <div id="submit-btn">
        <button type="button">Post</button>
      </div>
    </form>
  )
}

export default QuestionForm;