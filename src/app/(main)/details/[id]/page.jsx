import React from 'react'

async function Dynamicpage ({params}) {
  const {id} = await params ;
  console.log(id)
  return (
    <div>Dynamicpage </div>
  )
}

export default Dynamicpage 