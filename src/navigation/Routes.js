import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';
import AuthStack from './AuthStack';
import UserStack from './UserStack';


const Routes = ({ auth }) => {
  return (
    <NavigationContainer>
      {auth.isLoggedIn ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


const mapStateToProps = ({ auth }) => ({
  auth
});


export default connect(mapStateToProps, null)(Routes);

