import React from 'react'
import FlashcardPage from '../components/Flashcard'
import Carousel from '../components/Carousel'

const Inicio = ({searchTerm}) => {
  //console.log(searchTerm);
  return (
    <div>
      <Carousel/>
      <FlashcardPage searchTerm={searchTerm}/>
    </div>
  )
}

export default Inicio