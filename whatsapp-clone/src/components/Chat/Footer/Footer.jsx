import React from 'react'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <EmojiEmotionsOutlinedIcon />
            <LinkOutlinedIcon />
            <form>
                <input type="text" placeholder="Type a message" />
                <button type="submit"><NavigationOutlinedIcon /></button>
            </form>
        </div>
    )
}
