import React from 'react'
import "./NewEntry.css"

const NewEntryItem = (props) => {
  return (
    <div className="New-Entry-Item">
        <p className="New-Item">{`${props.data.name}(${props.data.age}years old)`}</p>
    </div>
  )
}

export default NewEntryItem