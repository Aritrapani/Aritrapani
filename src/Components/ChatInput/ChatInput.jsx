import React, { useContext, useState } from 'react';
import './ChatInput.css';
import { UserContext } from '../../Context';
import db from '../../Config/firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId , msgBox }) {

    const [input, setInput] = useState('');
    const { state } = useContext(UserContext);

    const sendMessage = (e) => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId)
                .collection('messages').add({
                    message: input,
                    user: state.user.displayName,
                    userimage: state.user?.photoURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            setInput('');
        }
    }

    return (
        <div className='chatInput'>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <button type='submit' onClick={sendMessage} >Send</button>
            </form>
        </div>
    )
}

export default ChatInput