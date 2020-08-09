import React from 'react';
import { connect } from 'react-redux';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { logout } from '../redux/actions/authAction';

const Profile = ({ logout }) => (
    <Background>
        <Logo />
        <Header>Profile Page</Header>
        <Paragraph>
            Your amazing app starts here. Open you favourite code editor and start
            editing this project.
    </Paragraph>
        <Button mode="outlined" onPress={() => logout()}>
            Logout
    </Button>
    </Background>
);

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Profile);

