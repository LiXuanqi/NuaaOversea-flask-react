import React from 'react';
import { connect } from 'dva';
import styles from './CaseList.css';

import UserInfoCard from '../components/UserInfoCard';
import BillboardCard from '../components/BillboardCard';

import { Input } from 'antd';
import CaseCard from '../components/CaseCard';
import { Tag } from 'antd';
import { Divider } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['MS', 'PHD', '高GT', '高GPA', '渣三维', '转专业'];
const Search = Input.Search;

function handleChange(value) {
    console.log(`selected ${value}`);
}
  
function handleBlur() {
    console.log('blur');
}
  
function handleFocus() {
    console.log('focus');
}

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
    // render a single CaseCard.
    renderCaseCard(key, id, university, result, major, term, degree, gpa, language_type, language_reading, language_listening, language_speaking, language_writing, gre_verbal, gre_quantitative, gre_writing){
        return(
            <CaseCard
                key={key}
                id={id}
                result={result}
                university={university}
                major={major}
                degree={degree}
                term={term}
                gpa={gpa}
                language_type={language_type}
                language_reading={language_reading}
                language_listening={language_listening}
                language_speaking={language_speaking}
                language_writing={language_writing}
                gre_verbal={gre_verbal}
                gre_quantitative={gre_quantitative}
                gre_writing={gre_writing}
            />  
        );
    }
   
    render() {
        const { selectedTags } = this.state;
        return (
            <div className={styles.container}>
                <Row gutter={32}>
                    <Col span={18}>
                        <div className={styles.contentContainer}>

                            <div className={styles.picContainer}>
                                <div className={styles.pic}>
                                    <img src="../../public/pic-1.jpg" alt="pic-1" width="100%" height="368px"/>
                                </div>
                                <div className={styles.picTextContainer}>
                                    <span className={styles.picTextTitle}>飞跃榜</span>
                                    <span className={styles.picTextIntro}>申请录取汇报</span>
                                </div>
                            </div>

                            <div className={styles.filterContainer}>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => console.log(value)}
                                    style={{ width: '100%' }}
                                />

                                <Divider />

                                <div className={styles.tagFilterContainer}>                                 

                                    <div className={styles.searchSelectContainer}> 
                                        <div className={styles.searchSelect}>
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="选择专业"
                                                optionFilterProp="children"
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="cs">CS</Option>
                                                <Option value="mis">MIS</Option>
                                                <Option value="ba">BA</Option>
                                            </Select>
                                        </div>
                                        <div className={styles.searchSelect}>
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="选择学期"
                                                optionFilterProp="children"
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="2018fall">2018FALL</Option>
                                                <Option value="2017fall">2017FALL</Option>
                                                <Option value="2017spring">2017SPRING</Option>
                                            </Select>
                                        </div>                                       
                                    </div>
                                    
                                    <div>
                                        <h6 className={styles.tagSelectTitle}>特色筛选:</h6>
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
                                <Divider />
                            
                            
                            <div className={styles.cardListContainer}>
                                
                                {
                                    this.props.cases_list.map((item, index)=>{
                                        console.log(item);
                                        return this.renderCaseCard(
                                            index,
                                            item.id,
                                            item.university,
                                            item.result,
                                            item.major,
                                            item.term,
                                            item.degree,
                                            item.gpa,
                                            item.language_type,
                                            item.language_reading,
                                            item.language_listening,
                                            item.language_speaking,
                                            item.language_writing,
                                            item.gre_verbal,
                                            item.gre_quantitative,
                                            item.gre_writing
                                        );
                                    })
                                }
                                
                            </div>   
                        </div>
                    </div>
                    </Col>
                <Col span={6}>
                {/* <div className={styles.sidebarContainer}> */}
                    <UserInfoCard
                        username={this.props.user_info.username}
                        role={this.props.user_info.role}
                        helpNumber='345'
                    />
                    <BillboardCard />
                    <BillboardCard />
                    {/* <Card title="推广" bordered={false} style={{ width: '100%' }}>
                        <p>最近申请季, 祝拿到心仪Offer的同学能在海外得到想要的生活, 也祝没能拿到心仪Offer的同学不用灰心. 祝大家 天宽地广, 大有前程</p>
                    </Card> */}
                {/* </div> */}
                </Col>
                </Row>
            </div>
        );
    }
}

CaseList.propTypes = {
};

function mapStateToProps(state) {
    return {
        cases_list : state.cases.cases_list,
        user_info : state.app.user_info,
    };
}

export default connect(mapStateToProps)(CaseList);