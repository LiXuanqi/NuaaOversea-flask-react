import React from 'react';
import { connect } from 'dva';
import styles from './CaseReport.css';
import { Steps, Icon, Button, Divider} from 'antd';

import WrappedCaseReportForm from '../components/CaseReportForm';
import { WrappedUserComplementReportForm } from '../components/UserReportForm';

const Step = Steps.Step;


class CaseReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        current: 0,
        userInfoFields: {
            major: {
                value: undefined
            },
            gpa: {
               value: undefined
            },
            language_type: {
                value: undefined
            },
            language_reading: {
                value: undefined
            },
            language_listening: {
                value: undefined
            },
            language_speaking: {
                value: undefined
            },
            language_writing: {
                value: undefined
            },
            gre_verbal: {
                value: undefined
            },
            gre_quantitative: {
                value: undefined
            },
            gre_writing: {
                value: undefined
            },
            research: {
                value: undefined
            },
            project: {
                value: undefined
            },
            recommendation: {
                value: undefined
            },
            email: {
                value: undefined
            },
            agreement: {
                value: undefined
            }
        },
        casesFields: {
            keys: {
                value: [],
            },
            cases: [{
                value: {},
            }],
        },
        };
    }

    handleUserFormChange = (changedFields) => {
        this.setState(({ userInfoFields }) => ({
            userInfoFields: { ...userInfoFields, ...changedFields },
        }));
    }

    handleCasesFormChange = (changedFields) => {
        // this is a wordaround, notice just the data that name index equal to value is valid.
        // it will happen when you delete the form field, the data will not be deleted meanwhile.
        // validate it before submit form.
        
        if (changedFields.cases !== undefined) {
            changedFields.cases.map((key, index) => {

                let cases = [...this.state.casesFields.cases];
                cases[index] = key;
                this.setState(({ casesFields }) => ({
                    casesFields: {
                        ...casesFields,
                        cases
                    }
                }));
                return null;
            });
        } else {
            this.setState(({ casesFields }) => ({
                casesFields: { ...casesFields, ...changedFields},
            }));
        }


      }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;

        const casesFields = this.state.casesFields;
        const userInfoFields = this.state.userInfoFields;
        return (
                <div className={styles.container}>

                    <div className={styles.contentContainer}> 
                        
                            {
                                current === 0 ?
                                <Steps>
                                <Step status="process" title="三维汇报" icon={<Icon type="loading" />} />
                                <Step status="wait" title="录取结果汇报" icon={<Icon type="solution" />} />
                                <Step status="wait" title="信息确认" icon={<Icon type="check-circle-o" />} />
                                <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                                </Steps>
                                : null
                            }

                            {
                                current === 1 ?
                                <Steps>
                                <Step status="finish" title="三维汇报" icon={<Icon type="user" />} />
                                <Step status="process" title="录取结果汇报" icon={<Icon type="loading" />} />
                                <Step status="wait" title="信息确认" icon={<Icon type="check-circle-o" />} />
                                <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                                </Steps>
                                : null
                            }

                            {
                                current === 2 ?
                                <Steps>
                                <Step status="finish" title="三维汇报" icon={<Icon type="user" />} />
                                <Step status="finish" title="录取结果汇报" icon={<Icon type="solution" />} />
                                <Step status="process" title="信息确认" icon={<Icon type="loading" />} />
                                <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                                </Steps>
                                : null
                            }
                        
                        <Divider />
                        {/* <div className="steps-content">{steps[this.state.current].content}</div> */}
                        {
                            current === 0 ? 
                                <div>
                                    <WrappedUserComplementReportForm {...userInfoFields} onChange={this.handleUserFormChange}/>
                                  
                                </div>
                                : null
                        }
                        {
                            current === 1 ? 
                                <div>
                                    <WrappedCaseReportForm {...casesFields} keys={this.state.casesFields.keys} onChange={this.handleCasesFormChange} />
                             
                                </div>
                                : null
                        }
                        {
                            current === 2 ? 
                                <div>
                                    <h1>信息确认</h1>
                                    <pre className="language-bash">
                                        {JSON.stringify(userInfoFields, null, 2)}
                                    </pre>
                                    <pre className="language-bash">
                                        {JSON.stringify(casesFields, null, 2)}
                                    </pre>
                                </div>
                                : null
                        }
                        <div className="steps-action">
                            {
                                this.state.current < 2
                                &&
                                <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                this.state.current === 2
                                &&
                                <Button type="primary" onClick={() => console.log('Processing complete!')}>Done</Button>
                            }
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                                </Button>
                            }
                        </div>
                      
                    
                    </div>        
                    <div className={styles.sidebarContainer}>
                    
                    </div>
                </div>     
        );
    }
}

CaseReport.propTypes = {
};

export default connect()(CaseReport);