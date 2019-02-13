import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import './style.css'

export default function MessageCard() {
  return (
    <div className="MessageCard">
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading ClassName="Message-Card-Title">Some title</ListGroupItemHeading>
          <ListGroupItemText ClassName="Message-Card-Message">This is a random message</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
