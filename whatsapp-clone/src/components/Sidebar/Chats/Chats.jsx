import React from 'react'
import { Avatar } from '@material-ui/core'
import './chats.scss'

export default function Chats({src}) {
    return (
        <div className="chats">
            <Avatar className="avatar" src={src} />
            <div className="chats-info">
                <h3 className="chats-name">Close Friend</h3>
                <p className="chats-msg">Last message to friend</p>
            </div>
        </div>
    )
}
