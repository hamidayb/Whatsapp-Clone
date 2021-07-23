import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import './sidebarHeader.scss'

export default function Header() {
    return (
        <div className="header">
            
            <Avatar src="avatar.jpg" />

            <div className="header-right">  
                <IconButton>
                    <DonutLargeIcon />    
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton> 
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

        </div>
    )
}
