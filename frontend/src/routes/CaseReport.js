import React from 'react';
import { connect } from 'dva';
import styles from './CaseReport.css';

import Frame from '../components/Frame';
import WrappedCaseReportForm from '../components/CaseReportForm';

class CaseReprot extends React.Component {
    
    
    render() {
        return (
            <Frame>
                <div className={styles.container}>
                    <div className={styles.empty}/>
                    <div className={styles.contentContainer}> 
                    <WrappedCaseReportForm />
                    </div>        
                    <div className={styles.sidebarContainer}>
                    </div>
                    <div className={styles.empty}/> 
                </div>     
            </Frame>
        );
    }
}

CaseReprot.propTypes = {
};

export default connect()(CaseReprot);