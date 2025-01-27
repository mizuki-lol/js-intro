import Counter from './Counter'
import ColorButton from './ColorButton'
import Title from './Title'
import UserCard from './UserCard'
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
    </>
  )
}

export default App
