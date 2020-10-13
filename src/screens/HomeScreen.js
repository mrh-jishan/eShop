import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { authInit, authSuccess } from './../redux/actions/authAction';

const webClientId = '103375050274-lp2q3th8bmi10nr51kscsktg4svn4jcr.apps.googleusercontent.com'

const HomeScreen = ({ navigation, loginInit, loginSuccess }) => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/user.gender.read',
        'https://www.googleapis.com/auth/user.phonenumbers.read'],
      webClientId: webClientId,
      offlineAccess: true,
      iosClientId: webClientId
    });
    console.log('webclientid');
  }, [webClientId]);

  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  const _signIn = async () => {
    // setIsSigninInProgress(true)
    loginInit();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo: ', userInfo);
      loginSuccess(userInfo)
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log('error: ', error);
    }
    // navigation.navigate('RegisterScreen');
  };

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Logo />
      <Header>An alternative E-commerce</Header>
      <Paragraph>
        The easiest way to buy & sell your goods.
    </Paragraph>

      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        disabled={isSigninInProgress} />
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  loginInit: () => dispatch(authInit()),
  loginSuccess: (body) => dispatch(authSuccess(body)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
