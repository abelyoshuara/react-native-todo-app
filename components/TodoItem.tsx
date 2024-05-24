import { Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function TodoItem({ name, isCompleted }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Pressable onPress={() => console.log("Pressed test")}>
        {isCompleted ? (
          <Feather name="check-square" size={24} color="black" />
        ) : (
          <Feather name="square" size={24} color="black" />
        )}
      </Pressable>
      <Text>{name}</Text>
      <View style={styles.iconContainer}>
        <Feather
          name="trash"
          size={24}
          color="red"
          onPress={() => console.log("delete")}
        />
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
