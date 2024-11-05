import React from 'react'
import FlashcardAdmin from '../components/FlashcardAdmin'
import ViewPqrs from '../components/viewPQR'

const Admin = ({searchTerm}) => {
  return (
    <div>
      <FlashcardAdmin searchTerm={searchTerm}/>
      <ViewPqrs/>
    </div>
  )
}
export default Admin