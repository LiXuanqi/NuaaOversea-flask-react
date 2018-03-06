import React from 'react';
import styles from './Cover.css'
const Cover = () => {
    return (
        <div style={{paddingTop: '64px'}}>
            <div className={styles.coverPic}>
                <img src="../../public/cover.jpg" alt="cover" height="457px" width="100%"/>
                <div className={styles.coverPicMask}/>
                <div className={styles.textLayer}>
                    <div className={styles.maskContent}>
                        <div className={styles.contentText}>
                            <span className={styles.title}>Unsplash</span>
                            <span className={styles.intro1}>Beautiful, free photos.</span>
                            <span className={styles.intro2}>Gifted by the world’s most generous community of photographers.</span>
                            <div className={styles.searchContainer}></div>
                        </div>
                    </div>         
                    
                </div>
            </div>
            
            
        </div>
    );
};

Cover.propTypes = {
};

export default Cover;