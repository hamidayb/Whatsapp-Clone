import { Avatar, IconButton } from '@material-ui/core'
import { MoreVert, Search } from '@material-ui/icons'
import React from 'react'
import './chatHeader.scss'

export default function Header() {
    return (
        <div className="chatHeader">
            <Avatar />
            <div className="chatHeader__desc">
                <h2>Richi Tivals</h2>
                <p>Last seen 09:42pm</p>
            </div>
            <div className="chatHeader__icons">
                <IconButton>
                    <Search />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    )
}
