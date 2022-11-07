import { Box, TextField } from '@mui/material';
import React from 'react'

function MessageList({messages}) {
    if(messages.autor !== "" && messages.text !== ""){
        return ( 

            <div >
            {messages.map((item, index) => {
                return  <TextField
                        style={{    display: 'flex',
                                    flexDirection: 'column',
                                    margin: "20px",
                                }}
                        margin='dense'
                        key={index}
                        label={item.autor}
                        type="text"
                        fullWidth
                        value={item.text}
                        />

            })}
            </div> );
    }

    
}

export default MessageList;