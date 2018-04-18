import React from 'react';


const CaseReportCheckCard = ({userInfoFields, casesFields}) => {
    return (
        <div>                                  
            <pre className="language-bash">
                {JSON.stringify(userInfoFields, null, 2)}
            </pre>
            <pre className="language-bash">
                {JSON.stringify(casesFields, null, 2)}
            </pre>
            {/* <span>本科专业：{userInfoFields.major.value[0]}</span> */}
        </div>
    );
};

CaseReportCheckCard.propTypes = {
};

export default CaseReportCheckCard;
