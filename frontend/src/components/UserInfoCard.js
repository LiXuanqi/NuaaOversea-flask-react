import React from 'react';
import styles from './UserInfoCard.css';
import { Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';
const UserInfoCard = ({username, role, helpNumber}) => {
    return (
        <div className={styles.card}>
            <div className={styles.userInfoContainer}>
                <div className={styles.avatar}>
                    { 
                        username ?
                        <Avatar size="large" src="public/avatar2.jpg" />
                        :
                        <Avatar size="large" icon="user" />
                    }
                    
                </div>

                <div className={styles.userInfo}>
                    <span className={styles.username}>{username ? username : '未登录'}</span>
                    <span className={styles.role}>{role ? role : '访问者'}</span>
                </div>
            </div>
            {
                username ?
                    <div className={styles.actionsContainer}>
                        <Link to="/case_report"><Button className={styles.buttonBlue} type="primary">报OFFER</Button></Link>
                        <Link to="/user_report"><Button className={styles.buttonBlue} type="primary">报三维</Button></Link>
                    </div>
                :
                    <div className={styles.actionsContainer}>
                        <Button className={styles.buttonBlue} type="primary">登陆</Button>
                        <Button className={styles.buttonBlue} type="primary" disabled>报OFFER</Button>
                    </div>
            }

           <div className={styles.textContainer}>
                {
                    username ?
                    '你的录取汇报已经帮助了{helpNumber}人。'
                    :
                    ''
                }
               
           </div>
        </div>
    );
};

UserInfoCard.propTypes = {
};

export default UserInfoCard;
