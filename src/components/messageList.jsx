import React from 'react'

function MessageList({messages}) {
    if(messages.autor !== "" && messages.text !== ""){
        return ( <div>
            {messages.map((item, index) => {
                const cln = "autor border border-2 text-black-50 bg-light"
                return <div className='comments border border-success p-2 mb-2 mt-3' key={index}>
                    <div className={item.autor === "Robot"? (cln + " text-end badge"):cln}>{item.autor}</div>
                    <span>{item.text}</span><br/></div>
            })}
            </div> );
    }
    return undefined
    
}

export default MessageList;