import fotoGatinho from './assets/gato.png';

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
    const novosGatinhos = await response.json();
    setGatinho(antigosGatinhos => [...antigosGatinhos, ...novosGatinhos]);
    
  };

  const buscarGatinhos = () => {
    fetchGatos();  
  };

  return (
    <View style={styles.container}>

      <Image source={fotoGatinho} style={styles.gatinhoImagem} />

      <Pressable style={styles.button} onPress={buscarGatinhos}>
        <Text style={styles.buttonText}>Ver mais gatinhos</Text>
      </Pressable>

      <FlatList
        data={gatinho}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }} 
            style={styles.gatinhosLista}
          />
        )}
      />
     
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
    width: '20%',
    backgroundColor: '#8e2b1a',
    padding: 12,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  gatinhosLista: {
    width: 300,  
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  gatinhoImagem:{
    width: 320,
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
  }

});