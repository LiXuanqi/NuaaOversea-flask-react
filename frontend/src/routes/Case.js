import React from 'react';
import { connect } from 'dva';
import styles from './Case.css';

import Frame from '../components/Frame';
import CaseCard from '../components/CaseCard';
import { Divider } from 'antd';
import ResultCard from '../components/ResultCard';
class Case extends React.Component {
    
    
    render() {
        return (
            <Frame>
                <div className={styles.container}>
                    <div className={styles.empty} />
                    <div className={styles.content}>
                        <CaseCard
                            major="Computer Science"
                            degree="Phd"
                            year="2018"
                            GPA="3.0"
                            TOEFL="91"
                            GRE="318"
                        />  
                        <h2>案例特色</h2>
                        <Divider />
                        <h2>正文</h2>
                        <Divider />
                        <h2>录取结果</h2>
                        <ResultCard
                            university="CMU"
                            major="MS in Marketing"
                            result="rej"
                        />
                        <ResultCard
                            university="CMU"
                            major="MS in Marketing"
                            result="ad"
                        />  
                        <ResultCard
                        university="CMU"
                        major="MS in Marketing"
                        result="ad"
                        />
                    </div>
                    <div className={styles.empty} />
                </div>
            </Frame>
        );
    }
}

Case.propTypes = {
};

export default connect()(Case);