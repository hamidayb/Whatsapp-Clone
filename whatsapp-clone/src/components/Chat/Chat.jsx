import React from 'react'
import Header from './ChatHeader/ChatHeader'
import Message from './Message/message'
import Footer from './Footer/Footer'
import './chat.scss'

export default function Chat({ messages }) {
    return (
        <div className="chat">
            <Header />

                <Message message={messages}/>

            <Footer />
        </div>
    )
}
