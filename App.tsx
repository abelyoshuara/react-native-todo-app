import { useMemo, useReducer, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts, Figtree_400Regular } from "@expo-google-fonts/figtree";
import { Action, initialTodos, todosReducer } from "./reducers/todos";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  let [fontsLoaded] = useFonts({
    Figtree_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleAddTodo = ({ name }: { name: string }) => {
    dispatch({
      type: "ADD_TODO",
      payload: { name, isCompleted: false },
    } as Action);
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    } as Action);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={{ flex: 1, paddingBottom: 130 }}>
          <Text style={styles.title}>Todo List App</Text>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={() => {}}
          />
        </View>
        <TodoInput onAddTodo={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingTop: Platform.OS === "android" ? 25 : 15,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    color: "#334155",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 45,
    paddingBottom: 25,
    fontFamily: "Figtree_400Regular",
  },
});
