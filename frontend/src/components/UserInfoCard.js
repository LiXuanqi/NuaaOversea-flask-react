import React from 'react';
import styles from './UserInfoCard.css';
import { Button, Avatar } from 'antd';

const UserInfoCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.userInfoContainer}>
                <div className={styles.avatar}>
                    <Avatar size="large" src="public/avatar2.jpg" />
                </div>

                <div className={styles.userInfo}>
                    <span className={styles.username}>1_x7</span>
                    <span className={styles.role}>普通用户</span>
                </div>

            </div>

            <Button>报OFFER</Button>
        </div>
    );
};

UserInfoCard.propTypes = {
};

export default UserInfoCard;
