import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import Frame from '../components/Frame';

import { Layout } from 'antd';

import Cover from '../components/Cover';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const { Header, Content, Footer } = Layout;

function IndexPage() {
    return (
        <Frame>
             
            <div style={{ padding: 24, minHeight: 1280 }}>
                <span className={styles.bbsName}>论坛</span>
                <Row gutter={16} type="flex" justify="space-around">
                    <Col span={8}>
                        <Card
                            style={{ width: 350 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                            title="录取汇报"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: 350 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                            title="语言考试"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: 350 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                            title="租房信息"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>
                <span className={styles.bbsName}>热门讨论</span>
                




            </div>

        </Frame>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
