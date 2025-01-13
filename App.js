import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText){
    if (enteredGoalText!==""){
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    }
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id!==id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return (
            <GoalItem id = {itemData.item.id} text={itemData.item.text} deleteFunction={deleteGoalHandler}/>
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: "white"
  },
  goalsContainer:{
    flex:5
    
  },
});
