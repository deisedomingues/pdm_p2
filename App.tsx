import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View
  } from 'react-native';

import {
  useState
  } from 'react';

import {
  CAT_API
  } from 'react-native-dotenv';

  
  export default function App() {
    const { CAT_API } = process.env;
    const [gatinho, setGatinho] = useState<Gatos[]>([]);

  return (

    <View style={styles.container}>

      <Pressable
      style={styles.button}>
        <Text
          style={styles.buttonText}>
            Ver mais gatinhos
        </Text>
      </Pressable>
      
    </View>
  );
  }


  const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },

  button: {
    width: '10%',
    backgroundColor: '#0096F3', //material design blue 500
    padding: 12,
    borderRadius: 4
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  }

  });
  
