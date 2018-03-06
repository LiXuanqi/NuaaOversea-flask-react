import React from 'react';
import { connect } from 'dva';
import styles from './CaseList.css';
import Frame from '../components/Frame';

import { Input } from 'antd';
import { Row, Col } from 'antd';
import CaseCard from '../components/CaseCard';

import { Tag } from 'antd';

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

const Search = Input.Search;

class CaseList extends React.Component {
    
    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
                [...selectedTags, tag] :
                selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    
    render() {
        const { selectedTags } = this.state;
        return (
            <Frame>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>                
                        <div style={{ backgroundColor: '#fff' }}>
                            <div className={styles.filterContainer}>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    style={{ width: '100%' }}
                                />
                                <div className={styles.tagFilterContainer}>
                                
                                    <h6 style={{ marginRight: 8, display: 'inline' }}>特色筛选:</h6>
                                    {tagsFromServer.map(tag => (
                                    <CheckableTag
                                        key={tag}
                                        checked={selectedTags.indexOf(tag) > -1}
                                        onChange={checked => this.handleChange(tag, checked)}
                                    >
                                        {tag}
                                    </CheckableTag>
                                    ))}
                                
                                </div>
                            </div>
                            <div className={styles.cardListContainer}>
                                <CaseCard
                                    major="Computer Science"
                                    degree="Phd"
                                    year="2018"
                                    GPA="3.0"
                                    TOEFL="91"
                                    GRE="318"
                                />                      
                                <CaseCard
                                    major="Computer Science"
                                    degree="Phd"
                                    year="2018"
                                    GPA="3.0"
                                    TOEFL="91"
                                    GRE="318"
                                />                                
                                <CaseCard
                                major="Computer Science"
                                degree="Phd"
                                year="2018"
                                GPA="3.0"
                                TOEFL="91"
                                GRE="318"
                            />

                            </div>   
                        </div>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </Frame>
        );
    }
}

CaseList.propTypes = {
};

export default connect()(CaseList);