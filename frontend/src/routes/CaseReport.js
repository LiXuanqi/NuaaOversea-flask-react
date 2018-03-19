import React from 'react';
import { connect } from 'dva';
import styles from './UserReport.css';

import WrappedCaseReportForm from '../components/CaseReportForm';

class CaseReport extends React.Component {
    
    
    render() {
        return (
                <div className={styles.container}>

                    <div className={styles.contentContainer}> 
                    <WrappedCaseReportForm />
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