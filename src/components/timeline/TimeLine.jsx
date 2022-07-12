import React, { useContext, useEffect, useState } from 'react'
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.css';
import axios from 'axios';
import { AuthContext } from '../../state/AuthContext';
// import { Posts } from '../../dummyData';

export const TimeLine = ({username}) => {
  const [posts, setPosts] = useState([]);    //apiの投稿データを格納するstate
  const { user } = useContext(AuthContext);

  useEffect(() => {                      //apiの読み込みは画面を読み込んだとき1回でok
    const fetchPosts = async () => {     //useEffectは直接asyncを付けられない
      const response = username          //usernameがはいいていればプロフィールページを表示する
        ? await axios.get(`/posts/profile/${username}`)      //プロフィールの場合
        : await axios.get(`/posts/timeline/${user._id}`);  //ホームの場合
      // console.log(response);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);  //投稿を新しい順でソート
        })
      );//apiのresのdataをset
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
