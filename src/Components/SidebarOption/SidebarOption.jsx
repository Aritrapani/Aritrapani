import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarOption.css';
import db from '../../Config/firebase';

function SidebarOption({ Icon , title , addChannel , id}) {

    const navigate = useNavigate();
    const [active , setActive] = useState(false);

    const addChannelFunc = () => {
       const channelName = prompt('Please enter the Channel Name...');

       if(channelName)
       {
         db.collection('rooms').add({
            name: channelName
         })
       }
    }

    const selectChannel = () => {
       if(id){
        navigate(`room/${id}`);
       }
       else{
        console.log(title);
       }
    }

  return (
    <div className="sidebarOption" onClick={addChannel ? addChannelFunc : selectChannel }>
        {Icon && <Icon className='sidebarOption-icon' />}
        {
            Icon ? (
                <h3>{title}</h3>
            ) : (
                <h3 className='sidebarOption-channel' style={{backgroundColor: active ? 'blue' : null}}>
                    <span className='sidebarOption-hash'>#</span>{title}
                </h3>
            )
        }
    </div>
  )
}

export default SidebarOption