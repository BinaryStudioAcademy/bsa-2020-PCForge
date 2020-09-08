import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 20,
  },
  item: {
    color: '#ed2f2f',
  },
  itemWrapper: {
    zIndex: 200,
  },
  container: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 1
  },
});