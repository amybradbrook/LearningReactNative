import {Pressable, StyleSheet} from 'react-native'
import {View, Text} from 'react-native'

function GoalItem(props ) {
    
    return(
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.deleteFunction.bind(this, props.id)} >
                <Text style = {styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 4,
        fontSize:16,
        backgroundColor: "#5e0acc",
    }, 
    goalText: {
        color: "white",
        padding:8
    }
})