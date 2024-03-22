import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import { useState } from 'react';
// import { Button } from './components/Button';

export default function App() {
  const [tituloLivro, setTituloLivro] = useState('');
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  
  const limparTexto = () => {
    setTituloLivro('');
  };
  
  const cadastrarLivro = () => {
    setMostrarTitulo(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.tex}>Cadastrar o seu pet:</Text>
       <View style={styles.card}>
          <View style={styles.cardText}>
          <Text style={styles.text}>Nome do pet: </Text>
          <TextInput
              placeholder='nome do pet'
              style={styles.input}
              value={tituloLivro}
              onChangeText={text => setTituloLivro(text)}
            />
          </View>
        <Image style={styles.logo}
          source={{uri: 'https://img.freepik.com/fotos-gratis/um-gato-brincalhao-espreitando-por-tras-de-uma-superficie-branca_60438-3920.jpg?size=626&ext=jpg'}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Limpar" onPress={limparTexto} color="#DA0037" style={styles.btn}/>
          <Button title="Cadastrar"  color="#11999E" onPress={cadastrarLivro} />
        </View>
        {mostrarTitulo && <Text style={styles.tituloLivro}>{tituloLivro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    margin: '10px',
    backgroundColor: '#F1EFEF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tex: {
    backgroundColor: '#FB6D48',
    padding: '20px',
    margin: '20px',
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  tituloLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    margin: '10px',
    padding:'10px',
    backgroundColor: '#FB6D48',
  },
  card: {
    margin: 10,
    width: 300,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center,'
    },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
  },
  logo: {
    width: 70,
    height: 70,
  }, 
  buttonContainer: {
    width: 200,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#FE7A36',
    color: '#41C9E2',
  },
})
