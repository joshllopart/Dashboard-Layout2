import React from 'react'
import './style.css'

import AddRecipientbutton from '../AddRecipientButton'
import RecipientList from '../RecipientList'

export default function Sidebar() {
  return (
    <div class="Sidebar">
      <AddRecipientbutton />
      <RecipientList />
    </div>

  )
}
