import React from 'react'

export const CloseFriend = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER; 

    // console.log(user);
  return (
    <>
       <li className="sidebarFriend">
        <img src={ PUBLIC_FOLDER + user.profilePicture} alt="" className='sidebarFriendImg' />
              <span className="sidebarFriendName">{user.username}</span>
        </li>      
    </>
  );
};
