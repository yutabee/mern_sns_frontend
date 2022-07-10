import React from 'react'

export const Online = ({user}) => {
    // console.log(user);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER; 
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarFriendImgContainer">
            <img src={PUBLIC_FOLDER + user.profilePicture} alt="" className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
        </div>
              <span className="rightbarUsername">{user.username}</span>
      </li>   
    </>
  );
};
