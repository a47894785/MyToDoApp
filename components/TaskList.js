import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions
} from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { useColorMode } from "native-base";
import { Feather } from "@expo/vector-icons";
import COLORS from "../theme/theme";

const TaskList = ({ tasks, setTasks }) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const { width: screenWidth } = useWindowDimensions();

  const taskItemBg = isDarkMode ? COLORS.dark : COLORS.white;
  const taskItemText = isDarkMode ? COLORS.white : COLORS.dark;

  const handleCheckboxPress = index => {
    const taskIndex = parseInt(tasks.findIndex(obj => obj.key === index));
    setTasks(() => {
      return [
        ...tasks.slice(0, taskIndex),
        {
          ...tasks[taskIndex],
          done: !tasks[taskIndex].done
        },
        ...tasks.slice(taskIndex + 1)
      ];
    });
  };

  const handleDelete = (rowMap, index) => {
    const newData = [...tasks];
    const taskIndex = parseInt(tasks.findIndex(obj => obj.key === index));
    newData.splice(taskIndex, 1);
    setTasks(newData);
  };

  return (
    <View>
      <SwipeListView
        data={tasks}
        renderItem={data => {
          return (
            <View
              style={[
                styles.rowFront,
                { height: 60, backgroundColor: taskItemBg }
              ]}
            >
              <Pressable
                onPress={() => {
                  handleCheckboxPress(data.item.key);
                }}
                style={{ width: 26, height: 26 }}
              >
                <AnimatedCheckbox
                  checked={data.item.done}
                  checkmarkColor={COLORS.white}
                  highlightColor={COLORS.primary}
                  boxOutlineColor={COLORS.gray}
                />
              </Pressable>
              <Text
                style={[
                  data.item.done
                    ? styles.taskTextStraightThrough
                    : styles.taskText,
                  { color: taskItemText }
                ]}
              >
                {data.item.task}
              </Text>
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          return (
            <View style={styles.rowBack}>
              <Feather
                name="trash-2"
                size={30}
                style={{
                  color: COLORS.white,
                  position: "absolute",
                  right: 10,
                  top: 15
                }}
                onPress={() => handleDelete(rowMap, data.item.key)}
              />
            </View>
          );
        }}
        rightOpenValue={-75}
        disableRightSwipe
        rightActivationValue={-200}
        stopRightSwipe={-100}
        rightActionValue={-screenWidth}
        swipeToOpenPercent={10}
        swipeToClosePercent={10}
        useNativeDriver={false}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  rowFront: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: COLORS.dark,
    borderRadius: 6
  },
  rowBack: {
    height: 60,
    backgroundColor: COLORS.red,
    alignItems: "center",
    marginLeft: 40,
    marginRight: 20,
    borderRadius: 8
  },
  taskText: {
    paddingLeft: 10,
    fontSize: 20
  },
  taskTextStraightThrough: {
    paddingLeft: 10,
    fontSize: 20,
    textDecorationLine: "line-through"
  }
});
