import React from 'react';
import { connect } from 'dva';
import styles from './Case.css';
import CaseCard from '../components/CaseCard';
import { Divider } from 'antd';
import ResultCard from '../components/ResultCard';
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
    // componentWillMount(){
    //     const case_data = this.props.case_data;
    //     // FIXME: it will call the dispatch endlessly
    //     this.props.dispatch({
    //         type: 'cases/fetchRelatedCasesListByApplicantId',
    //         payload: case_data.applicant_id,
    //     });   
    // }; 
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
                <h2>正文</h2>
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