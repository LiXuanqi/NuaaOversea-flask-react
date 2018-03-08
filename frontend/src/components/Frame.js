import React from 'react';
import styles from './Frame.css';
import { Layout } from 'antd';
import { Button } from 'antd';
// import Cover from './Cover';
import { Input } from 'antd';
const Search = Input.Search;
const { Content, Footer } = Layout;

class Frame extends React.Component {
    render() {
        return (
            <Layout>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <span>
                            <img src="../../public/logo.png" alt="logo" width="48px"/>
                        </span>
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
                        <Button size="large" type="primary" ghost>Submit a Case</Button>
                        <Button size="large" type="primary" >Login</Button>
                    </div>
                </div>
                {/* <Cover /> */}
                <Content className={styles.content}>
                    <div style={{ minHeight: 1280 }}>
                        { this.props.children }
                    </div>                
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    纸飞机南航青年网络社区 ( 苏ICP备05070685号-1 )
                </Footer>
            </Layout>
        );
    }
}

Frame.propTypes = {
};

export default Frame;
 