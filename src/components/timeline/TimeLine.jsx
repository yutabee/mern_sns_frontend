import React from 'react'
import { Share } from '../share/Share';
import './TimeLine.css'

export const TimeLine = () => {
  return (
    <>
        <div className="timeline">
              <div className="timelineWapper">
                  <Share />
                  {/* <Post /> */}
              </div> 
        </div>
    </>
  );
};
