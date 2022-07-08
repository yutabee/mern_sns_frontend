import React from 'react';
import './Register.css';

export const Register = () => {
  return (
    <>
        <div className="login">
              <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className='loginLogo'>MERN SNS</h3>
                        <span className='loginDesc'>本格的なSNSを自分の手で。</span>
                    </div>
                  <div className="loginRight">
                    <div className="loginBox">
                        <p className='loginMsg'>新規登録はこちら</p>    
                          <input type="text" className='loginInput' placeholder='ユーザー名' />
                          <input type="text" className='loginInput' placeholder='Eメール' />
                          <input type="text" className='loginInput' placeholder='バスワード' />
                          <input type="text" className='loginInput' placeholder='確認用バスワード' />
                          <button className='loginButton'>サインアップ</button>
                          <button className='loginRegisterButton'>ログイン</button>
                    </div>
                  </div>
              </div>    
      </div>
    </>
  );
};
