import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from '@react-native-community/google-signin';
import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => {

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '103375050274-lp2q3th8bmi10nr51kscsktg4svn4jcr.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    console.log('run effect');
  }, []);
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);

  const _signIn = async () => {
    setIsSigninInProgress(true)
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo: ', userInfo);
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
    setIsSigninInProgress(false)
  };

  return (
    <Background style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Logo />
      <Header>An alternative E-commerce</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
    </Paragraph>

      {/* <View style={styles.sectionContainer}> */}
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        disabled={isSigninInProgress} />
      {/* </View> */}
    </Background>
  )
}

export default memo(HomeScreen);
