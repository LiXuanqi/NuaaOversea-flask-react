import React from 'react';
import { connect } from 'dva';
import styles from './$id.css';
import { Divider, Rate } from 'antd';

import ResultCard from '../../components/ResultCard';
import CaseCard from '../../components/CaseCard';
class Case extends React.Component {  
    renderResultCard(key, university, major, result){
        return (
            <ResultCard
                key={key}
                university={university}
                major={major}
                result={result}
            />
        );
    };    
    
    render() {
        const case_data = this.props.case_data;
        return (
            <div className={styles.content}>
                <CaseCard
                    id={case_data.id}
                    result={case_data.result}
                    university={case_data.university}
                    major={case_data.major}
                    degree={case_data.degree}
                    term={case_data.term}
                    gpa={case_data.gpa}
                    language_type={case_data.language_type}
                    language_reading={case_data.language_reading}
                    language_listening={case_data.language_listening}
                    language_speaking={case_data.language_speaking}
                    language_writing={case_data.language_writing}
                    gre_verbal={case_data.gre_verbal}
                    gre_quantitative={case_data.gre_quantitative}
                    gre_writing={case_data.gre_writing}
                />  

                <div className={styles.rateContainer}>
                    <span className={styles.rateText}>研究经历</span>
                    <Rate disabled defaultValue={2} />
                </div>

                <div className={styles.rateContainer}>
                    <span className={styles.rateText}>实习经历</span>
                    <Rate disabled defaultValue={3} />
                </div>

                <div className={styles.rateContainer}>
                    <span className={styles.rateText}>推荐信</span>
                    <Rate disabled defaultValue={4} />
                </div>


                <Divider />
                <h2>正文</h2>
                <p>Yanyong的房源非常好! 就在BTS天桥下面 周围有很多7-11 还有big c超市 距离siam还有机场转乘站都只有几站的距离 入住时候前台有很认真的登记 入住方便 屋内不大 但设施很齐全 屋顶上的游泳池太赞了 傍晚时候看日落太美啦 物有所值 因为是傍晚时候的航班 yanyong还让他的朋友帮我们照看行李 谢谢 Thanks yangyong for all the help!</p>
                <Divider />
                <h2>其它录取结果</h2>
                {/* {this.renderResultCard("CMU", "MS in Marketing", "rej")} */}

                {
                    this.props.related_cases_list.map((item, index)=>{
                        console.log(item);
                        return this.renderResultCard(
                            index,
                            item.university,
                            item.major,
                            item.result,
                        );
                    })
                }
            </div>
        );
    }
}

Case.propTypes = {
};

function mapStateToProps(state) {
    return {
        case_data : state.cases.case_data,
        related_cases_list: state.cases.related_cases_list,
    };
}

export default connect(mapStateToProps)(Case);