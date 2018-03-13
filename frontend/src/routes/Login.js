import React from 'react';
import { connect } from 'dva';
import Frame from '../components/Frame';

class Login extends React.Component {   
    render() {
        return (
            <Frame>
                <h1>Login Page</h1>
            </Frame>
        );
    }
}

Login.propTypes = {
};

export default connect()(Login);