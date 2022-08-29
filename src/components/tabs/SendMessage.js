import React from 'react';
import InputBox from '../elements/InputBox';
import CustomBtn from '../elements/CustomBtn';
const SendMessage = () => {
  return (
    <div className='flex items-start flex-col py-14'>
      <div className='flex flex-col gap-4 px-2 items-start w-full md:w-2/4'>

        <InputBox
          value='Name'
          placeValue='Pathak f.e' />

        <InputBox
          value='Email'
          placeValue='pathak@email.com' />

        <InputBox
          value='Message'
          placeValue='Hello Pathak' />

        <div>
          <CustomBtn 
          Children='Send Me'
          />
        </div>  

      </div>
    </div>
  )
}

export default SendMessage