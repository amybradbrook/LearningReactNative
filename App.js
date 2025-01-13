import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput}/>
        <Button title="Add goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingBottom: 50,
    paddingLeft:20,
    paddingRight:20
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textInput:{
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8
  }
});
