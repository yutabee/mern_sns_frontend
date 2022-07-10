import React, { useRef } from 'react'; 
import './Login.css';

export const Login = () => {
  const email = useRef();
  const password = useRef();   //useRefでinputの値を監視できる(簡単に値を取得できるから便利)
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault(); //ファームボタンを押した時のリロードを防止する
    // console.log(email.current);
    console.log(email.current.value);
    console.log(password.current.value);

}

  return (
    <>
        <div className="login">
              <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className='loginLogo'>MERN SNS</h3>
                        <span className='loginDesc'>本格的なSNSを自分の手で。</span>
                    </div>
                  
                      <div className="loginRight">
            <form className="loginBox" onSubmit={(e)=>handleSubmit(e)}>
                              <p className='loginMsg'>ログインはこちら</p>    
                              <input type="email" className='loginInput' placeholder='Eメール' required ref={email}/>
              <input type="password" className='loginInput' placeholder='バスワード' required minLength="6" ref={password} />
                              <button className='loginButton'>ログイン</button>
                              <span className='loginForgot'>パスワードを忘れた方へ</span>
                              <button className='loginRegisterButton'>アカウント作成</button>
                        </form>
                      </div>
          
              </div>    
      </div>
    </>
  );
};
