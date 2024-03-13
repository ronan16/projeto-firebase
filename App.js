import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//add
import config from "./src/database/config";
import { createConnection } from "typeorm";


export default function App() {

  // add a useCallback hook
  const connect = React.useCallback(async () => {
    try {
      const connection = await createConnection(config); // create a connection with our config
    } catch (err) {
      console.log(err); // check (or deal) with connection errors
    }
  });

  // Important: connect inside a dependency-free useEffect hook to avoid multiple calls.
  React.useEffect(() => {
    connect(); // this must be done once in the App's entry point (I suggest here in App.js)
  }, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
