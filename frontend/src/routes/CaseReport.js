import React from 'react';
import { connect } from 'dva';
import styles from './UserReport.css';
import { Steps, Icon } from 'antd';
import WrappedCaseReportForm from '../components/CaseReportForm';

const Step = Steps.Step;
  
class CaseReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
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
                        <div className="steps-content">
                            <WrappedCaseReportForm/>
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