import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number) => void;
}

export default function TodoItem({
  id,
  name,
  isCompleted,
  onDeleteTodo,
  onUpdateTodo,
}: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => onUpdateTodo(id)}>
        {isCompleted ? (
          <Feather name="check-square" size={24} color="black" />
        ) : (
          <Feather name="square" size={24} color="black" />
        )}
      </Pressable>
      <Text>{name}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onDeleteTodo(id)}>
          <Feather name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    columnGap: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 17,
    paddingHorizontal: 17,
    borderRadius: 7,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.5,
    // shadowRadius: 1,
    // elevation: 10,
  },
  iconContainer: {
    marginLeft: "auto",
    color: "#f00",
  },
});
