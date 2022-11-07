import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';


function InputForm({add}) {
    const [values, setValue] = useState({autor: "", text: ""})


    return ( <>
                <TextField
                    
                    margin='dense'
                    name='name'
                    id='name'
                    label="Укажите Ваше Имя:"
                    type="text"
                    fullWidth
                    value={values.autor}
                    onChange={(e) => {setValue(prevstate => ({...prevstate, autor: e.target.value}))}}
                ></TextField>
                <TextField
                    margin='dense'
                    id='comment'
                    label="Введите комментарий:"
                    type="text"
                    fullWidth
                    value={values.text}
                    onChange={(e) => {setValue(prevstate => ({...prevstate, text: e.target.value}))}}
                ></TextField>

                <Button 
                onClick={()=>{
                    if(values.autor !== "" && values.text !== ""){
                        add(values); setValue({autor: "", text: ""})
                        
                    }
                    }}
                    variant="contained"
                >Добавить комментарий</Button>
                        </>)
}

export default InputForm;

