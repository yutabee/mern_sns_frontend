import React, { useEffect, useState } from 'react'
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.css';
import axios from 'axios';
// import { Posts } from '../../dummyData';

export const TimeLine = ({username}) => {
  const [posts, setPosts] = useState([]);    //apiの投稿データを格納するstate

  useEffect(() => {                      //apiの読み込みは画面を読み込んだとき1回でok
    const fetchPosts = async () => {     //useEffectは直接asyncを付けられない
      const response = username          //usernameがはいいていればプロフィールページを表示する
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/62c41b1985dccbf023a2c219');  
      // console.log(response);
      setPosts(response.data);  //apiのresのdataをset
    };
    fetchPosts();  //忘れず呼び出す
   }, [username]);  //第2引数は関心のあるstateや変数を格納できる,今回はなし

  return (
    <>
        <div className="timeline">
              <div className="timelineWapper">
                  <Share />
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))} 
              </div> 
        </div>
    </>
  );
};
