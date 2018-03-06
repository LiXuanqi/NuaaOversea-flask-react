import React from 'react';
import styles from './CaseCard.css';
import { Tag } from 'antd';

const CaseCard = ({major, degree, year, GPA, TOEFL, GRE}) => {
    return (
        <div className={styles.cardContainer}>
            <span className={styles.title}>{major}, {degree}, {year}</span>
            <div className={styles.tagsContainer}>
                <Tag color="blue">magenta</Tag>
                <Tag color="blue">red</Tag>
                <Tag color="blue">volcano</Tag>
            </div>
            <div className={styles.marksContainer}>
                <div className={styles.markContainer}>
                    <span className={styles.intro}>GPA</span>
                    <span className={styles.mark}>{GPA}</span>
                </div>
                <div className={styles.markContainer}>
                    <span className={styles.intro}>TOEFL</span>
                    <span className={styles.mark}>{TOEFL}</span>
                </div>
                <div className={styles.markContainer}>
                    <span className={styles.intro}>GRE</span>
                    <span className={styles.mark}>{GRE}</span>
                </div>       
            </div>

        </div>
    );
};

CaseCard.propTypes = {
};

export default CaseCard;
