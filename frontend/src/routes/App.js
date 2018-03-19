import React from 'react'
import { connect } from 'dva';
import styles from './App.css';
import { Layout } from 'antd';
import { Button } from 'antd';
import Cover from '../components/Cover';
import { Input } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Search = Input.Search;
const { Content, Footer } = Layout;

const App = ({ children }) => {
    return(
        <Layout>
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
                    <Link to="/case_report">
                        <Button size="large" type="primary" ghost>Submit a Case</Button>
                    </Link>
                        <Button size="large" type="primary" onClick={this.handleLogin}>Login</Button>
                </div>
            </div>
            { true ? <Cover />: null}
            <Content >
                <div className={styles.body}>
                    <div className={styles.empty} />
                    <div className={styles.content}>
                        { children }
                    </div>
                    <div className={styles.empty} />
                </div>                
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                纸飞机南航青年网络社区 ( 苏ICP备05070685号-1 )
            </Footer>
        </Layout>
    );
}

export default withRouter(connect()(App));