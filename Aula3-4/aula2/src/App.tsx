
import './App.css'
import Profilecard from './components/profilecard'
import Card from './components/card'

const style = {
  width: "100vw", 
  height: "100vh", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center"
}

function App() {


  return (
    <div style={style}>
      <Profilecard/>
      <Card title="Card Title" description="Card Description" button="Click Me" />
    </div>
  )
}

export default App
