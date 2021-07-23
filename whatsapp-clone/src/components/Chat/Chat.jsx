import React from 'react'
import Header from './ChatHeader/ChatHeader'
import Message from './Message/message'
import Footer from './Footer/Footer'
import './chat.scss'

export default function Chat() {
    return (
        <div className="chat">
            <Header />

            <div className="message">
                <Message isSender/>
                <Message />
                <Message isSender/>      
            </div>      

            <Footer />
        </div>
    )
}
