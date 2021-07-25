import React, {useState} from 'react'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import axios from '../../../axios';
import './footer.scss';

export default function Footer() {
    const [msg, setMsg] = useState(""); 

    const sendMsg = async e => {
        e.preventDefault();
        await axios.post("/messages/new", { 
            email: "hamidayb123@gmail.com",
            name: "Hamid",
            message: msg,
            timestamp: new Date().toUTCString(),
            received: false
        })
        setMsg("");
    }

    return (
        <div className="footer">
            <EmojiEmotionsOutlinedIcon />
            <LinkOutlinedIcon />
            <form>
                <input type="text" placeholder="Type a message" value={msg} onChange={e => setMsg(e.target.value)} />
                <button onClick={sendMsg} type="submit"><NavigationOutlinedIcon /></button>
            </form>
        </div>
    )
}
