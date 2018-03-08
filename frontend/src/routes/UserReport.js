import React from 'react';
import { connect } from 'dva';
import styles from './UserReport.css';

import Frame from '../components/Frame';
import WrappedUserReportForm from '../components/UserReportForm';

class UserReport extends React.Component {
    
    
    render() {
        return (
            <Frame>
                <div className={styles.container}>
                    <div className={styles.empty}/>
                    <div className={styles.contentContainer}> 
                    <WrappedUserReportForm />
                    </div>        
                    <div className={styles.sidebarContainer}>
                    </div>
                    <div className={styles.empty}/> 
                </div>     
            </Frame>
        );
    }
}

UserReport.propTypes = {
};

export default connect()(UserReport);