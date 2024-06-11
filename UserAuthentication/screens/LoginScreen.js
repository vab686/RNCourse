import { useState, useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const atuhCtx = useContext(AuthContext);

  const loginHandler = async (credentials) => {
    setIsLoading(true);
    try {
      const token = await loginUser(credentials.email, credentials.password);
      atuhCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!!', 'Try again later', [{ text: 'Okay' }]);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging you in ..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
