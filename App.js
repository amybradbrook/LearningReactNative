import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endGoalHandler() {
    setModalIsVisible(false)
  }


  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#e4d0ff" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} closeModal={endGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={itemData => {
            return (
              <GoalItem id = {itemData.item.id} text={itemData.item.text} deleteFunction={deleteGoalHandler}/>
            )
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  goalsContainer:{
    flex:5
  },
});
