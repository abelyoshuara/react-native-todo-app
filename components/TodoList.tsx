import { FlatList, StyleSheet, Text, View } from "react-native";
import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  onDeleteTodo,
  onUpdateTodo,
}: TodoListProps) {
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            {...item}
            onDeleteTodo={() => onDeleteTodo(item.id)}
            onUpdateTodo={() => onUpdateTodo(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        ListEmptyComponent={<Text>No items</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
