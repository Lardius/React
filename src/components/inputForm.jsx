import React from 'react';
import { useState } from 'react';

function InputForm({add}) {
    const [values, setValue] = useState({autor: "", text: ""})

    return ( <>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Укажите Ваше Имя:</label>
    <input type="text" className="form-control" id="name" placeholder="Имя" value={values.autor}
       onChange={(e) => {setValue(prevstate => ({...prevstate, autor: e.target.value}))}}></input>
  </div>
  <div className="mb-3">
    <label htmlFor="comment" className="form-label">Введите комментарий:</label>
    <input type="text" className="form-control" id="comment" placeholder="комментарий" value={values.text}
      onChange={(e) => {setValue(prevstate => ({...prevstate, text: e.target.value}))}}></input>
  </div>
        <button className='btn btn-primary' type='button' 
        onClick={()=>{
            if(values.autor !== "" && values.text !== ""){
                add(values); setValue({autor: "", text: ""})
            }
            }}>Добавить комментарий</button></>)
}

export default InputForm;

