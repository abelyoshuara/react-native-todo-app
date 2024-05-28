import { useReducer, useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Figtree_400Regular } from "@expo-google-fonts/figtree";
import { Action, initialTodos, todosReducer } from "./reducers/todos";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Tab from "./components/Tab";
import { Todo } from "./types/Todo";

export default function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [status, setStatus] = useState<"all" | "uncompleted" | "completed">(
    "all",
  );

  const [fontsLoaded] = useFonts({
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

  const handleUpdateTodo = (id: number) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: { id },
    } as Action);
  };

  const getFilteredTodos = () => {
    const copyTodos: Todo[] = todos.slice();
    if (status === "uncompleted") {
      return copyTodos.filter((todo: Todo) => !todo.isCompleted);
    } else if (status === "completed") {
      return copyTodos.filter((todo: Todo) => todo.isCompleted);
    } else {
      return copyTodos;
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={{ flex: 1, paddingBottom: 130 }}>
          <Text style={styles.title}>Todo List App</Text>

          <Tab>
            <Pressable onPress={() => setStatus("all")}>
              <Tab.Item value="All" isActive={status === "all"} />
            </Pressable>
            <Pressable onPress={() => setStatus("uncompleted")}>
              <Tab.Item
                value="Uncompleted"
                isActive={status === "uncompleted"}
              />
            </Pressable>
            <Pressable onPress={() => setStatus("completed")}>
              <Tab.Item value="Completed" isActive={status === "completed"} />
            </Pressable>
          </Tab>

          <TodoList
            todos={getFilteredTodos()}
            onDeleteTodo={handleDeleteTodo}
            onUpdateTodo={handleUpdateTodo}
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
    textAlign: "left",
    paddingTop: 45,
    paddingBottom: 8,
    fontFamily: "Figtree_400Regular",
  },
});
