import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import  { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false);
  
  const atuhCtx = useContext(AuthContext);

  const signupHandler = async (credentials) => {
    setIsLoading(true);
    try {
      const token = await createUser(credentials.email, credentials.password);
      atuhCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!!', 'Try again later', [{ text: 'Okay' }]);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating User ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
