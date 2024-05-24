import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";

interface TodoInputProps {
  onAddTodo: ({ name }: { name: string }) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [name, seName] = useState<string>("");

  const handleAddTodo = () => {
    onAddTodo({ name });
    seName("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={seName}
        placeholder="Write a task"
        onSubmitEditing={handleAddTodo}
      />

      <TouchableOpacity style={styles.iconContainer} onPress={handleAddTodo}>
        <Text>
          <FontAwesome6 name="add" size={24} color="black" />
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginRight: 10,
  },
  iconContainer: {
    marginLeft: "auto",
    width: "auto",
    backgroundColor: "lightgreen",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
});
