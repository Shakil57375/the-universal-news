import React from 'react'

const Test = () => {

  const vdoLink = <><iframe width="560" height="315" src="https://www.youtube.com/embed?v=dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></>
  return (
    <div>
      {vdoLink}
    </div>
  )
}

export default Test