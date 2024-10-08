import React from 'react'
import GroceryHeader from '../GroceryHeader'
import GroceryComponents from '../GroceryFooter'
import Grocerytracking from './Grocerytracking'

function Grocerytrack() {
  return (
    <>
      <GroceryHeader/>
      <Grocerytracking />
      <GroceryComponents/>
    </>
  )
}

export default Grocerytrack
