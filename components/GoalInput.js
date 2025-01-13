import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        props.closeModal();
    }

    return(
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} style={styles.image}/>
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.closeModal} color = "#f31282"/>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#311b6b"
      },
      textInput:{
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        width: "80%",
        padding: 8,
        color: "120438",
        padding:16
      },
      buttonContainer: {
        flexDirection:"row",
        marginTop: 16
      },
      button: {
        width: "30%",
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      }
})