// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(state => state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1 className='bg-blue-400'>Welcome to Redux</h1>

      <div>

        <button onClick={() => dispatch(decNumber())} className='bg-blue-400'>Decrement</button>
        <span className='bg-blue-400'> {count} </span>
        <button onClick={() => dispatch(incNumber())} className='bg-blue-400'>Increment</button>


      </div>
    </div>
  )
}

export default App
