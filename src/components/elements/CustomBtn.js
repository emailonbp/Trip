import React, { Children } from 'react'

const CustomBtn = ({onClickItem,btnPadding,Children}) => {
  return (
    <button onClick={onClickItem} className={`px-12 py-3 bg-white/10 uppercase text-white rounded-md animate-pulse font-bold ${btnPadding}`}>{Children}</button>
         
    
  );
};

export default CustomBtn; 