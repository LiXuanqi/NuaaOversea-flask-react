import React from 'react';
import { connect } from 'dva';

class Case extends React.Component {
    
    
    render() {
        return (
            <div>Hello</div>
        );
    }
}

Case.propTypes = {
};

export default connect()(Case);