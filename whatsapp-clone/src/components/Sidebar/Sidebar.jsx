import React from 'react'
import Header from './Header/Header'
import Searchbar from './Searchbar/Searchbar'
import Chats from './Chats/Chats'
import './sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Header />
            <Searchbar />
            <Chats src="friend-1.png"/>
            <Chats src="girl.jpg" />
            <Chats src="friend-1.png" />
            <Chats src="girl.jpg" />
        </div>
    )
}
