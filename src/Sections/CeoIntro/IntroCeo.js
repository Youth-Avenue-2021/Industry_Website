import React from 'react'
import Premjibhai2 from '../../Assets/PremjiBhai.png'
import Content from './Components/Content';
import ImageBox from './Components/ImageBox';
const IntroCeo = () => {
  return (
    <div className='mx-auto'>
      <div className="flex-col items-center justify-center hidden md:flex">
         <ImageBox image={Premjibhai2}/>  
         <Content />         
      </div>
    </div>
  )
}

export default IntroCeo;