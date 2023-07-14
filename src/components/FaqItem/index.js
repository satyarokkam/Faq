import './index.css'

const FaqItem = props => {
  const {eachFaqItem, onButtonToggle, isActive} = props
  const {questionText, answerText} = eachFaqItem
  const onButtonClick = () => {
    onButtonToggle(isActive)
  }
  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altName = isActive ? 'plus' : 'minus'

  return (
    <li className="faqItem-container">
      <div className="question-container">
        <h3 className="question">{questionText}</h3>
        <button type="button" onClick={onButtonClick}>
          <img src={imgUrl} alt={altName} />
        </button>
      </div>
      {isActive && (
        <div className="answer-container">
          <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}
export default FaqItem
