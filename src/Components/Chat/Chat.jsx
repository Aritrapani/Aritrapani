import React, {useEffect , useState } from 'react';
import './Chat.css';
import { useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from '../../Config/firebase';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [channelDetails , setChannelDetails] = useState();
  const [messages , setMessages] = useState([]);

  useEffect(() => {
     db.collection('rooms').doc(roomId)
                           .onSnapshot(snap => {
                              setChannelDetails(snap.data());
                           });

     db.collection('rooms').doc(roomId)
                           .collection('messages')
                           .orderBy('timestamp', "asc")
                           .onSnapshot(snap => {
                              setMessages(snap.docs.map( doc => doc.data()));
                           })

  }, [roomId]);

  console.log(messages);
 
  return (
    <div className='chat'>
        <div className="chat-header">
            <div className="chat-headerLeft">
                <h4 className='chat-channelName'>
                    <strong>#{channelDetails?.name}</strong>
                    <StarBorderOutlinedIcon />
                </h4>
            </div>

            <div className="chat-headerRight">
                <p>
                   <InfoOutlinedIcon /> 
                    Details</p>
            </div>
        </div>

        <div className="chat-messages">
            {messages.map(msg => {
                return (
                    <Message 
                    user = {msg.user}
                    message = {msg.message}
                    userImage = {msg.userimage}
                    timeStamp = {msg.timestamp} />
                )
            })}
        </div>

        <ChatInput channelName={channelDetails?.name} channelId={roomId} msgBox={'.chat-messages'}/>

    </div>
  )
}

export default Chat