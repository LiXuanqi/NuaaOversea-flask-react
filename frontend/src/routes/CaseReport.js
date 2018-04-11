import React from 'react';
import { connect } from 'dva';
import styles from './UserReport.css';
import { Steps, Icon, Button} from 'antd';

import WrappedCaseReportForm from '../components/CaseReportForm';


const Step = Steps.Step;


class CaseReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
          fields: {
            keys: {
                value: [],
            },
            cases: [{
                value: {},
            }],
          },
        };
    }

    handleFormChange = (changedFields) => {
        // this is a wordaround, notice just the data that name index equal to value is valid.
        // it will happen when you delete the form field, the data will not be deleted meanwhile.
        // validate it before submit form.
        
        if (changedFields.cases !== undefined) {
            changedFields.cases.map((key, index) => {
                console.log(key);
                console.log(index);
                let cases = [...this.state.fields.cases];
                cases[index] = key;
                console.log(cases);
                this.setState(({ fields }) => ({
                    fields: {
                        ...fields,
                        cases
                    }
                }));
                
            });
        } else {
            this.setState(({ fields }) => ({
                fields: { ...fields, ...changedFields},
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

        const fields = this.state.fields;

        return (
                <div className={styles.container}>

                    <div className={styles.contentContainer}> 
                        <Steps>
                            <Step status="finish" title="三维汇报" icon={<Icon type="user" />} />
                            <Step status="finish" title="录取结果汇报" icon={<Icon type="solution" />} />
                            <Step status="process" title="信息确认" icon={<Icon type="loading" />} />
                            <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
                        </Steps>
                        {/* <div className="steps-content">{steps[this.state.current].content}</div> */}
                        {
                            current === 0 ? 
                                <div>
                                    
                                </div>
                                : null
                        }
                        {
                            current === 1 ? 
                                <div>
                                    <WrappedCaseReportForm {...fields} keys={this.state.fields.keys} onChange={this.handleFormChange} />
                                    <pre className="language-bash">
                                        {JSON.stringify(fields, null, 2)}
                                    </pre>
                                </div>
                                : null
                        }
                        {
                            current === 2 ? 
                                <div>
                                    <h1>信息确认</h1>
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