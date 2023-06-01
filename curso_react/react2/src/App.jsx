import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bibiLogo from './assets/bibi soft.png'
import viteLogo from '/vite.svg'
import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx/'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <TwitterFollowCard >bibi soft</TwitterFollowCard>
      <TwitterFollowCard ></TwitterFollowCard>
      <TwitterFollowCard following={true}>bibi soft</TwitterFollowCard>


    </>
  )
}

export default App
