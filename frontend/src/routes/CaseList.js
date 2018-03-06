import React from 'react';
import { connect } from 'dva';
import styles from './CaseList.css';
import Frame from '../components/Frame';

import { Input } from 'antd';
import CaseCard from '../components/CaseCard';
import { Tag } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
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
                <div className={styles.container}>
                    <div className={styles.empty}/>
                    <div className={styles.contentContainer}>
                        <div style={{ backgroundColor: '#fff' }}>
                            <div>
                                <img src="../../public/pic-1.jpg" alt="pic-1" width="100%" height="368px"/>
                            </div>
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
                                <Divider />
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
                    </div>
                    <div className={styles.sidebarContainer}>
                        <Card title="信息栏" bordered={false} style={{ width: '100%' }}>
                            <p>最近申请季, 祝拿到心仪Offer的同学能在海外得到想要的生活, 也祝没能拿到心仪Offer的同学不用灰心. 祝大家 天宽地广, 大有前程</p>
                        </Card>
                        <Card title="推广" bordered={false} style={{ width: '100%' }}>
                            <p>最近申请季, 祝拿到心仪Offer的同学能在海外得到想要的生活, 也祝没能拿到心仪Offer的同学不用灰心. 祝大家 天宽地广, 大有前程</p>
                        </Card>
                    </div>

                    <div className={styles.empty}/>
                    
                </div>
                        
            </Frame>
        );
    }
}

CaseList.propTypes = {
};

export default connect()(CaseList);