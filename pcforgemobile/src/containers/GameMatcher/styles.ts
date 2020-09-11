import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  selectButton: {
    marginBottom: 20,
    alignSelf: 'stretch'
  },
  selectGame: {
    marginTop: 10,
    alignSelf: 'stretch'
  },
  selectCpu: {
    alignSelf: 'stretch'

  },
  selectGpu: {
    alignSelf: 'stretch'
  },
  selectRam: {
    color: '#fff',
  },
  slider: {
    marginTop: 20,
  },
  selectedRam: {
    marginTop: 10,
    color: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 150,
  },
  header: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 10,
  },
  canRunButton: {
    justifyContent: 'center',
  }
});