import React from 'react'

function Card(props) {
    console.log(props);
    
    return (
        <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-cyan-900 ">
        <img
          src={props.imgsrc}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
         
          <h2 className="text-xl font-semibold tracking-wide caret-amber-50">{props.title}</h2>
        </div>
        <p className="text-gray-300">
          {props.content}
        </p>
      </div>
  
        </>
    )
}

export default Card
