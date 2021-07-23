import React from 'react'
import './message.scss'

export default function Message({isSender}) {
    return (
        
        <p className={`msg + ${isSender && 'sender'}`}>
            <p className="user">
                <span className="username">hamidayb123@gmail.com</span>
                <span className="name">Hamid</span>
            </p>
            <p className="msg-body">
                <span className="msg-text">Hello dear!</span>
                <span className="timestamp">{new Date().toUTCString()}</span>
            </p>
        </p>
    )
}
