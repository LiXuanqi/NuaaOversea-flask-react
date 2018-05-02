import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import { Tag, Divider, Row, Col, Cascader, Slider, Switch } from 'antd';
import { loginUser } from '../../utils/user';

import CaseCard from '../../components/CaseCard';
import UserInfoCard from '../../components/UserInfoCard';
import BillboardCard from '../../components/BillboardCard';
import request from '../../utils/request';
import CaseSearch from '../../components/CaseSearch';

const CheckableTag = Tag.CheckableTag;
// TODO: fetch data from server.

const degreesFromServer = ['Ph.D', 'Master'];
const resultsFromServer = ['ad', 'rej', 'offer'];

const gpaMarks = {
    1: '1.0',
    3: '3.0',
    5: {
      style: {
        color: '#f50',
      },
      label: <strong>5.0</strong>,
    },
};

const greMarks = {
    280: '280',
    320: '320',
    340: {
      style: {
        color: '#f50',
      },
      label: <strong>340</strong>,
    },
};

const toeflMarks = {
    60: '60',
    100: '100',
    120: {
      style: {
        color: '#f50',
      },
      label: <strong>120</strong>,
    },
};

const ieltsMarks = {
    0: '0',
    7: '7',
    9: {
      style: {
        color: '#f50',
      },
      label: <strong>9.0</strong>,
    },
};

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


class CaseList extends React.Component {
    state = {
        selectedTags: [],
        selectedDegree: '',
        selectedResult: '',
        selectedCountry: '',
        selectedTerm: [],
        tagsItems: [],
        countriesItems: [],
        filterRange: {
            type: 'TOEFL',
            gpa: [],
            gre: [],
            language: [80, 110]
        },
        filterType: 'no-filter',

    };

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
    onGpaSliderChange(value) {
        // console.log(value);
        this.setState({
            filterRange: {
                ...this.state.filterRange,
                gpa: value
            }
        }, () => {this.filterByRange()})
    }
    onGreSliderChange(value) {
        // console.log(value);
        this.setState({
            filterRange: {
                ...this.state.filterRange,
                gre: value
            }
        }, () => {this.filterByRange()})
    }
    onToeflSliderChange(value) {
        console.log(value);
        this.setState({
            filterRange: {
                ...this.state.filterRange,
                language: value
            }
        }, () => {this.filterByRange()})
    }
    filterByRange() {
        console.log(this.state.filterRange);
        this.setState({
            filterType: 'byLanguage'
        })
    }
    onFilterTypeSwitchChanged(value) {
        let filterType = '';
        let range = [];
        if (value == true) {
            filterType = 'TOEFL'
            range = [80, 110];
        } else {
            filterType = 'IELTS'
            range = [5, 8];
        }
        this.setState({
            filterRange: {
                ...this.state.filterRange,
                type: filterType,
                language: range
            }
        }, () => {console.log(this.state.filterRange)})
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
        const { selectedTags, selectedDegree, selectedCountry, selectedResult, tagsItems, countriesItems, filterRange, filterType } = this.state;
        const user_info = loginUser();
        const checkRangeFilter = (item) => {
            const minGpa = filterRange.gpa[0];
            const maxGpa = filterRange.gpa[1];
            const minGre = filterRange.gre[0];
            const maxGre = filterRange.gre[1];
            const minLanguage = filterRange.language[0];
            const maxLanguage = filterRange.language[1];
            const greTotal = item.gre_quantitative + item.gre_verbal;
            const type = filterRange.type
            if (type === "TOEFL") {
                const toeflTotal = item.language_reading + item.language_listening + item.language_speaking + item.language_writing;
                return (item.gpa >= minGpa && item.gpa <= maxGpa) && (greTotal <= maxGre && greTotal >= minGre) && (toeflTotal <= maxLanguage && toeflTotal >= minLanguage);
            }
            if (type === "IELTS") {
                let ieltsMean = (item.language_reading + item.language_listening + item.language_speaking + item.language_writing) / 4;
                if (ieltsMean % 1 === 0.25 || ieltsMean % 1 === 0.75) {
                    ieltsMean = ieltsMean + 0.25;
                }
                return (item.gpa >= minGpa && item.gpa <= maxGpa) && (greTotal <= maxGre && greTotal >= minGre) && (ieltsMean <= maxLanguage && ieltsMean >= minLanguage);
            }
        }
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
                                <CaseSearch />

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
                                    <Row gutter={16}>
                                        <Col span={2}>
                                            <h6 className={styles.tagSelectTitle}>GPA:</h6>
                                        </Col>
                                        <Col span={6}>
                                            <Slider
                                                marks={gpaMarks}
                                                range 
                                                defaultValue={[1.5, 3.5]} 
                                                step={0.1}
                                                min={1.0}
                                                max={5.0}
                                                onChange={value => this.onGpaSliderChange(value)}
                                            />
                                        </Col>

                                        <Col span={2}>
                                            <h6 className={styles.tagSelectTitle}>{filterRange.type}:</h6>
                                            <Switch checkedChildren="托" unCheckedChildren="雅" defaultChecked onChange={(value) => {this.onFilterTypeSwitchChanged(value)}}/>
                                        </Col>
                                        <Col span={6}>
                                        {/* FIXME: defalutValue will error, when switch language type */}
                                            <Slider
                                                marks={filterRange.type === 'TOEFL' ? toeflMarks : ieltsMarks}
                                                range 
                                                value = {filterRange.language}
                                                step={filterRange.type === 'TOEFL' ? 1 : 0.5}
                                                min={filterRange.type === 'TOEFL' ? 60 : 0}
                                                max={filterRange.type === 'TOEFL' ? 120 : 9}
                                                onChange={value => this.onToeflSliderChange(value)}
                                            />
                                        </Col>

                                        <Col span={2}>
                                            <h6 className={styles.tagSelectTitle}>GRE:</h6>
                                        </Col>
                                        <Col span={6}>
                                            <Slider
                                                marks={greMarks}
                                                range 
                                                defaultValue={[300, 330]} 
                                                step={1}
                                                min={280}
                                                max={340}
                                                onChange={value => this.onGreSliderChange(value)}
                                            />
                                        </Col>
                          
                                    </Row>
                        
                              
                                <Divider />
                            
                            
                            <div className={styles.cardListContainer}>
                                
                                {
                                    this.props.cases_list.filter(filterType === 'no-filter' ? () => true : checkRangeFilter).map((item, index)=>{
                               
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
           
                    <UserInfoCard
                        username={user_info.username}
                        role={user_info.role}
                        helpNumber='345'
                    />
                    <BillboardCard />
                    <BillboardCard />
 
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