import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider, useColorMode } from "native-base";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../theme/theme";
import NavBar from "../components/NavBar";
import bg_img from "../assets/bg_img.png";
import TaskList from "../components/TaskList";
import { Ionicons } from "@expo/vector-icons";
import { initTasks } from "../components/initTasks";

const Tasks = () => {
  const { colorMode } = useColorMode();
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(initTasks);
  const [taskInput, setTaskInput] = useState(null);

  // theme colors
  const bgTask = colorMode === "dark" ? COLORS.dark : COLORS.white;
  const textColor = colorMode === "dark" ? COLORS.white : COLORS.dark;
  // console.log(bgTask);

  const handleMenuButton = useCallback(
    () => {
      navigation.openDrawer();
    },
    [navigation]
  );

  const handleAddTask = () => {
    Keyboard.dismiss();
    const maxKeyValue = Math.max(...tasks.map(obj => parseInt(obj.key)));
    // console.log(maxKeyValue);
    if (taskInput === null) {
      console.log("error");
    } else {
      const newTask = {
        key: maxKeyValue + 1,
        task: taskInput,
        done: false
      };
      // console.log(newTask);
      setTasks([newTask, ...tasks]);
      setTaskInput(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.NavBar}>
        <NavBar color={"#ffffff"} onPress={handleMenuButton} />
      </View>
      <Image source={bg_img} style={styles.img} />
      <View style={[styles.taskContainer, { backgroundColor: bgTask }]}>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </View>
      <KeyboardAvoidingView style={styles.addTask}>
        <TextInput
          placeholder="Add a new task"
          placeholderTextColor={COLORS.gray}
          value={taskInput}
          onChangeText={text => setTaskInput(text)}
          style={[
            styles.inputText,
            { backgroundColor: bgTask, color: textColor }
          ]}
        />
        <View style={styles.addButton}>
          <Ionicons
            name="add-circle"
            size={50}
            color={COLORS.primary}
            onPress={handleAddTask}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLORS.primary
  },
  NavBar: {
    position: "absolute",
    top: 50,
    left: 20
  },
  taskContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 323,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingTop: 25,
    paddingBottom: 70,
    paddingHorizontal: 20
  },
  img: {
    height: 340,
    width: 340,
    resizeMode: "contain",
    marginLeft: 25,
    marginTop: 42
  },
  addTask: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 10,
    paddingRight: 20
  },
  addButton: {},
  inputText: {
    width: "80%",
    height: "80%",
    borderRadius: 60,
    borderColor: COLORS.gray,
    borderWidth: 2,
    paddingHorizontal: 15
  }
});
