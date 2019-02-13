import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import './style.css'

import MessageCard from '../MessageCard'

export default function MessageList() {
  return (
    <div>
    <Card className="Card">
      <CardHeader className="Active-Messages" tag="h3">Active Messages</CardHeader>
      <CardBody className="CardBody">
        <div className='message-list'>
          <MessageCard /> 
        </div>

      </CardBody>
    
    </Card>
    </div>
  )
}
