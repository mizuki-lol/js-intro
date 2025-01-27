import { useState } from 'react'

export default function ColorButton() {
  const [color, setColor] = useState("#202020")
  return (
      <button
        style={{backgroundColor: color}}
        onClick={() => setColor(getRandomColor())} />
  )
}

// taken from here: https://stackoverflow.com/a/1484514
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
