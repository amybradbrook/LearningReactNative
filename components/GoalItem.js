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
        padding:5,
        backgroundColor: "#e4d0ff",
    }, 
    goalText: {
        color: "1e085a",
        padding:8,
        fontSize:20
    }
})