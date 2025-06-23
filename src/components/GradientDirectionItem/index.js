// Write your code here
const GradientDirectionItem = ({directionId, displayText, onClick}) => (
  <div>
    <button type="button" key={directionId} onClick={onClick}>
      {displayText}
    </button>
  </div>
)

export default GradientDirectionItem
