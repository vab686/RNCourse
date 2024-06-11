import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
  const [fatchMessages, setFatchMessages] = useState('');

  const atuhCtx = useContext(AuthContext);

  const token = atuhCtx.token;

  useEffect(() => {
    axios.get(
      `https://react-native-course-6fc00-default-rtdb.firebaseio.com/messsage.json?auth=${token}`
    )
      .then(response => {
        setFatchMessages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fatchMessages}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
