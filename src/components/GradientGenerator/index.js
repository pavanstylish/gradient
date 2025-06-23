import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {GradientContainer} from '../GradientDirectionItem/styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
const GradientGenerator = () => {
  const [color, setColor] = useState('#8ae323')
  const [color2, setColor2] = useState('#014f7b')
  const [direction, setDirection] = useState('to right')

  return (
    <GradientContainer direction={direction} color={color} color2={color2}>
      <h1>Generate a css color Gradient</h1>
      <h2>Choose Direction</h2>
      {gradientDirectionsList.map(item => (
        <GradientDirectionItem
          key={item.directionId}
          directionId={item.directionId}
          displayText={item.displayText}
          value={item.value}
          onClick={() => setDirection(item.value)}
        />
      ))}
      <div>
        <h1>Pick your colour</h1>
        <p>Selected Color: {color}</p>
        <input
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <p>Selected Color: {color2}</p>
        <input
          type="color"
          value={color2}
          onChange={e => setColor2(e.target.value)}
        />
      </div>
    </GradientContainer>
  )
}

export default GradientGenerator
