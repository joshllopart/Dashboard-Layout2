import React from 'react'
import './style.css'

import MessageForm from '../MessageForm'
import MessageList from '../MessageList'

export default function MainContent() {
  return (
    <div className='main-message-content'>
      <MessageForm />
      <MessageList />
    </div>
  )
}
