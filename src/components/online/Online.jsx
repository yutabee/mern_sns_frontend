import React from 'react'

export const Online = ({user}) => {
    // console.log(user);
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarFriendImgContainer">
            <img src={user.profilePicture} alt="" className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
        </div>
              <span className="rightbarUsername">{user.username}</span>
      </li>   
    </>
  );
};
