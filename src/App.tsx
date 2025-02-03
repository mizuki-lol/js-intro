import Counter from './components/Counter'
import ColorButton from './components/ColorButton'
import Title from './components/Title'
import UserCard from './components/UserCard'
import AgeCalc from './components/AgeCalc'
import './App.css'

function App() {
  return (
    <>
      <Title text="hello world :3" />
      <Counter />
      <Counter />
      <br/>
      <ColorButton />
      <UserCard user={{name: "karel", age:12, email: "bruh@email.com", isStudent: true}}/>
      <UserCard user={{name: "karla", age:85, email: "amogus@email.com"}}/>
      <AgeCalc />
    </>
  )
}

export default App
