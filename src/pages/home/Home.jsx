import React from 'react'
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Topbar } from '../../components/topbar/Topbar';
import './Home.css'

export const Home = () => {
  return (
    <>
        <Topbar />
      <div className="homeContainer">
        <Sidebar />
          <div className="profileRight">
              <div className="profileRightTop">ddkjfkf</div>
              <div className="profileRightTop">
                  <TimeLine/>
                  <Rightbar/>
              </div>   
          </div>  
      </div>    
    </>
  );
};