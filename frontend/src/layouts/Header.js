import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import styles from './Header.css';
import { Button, Dropdown, Avatar, Menu, Input } from 'antd';
import { isLogin } from '../utils/user.js';

const Search = Input.Search;

function Header({ history, dispatch }) {

    const handleUserActionMenuClicked = function ({ key }) {
        console.log(`Click on item ${key}`);
        if (key === 'logout') {
            handleLogout();
        }
    };

    const menu = (
        <Menu onClick={handleUserActionMenuClicked}>
          <Menu.Item key="user_info">个人信息</Menu.Item>
          <Menu.Item key="logout">注销</Menu.Item>
        </Menu>
    );

    const handleLogin = () => {
        // 1. judge isLogin();
        // 2. if yes, 
        // 3. if no, navigate to /sso-v2/oauth/12345678?redirect_uri=' + history.location.pathname
        if (!isLogin()) {
            window.location.href = '/sso-v2/oauth/12345678?redirect_uri=' + history.location.pathname;
        }
        // will get code.
  
    };
    
    const handleLogout = () => {
        dispatch({ type: 'app/logoutUser'});
        // TODO: delete the user_info from redux.
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <Link to="/">
                    <span>
                        <img src="../../public/logo.png" alt="logo" width="48px"/>
                    </span>
                </Link>
                <div className={styles.brand}>
                    <span className={styles.brandName}>Oversea</span>
                    <span className={styles.brandIntro}>Cases for everyone</span>
                </div>
                <Search
                    placeholder="2018 CMU CS"
                    onSearch={value => console.log(value)}
                    style={{ width: 400, paddingLeft: '24px' }}
                />
            </div>
            <div className={styles.headerRight}>
                <div className={styles.actionContainer}>
                    <Link to="/case_report">
                        <Button size="large" type="dashed">报OFFER</Button>
                    </Link>
                </div>
                <div className={styles.userInfoContainer}>
                    {/* FIXME: when the user_info is {}, it still be true. */}
                    {
                        true
                            ?
                        <Button size="large" type="primary" onClick={handleLogin}>登陆</Button> 
                            : 
                        <div>
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                            </Dropdown>
                            
                            {/* <Button size="large" type="primary" onClick={handleLogout}>登出</Button>  */}
                        </div>
                    }
                </div>
            </div>
        </div>
  );
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(withRouter(Header));