import { useState } from 'react'
import { calcAge } from '../utils'

export default function AgeCalc() {
  // Nějaké reaktivní proměnné? Možná věk? možná rok narození?
  const thisYear = new Date().getFullYear()
  const [age, setAge]= useState<number | null>(thisYear)
  const [birthYear, setBirthYear] = useState(null)

  const handleChange = (e: any) => {
    const value = e.target.value
    setBirthYear(value)
    if (value && !isNaN(value)) {
      setAge(calcAge(parseInt(value, 10)))
    } else {
      setAge(null)
    }
  }

  return (
    <div>
      <label>
        Zadej rok narození:
        <input type='number' value={birthYear ?? thisYear} onChange={handleChange} />
      </label>
      {age !== null && <p>Tvůj věk je: {age}</p>}
    </div>
  )
}
