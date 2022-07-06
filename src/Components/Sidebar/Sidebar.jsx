import React , { useState , useEffect, useContext } from 'react'
import db from '../../Config/firebase'
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from '../SidebarOption/SidebarOption';
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { UserContext } from '../../Context';

function Sidebar() {

  const [channels , setChannels ] = useState([]);
  const { state } = useContext(UserContext);

  useEffect(() => {
    let data = [];
    db.collection("rooms").onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          name : doc.data().name
        }
      }))
    });
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>My Workspace</h2>
          <h3>
            <FiberManualRecordIcon />
            {state.user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={CommentIcon} title={'Threads'} />
      <SidebarOption Icon={InboxIcon} title="Mentions and Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People and user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channel" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannel={true} />

      {
        channels.map(channel => {
          return (
            <SidebarOption title={channel.name} id={channel.id}/>
          )
        })
      }
    </div>
  )
}

export default Sidebar