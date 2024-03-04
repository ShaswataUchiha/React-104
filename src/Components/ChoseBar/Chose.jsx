import React from 'react'

const Chose = (props) => {

  const colors = ['#c8c6ba', '#8c8b82', '#bbbdc8', '#82898c', '#8c8288']

  return (
    <div className='w-full h-[7rem] flex justify-center items-center'>
      <div className='fixed z-10 text-white bg-zinc-600/80 p-4 rounded-xl flex flex-col md:flex-row md:gap-8 items-center justify-between '>
        <p className='' > Add Notes </p>
        <div>
          <ul className='flex justify-center gap-3'>
            {
              colors.map( (item, index) => (
                <li
                  className='p-3 w-4 rounded-full' key={index} style={ {backgroundColor : item}}
                  onClick={ ()=> props.addNote(item)}
                />
              ))
            }
          </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Chose