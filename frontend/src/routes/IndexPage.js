import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import Frame from '../components/Frame';

import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
const { Meta } = Card;

function IndexPage() {
    return (
        <Frame cover={true}> 
             
            <div style={{ padding: 24, minHeight: 1280 }}>
                {/* <span className={styles.bbsName}>论坛</span> */}
                <Row gutter={16} type="flex" justify="space-around">
                    <Col span={8}>
                        <Link to="/case">
                            <Card
                                style={{ width: 350 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                            >
                                <Meta
                                title="飞跃榜"
                                description="This is the description"
                                />
                            </Card>
                        </Link>
                    </Col>
                    <Col span={8}>
                        <Card
                            style={{ width: 350 }}
                            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        >
                            <Meta
                            title="选校测评"
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
                            title="论坛专区"
                            description="This is the description"
                            />
                        </Card>
                    </Col>
                </Row>

            </div>

        </Frame>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
