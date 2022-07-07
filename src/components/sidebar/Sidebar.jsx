import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from '@mui/icons-material';
import React from 'react'
import './Sidebar.css'


export const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidevarWrapper">
            <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <Home className="sidebarIcon" />
                      <span className="sidevarListItemText">ホーム</span>
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
                      <span className="sidevarListItemText">プロフィール</span>
                  </li>      
                   <li className="sidebarListItem">
                      <Settings className="sidebarIcon" />
                      <span className="sidevarListItemText">設定</span>
                  </li>        
              </ul>
              <hr className='sidebarHr' />
              <ul className="sidebarFriendList">
                  <li className="sidebarFriend">
                      <img src="/assets/person/2.jpeg"
                          alt=""
                          className='sidebarFriendImg'
                      />
                      <span className="sidebarFriendName">Yuuuuta</span>
                  </li>   
                  <li className="sidebarFriend">
                      <img src="/assets/person/3.jpeg"
                          alt=""
                          className='sidebarFriendImg'
                      />
                      <span className="sidebarFriendName">田中さん</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/4.jpeg"
                          alt=""
                          className='sidebarFriendImg'
                      />
                      <span className="sidebarFriendName">佐藤さん</span>
                  </li>            
              </ul>
          </div>    
      </div>
  );
};
