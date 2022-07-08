import React from 'react'

export const CloseFriend = ({ user }) => {
    // console.log(user);
  return (
    <>
       <li className="sidebarFriend">
            <img src={user.profilePicture}
                alt=""
                className='sidebarFriendImg'
            />
              <span className="sidebarFriendName">{user.username}</span>
        </li>      
    </>
  );
};
