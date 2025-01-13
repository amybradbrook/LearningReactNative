import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.closeModal}/>
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
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
      },
      textInput:{
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        padding: 8
      },
      buttonContainer: {
        flexDirection:"row",
        marginTop: 16
      },
      button: {
        width: "30%",
        marginHorizontal: 8
      }
})