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
  gameHeader: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 3
  },
  gameContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 35,
    zIndex: 3
  },
  cpuHeader: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 70,
    zIndex: 2
  },
  cpuContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 95,
    zIndex: 2
  },
  gpuHeader: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 130,
    zIndex: 1
  },
  gpuContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 155,
    zIndex: 1
  },
});