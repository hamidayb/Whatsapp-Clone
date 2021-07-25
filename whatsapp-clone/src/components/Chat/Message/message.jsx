import React, {useState} from 'react'
import axios from '../../../axios'
import './message.scss' 

export default function Message({ message }) {

    return (
        <div className="message">
            {message.map(({email, name, message, timestamp, received}) => (
            <p className={`msg + ${received && 'sender'}`}>
                <p className="user">
                    <span className="username">{email}</span>
                    <span className="name">{name.split(' ')[0]}</span>
                </p>
                <p className="msg-body">
                    <span className="msg-text">{message}</span>
                    <span className="timestamp">{timestamp}</span>
                </p>
            </p>
            ))}
        </div>
        
    )
}
