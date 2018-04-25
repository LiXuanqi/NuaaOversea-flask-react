import React from 'react'
import { connect } from 'dva';
import styles from './App.css';
import { Layout } from 'antd';

import Cover from '../components/Cover';
import { withRouter } from 'react-router';

import Header from '../components/Header';

const { Content, Footer } = Layout;

const App = ({ children, history, dispatch, user_info }) => {

    return(
        <Layout>
            <Header user_info={user_info} dispatch={dispatch}/>
            { history.location.pathname === '/' ? <Cover />: null}
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

function mapStateToProps(state) {
    return {
        user_info : state.app.user_info,
    };
}

export default withRouter(connect(mapStateToProps)(App));