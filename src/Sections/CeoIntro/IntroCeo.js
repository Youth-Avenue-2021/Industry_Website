import React from 'react'
import Premjibhai from '../../Assets/Premjibhai.jpeg'
import Content from './Components/Content';
import ImageBox from './Components/ImageBox';
const IntroCeo = () => {
  return (
    <div className='mx-auto'>
      <div className="flex-col items-center justify-center hidden md:flex">
         <ImageBox image={Premjibhai}/>  
         <Content />         
          </div>
    </div>
  )
}

export default IntroCeo;