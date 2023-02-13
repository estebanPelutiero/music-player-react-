import React from 'react';
import "./sidebar.css";
import SidebarButton from '../sidebarButton/SidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1676303582/music-player-react/icon_jmly43.png"
      className='profile-img' 
      alt="profile" />

      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
      </div>

      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />}/>
    </div>
  )
}

export default Sidebar;