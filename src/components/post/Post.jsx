import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './Post.css'
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
// import { Users } from '../../dummyData'

export const Post = ({ post }) => {
    // const user = Users.filter( user => user.id === 1); 
    // console.log(user);
    // console.log(post);

    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER; 
    
    //いいねのstate管理
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    //apiのユーザー情報を格納するstate
    const [user, setUser] = useState({});   
    
    const { user: currentUser } = useContext(AuthContext);  //userと名前が被るのでcurrentUserとする

    useEffect(() => {                      //apiの読み込みは画面を読み込んだとき1回でok
        const fetchUser = async () => {     //useEffectは直接asyncを付けられない
        const response = await axios.get(`/users/?userId=${post.userId}`);  //endpoint proxy設定しているので/userからでOK
        // console.log(response);
        setUser(response.data);  //apiのresのdataをset
        };
        fetchUser();  //忘れず呼び出す
    }, [post.userId]);  //第2引数は関心のあるstateや変数を格納できる,今回はなし.からのままだとEsLintに怒られるけどOK

    //いいね実装
    const handleLike = async() => {
        try {
            //いいねのAPIを叩く
            await axios.put(`/posts/${post._id}/like`, { userId:currentUser._id});  
            
        } catch (err) {
            console.log(err);
        }

        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

  return (
    <>
          <div className="post">
              <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                          <Link to={`/profile/${user.username}`}>
                              <img src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'} alt="" className='postProfileImg' />
                           </Link>
                          <span className='postUserName'>{ user.username }</span>
                          <span className='postDate'>{format(post.createdAt )}</span>  {/* timeago->formatで時間表示をいい感じにする */}
                      </div> 
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                  </div>
                  <div className="postCenter">
                      <span className='postText'>{post.desc}</span>
                      <img src={PUBLIC_FOLDER + post.img} alt="" className='postImg' />
                  </div>
                  <div className="postBottom">
                      <div className="postBottomLeft">
                          <img src={PUBLIC_FOLDER + "/heart.png"} alt="" className='likeIcon' onClick={()=>handleLike()} />
                          <span className="postLikeCounter">
                              {like}人がいいねを押しました
                          </span>
                      </div>
                      <div className="postBottomRight">
                          <span className="postCommentText">
                              {post.comment}コメント
                          </span>
                      </div>
                  </div>
              </div>
         </div>
    </>
  );
};
