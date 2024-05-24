import { View, StyleSheet, Text } from "react-native";

const Tab = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.tabs}>{children}</View>;
};

const Item = ({ value, isActive }: { value: string; isActive: boolean }) => {
  return (
    <View
      style={[
        styles.tabItem,
        { backgroundColor: isActive ? "lightgreen" : "#fff" },
      ]}
    >
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    paddingBottom: 25,
    columnGap: 7,
  },
  tabItem: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 50,
  },
});

Tab.Item = Item;

export default Tab;
