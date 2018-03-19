import React from 'react';
import { connect } from 'dva';
import styles from './UserReport.css';

import WrappedUserReportForm from '../components/UserReportForm';

class UserReport extends React.Component {
    
    
    render() {
        return (

            <div className={styles.container}>
                <div className={styles.contentContainer}> 
                <WrappedUserReportForm />
                </div>        
                <div className={styles.sidebarContainer}>
                </div>
            </div>     

        );
    }
}

UserReport.propTypes = {
};

export default connect()(UserReport);