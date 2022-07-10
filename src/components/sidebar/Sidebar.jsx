import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import React from 'react'
import { CloseFriend } from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData';
import './Sidebar.css'
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidevarWrapper">
            <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <Home className="sidebarIcon" />
                      <Link to='/' style={{ textDecoration:"none", color:'black' }}>
                          <span className="sidevarListItemText">ホーム</span>
                      </Link>     
                  </li>      
                   <li className="sidebarListItem">
                      <Search className="sidebarIcon" />
                      <span className="sidevarListItemText">検索</span>
                  </li>     
                   <li className="sidebarListItem">
                      <Notifications className="sidebarIcon" />
                      <span className="sidevarListItemText">通知</span>
                  </li>    
                   <li className="sidebarListItem">
                      <MessageRounded className="sidebarIcon" />
                      <span className="sidevarListItemText">メッセージ</span>
                  </li>      
                   <li className="sidebarListItem">
                      <Bookmark className="sidebarIcon" />
                      <span className="sidevarListItemText">ブックマーク</span>
                  </li>      
                   <li className="sidebarListItem">
                      <Person className="sidebarIcon" />
                      <Link to='/profile/Yuuutabee' style={{ textDecoration:"none", color:'black' }}>
                          <span className="sidevarListItemText">プロフィール</span>
                      </Link>
                  </li>      
                   <li className="sidebarListItem">
                      <Settings className="sidebarIcon" />
                      <span className="sidevarListItemText">設定</span>
                  </li>        
              </ul>
              <hr className='sidebarHr' />
              <ul className="sidebarFriendList">
                  {Users.map((user) => (
                       <CloseFriend user={user} key={user.id} />
                  ))}
              </ul>
          </div>    
      </div>
  );
};
