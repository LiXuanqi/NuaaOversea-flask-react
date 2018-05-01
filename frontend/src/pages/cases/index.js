import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Input, Tag, Divider, Row, Col, Cascader } from 'antd';
import { loginUser } from '../../utils/user';

import CaseCard from '../../components/CaseCard';
import UserInfoCard from '../../components/UserInfoCard';
import BillboardCard from '../../components/BillboardCard';
import request from '../../utils/request';

const CheckableTag = Tag.CheckableTag;
// TODO: fetch data from server.

const degreesFromServer = ['Ph.D', 'Master'];
const resultsFromServer = ['ad', 'rej', 'offer'];

const termOptions = [{
    value: '2017',
    label: '2017',
    children: [{
        value: 'spring',
        label: 'spring'   
    }, {
        value: 'fall',
        label: 'fall'   
    }],
  }, {
    value: '2018',
    label: '2018',
    children: [{
        value: 'spring',
        label: 'spring'   
    }, {
        value: 'fall',
        label: 'fall'   
    }],
  }];
const Search = Input.Search;

class CaseList extends React.Component {
    async componentWillMount(){
        const tagsResponse = await request('/api/tags');
        let tagsFromServer = [];
        tagsResponse.data.tags.forEach((item)=>{
            tagsFromServer.push(item.name);
        })
        this.setState({
            tagsItems: [...tagsFromServer]
        })

        const countriesResponse = await request('/api/countries');
        let countriesFromServer = [];
        countriesResponse.data.countries.forEach((item)=>{
            countriesFromServer.push(item.name);
        })
        this.setState({
            countriesItems: [...countriesFromServer]
        })

    }
    state = {
        selectedTags: [],
        selectedDegree: '',
        selectedResult: '',
        selectedCountry: '',
        selectedTerm: [],
        tagsItems: [],
        countriesItems: [],
    };
    fetchCasesByQueryies = () => {
        const query_args = this.state;
        
        this.props.dispatch({
            type: 'cases/fetchCasesByQueries',
            payload: query_args,
        });
    }
    OnTermChange = (value) => {
        this.setState({
            selectedTerm: value
        }, () => {
            this.fetchCasesByQueryies();
        });
  
    }
    handleChange(tag, checked) {

        const { selectedTags } = this.state;
        const nextSelectedTags = checked ?
                [...selectedTags, tag] :
                selectedTags.filter(t => t !== tag);
        // console.log('You are interested in: ', nextSelectedTags);
        this.setState({
            selectedTags: nextSelectedTags 
        }, () => {
            this.fetchCasesByQueryies();
        });
    }
    
    handleDegreeChange(tag, checked) {
        if (checked) {
            this.setState({
                selectedDegree: tag
            }, () => {
                this.fetchCasesByQueryies();
            });
        } else {
            this.setState({
                selectedDegree: ''
            }, () => {
                this.fetchCasesByQueryies();
            });
        }
    }

    handleResultChange(tag, checked) {
        if (checked) {
            this.setState({
                selectedResult: tag
            }, () => {
                this.fetchCasesByQueryies();
            });
        } else {
            this.setState({
                selectedResult: ''
            }, () => {
                this.fetchCasesByQueryies();
            });
        }
    }

    handleCountryChange(tag, checked) {
        if (checked) {
            this.setState({
                selectedCountry: tag
            }, () => {
                this.fetchCasesByQueryies();
            });
        } else {
            this.setState({
                selectedCountry: ''
            }, () => {
                this.fetchCasesByQueryies();
            });
        }
    }
    // render a single CaseCard.
    renderCaseCard(key, id, university, country, result, major, term, degree, gpa, language_type, language_reading, language_listening, language_speaking, language_writing, gre_verbal, gre_quantitative, gre_writing, tags){
        return(
            <CaseCard
                key={key}
                id={id}
                result={result}
                university={university}
                country={country}
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
                tags={tags}
            />  
        );
    }
   
    render() {
        const { selectedTags, selectedDegree, selectedCountry, selectedResult, tagsItems, countriesItems } = this.state;
        const user_info = loginUser();
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
                                    placeholder="2018 CMU CS"
                                    onSearch={value => console.log(value)}
                                    style={{ width: '100%' }}
                                />

                                <Divider />

                                <div className={styles.tagFilterContainer}>                                 

                                    <div className={styles.searchSelectContainer}> 
                                        <div className={styles.searchSelect}>
                                            <Cascader options={termOptions} onChange={(value) => {this.OnTermChange(value)}} placeholder="请选择学期" />
                                        </div>    
                      
                                    </div>

                                    <div>
                                        <h6 className={styles.tagSelectTitle}>攻读学位:</h6>
                                        {degreesFromServer.map(tag => (
                                            <CheckableTag
                                                key={tag}
                                                checked={selectedDegree === tag}
                                                onChange={checked => this.handleDegreeChange(tag, checked)}
                                            >
                                                {tag}
                                            </CheckableTag>
                                        ))}
                                    </div>
                                    
                                    <div>
                                        <h6 className={styles.tagSelectTitle}>申请结果:</h6>
                                        {resultsFromServer.map(tag => (
                                            <CheckableTag
                                                key={tag}
                                                checked={selectedResult === tag}
                                                onChange={checked => this.handleResultChange(tag, checked)}
                                            >
                                                {tag}
                                            </CheckableTag>
                                        ))}
                                    </div>

                                    <div>
                                        <h6 className={styles.tagSelectTitle}>特色筛选:</h6>
                                        {tagsItems.map(tag => (
                                            <CheckableTag
                                                key={tag}
                                                checked={selectedTags.indexOf(tag) > -1}
                                                onChange={checked => this.handleChange(tag, checked)}
                                            >
                                                {tag}
                                            </CheckableTag>
                                        ))}
                                    </div>
                                    
                                    <div>
                                        <h6 className={styles.tagSelectTitle}>申请国家:</h6>
                                        {countriesItems.map(tag => (
                                            <CheckableTag
                                                key={tag}
                                                checked={selectedCountry === tag}
                                                onChange={checked => this.handleCountryChange(tag, checked)}
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
                               
                                        return this.renderCaseCard(
                                            index,
                                            item.id,
                                            item.university,
                                            item.country,
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
                                            item.gre_writing,
                                            item.tags
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
                        username={user_info.username}
                        role={user_info.role}
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
        cases_list : state.cases.cases_list
    };
}

export default connect(mapStateToProps)(CaseList);