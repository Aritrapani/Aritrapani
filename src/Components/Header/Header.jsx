import React, { useContext } from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import { UserContext } from '../../Context';

function Header() {

  const { state,dispatch } = useContext(UserContext);

  const logout = () => {
     console.log('clicked')
     dispatch({
      type : 'LOG OUT'
     })
  }

  return (
    <div className="header">
      <div className="header-left">
        <Tooltip arrow title="Log Out" placement="right">
          <Avatar alt='aritra' src={state.user?.photoURL} style={{cursor:'pointer'}} onClick={logout}/>
        </Tooltip>

        <AccessTimeOutlinedIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input type='search' placeholder='Type here to Search' />
      </div>
      <div className="header-right">
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  )
}

export default Header