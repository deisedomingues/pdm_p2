import {
  useState
} from 'react';

import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  const [gatinho, setGatinho] = useState([]);

  
  const fetchGatos = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
    const data = await response.json();
    setGatinho(prevGatinhos => [...prevGatinhos, ...data]);
  };  

  
  const handlePress = () => {
    fetchGatos();  
  };

  return (
    <View style={styles.container}>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ver mais gatinhos</Text>
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
    padding: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3', // Material design blue 500
    padding: 12,
    borderRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 300,  
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
});
