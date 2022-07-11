import React, { useEffect, useState } from 'react';
import { Topbar } from '../../components/topbar/Topbar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar'
import './Profile.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';  //useのパラメーターを受け取れるHooks

export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER; 
    
    const [user, setUser] = useState({});   
    const username = useParams().username;
    // console.log(username);

    useEffect(() => {                      //apiの読み込みは画面を読み込んだとき1回でok
        const fetchUser = async () => {     //useEffectは直接asyncを付けられない
        const response = await axios.get(`/users/?username=${username}`);  //endpoint proxy設定しているので/usersからでOK
        // console.log(response);
        setUser(response.data);  //apiのresのdataをset
        };
        fetchUser();  //忘れず呼び出す
    }, []);  //第2引数は関心のあるstateや変数を格納できる,今回はなし.からのままだとEsLintに怒られるけどOK

  return (
    <>
         <Topbar />
        <div className="profile">
            <Sidebar />
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                          <img src={user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className='profileCoverImg' />
                          <img src={PUBLIC_FOLDER + user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt="" className='profileUserImg' />
                      </div>
                      <div className="profileInfo">
                          <h4 className='profileInfoName'>{ user.username }</h4>
                          <span className='profileInfoDesc'>{ user.desc }</span>
                      </div>
                  </div>
                  <div className="profileRightBottom">
                      <TimeLine username={username} />
                      <Rightbar user={user} />   {/* profileの変数があることで見分けることができる */}
                  </div>
              </div>       
        </div>  
    </>
  );
};
