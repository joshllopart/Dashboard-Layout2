import React from 'react'
import { Card, CardTitle } from 'reactstrap'
import './style.css'

export default function RecipientCard() {
  return (
    <div className="RecipientCard">
      <Card>
        <CardTitle>
          John Doe
        </CardTitle>
      </Card>
    </div>

    // <div className='recipient-card'>
    //   <h4>recipient name</h4>
    // </div>
  )
}
