import React from 'react'
import './style.css'

import MessageForm from '../MessageForm'
import MessageList from '../MessageList'

export default function MainContent() {
  return (
    <div className='main-message-content'>
    <h1 className="welcome">Welcome, John!</h1>
      <MessageForm />
      <br></br>
      <br></br>
      <MessageList />
    </div>
  )
}
