import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  actions: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    marginLeft: 5,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  form: {
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    minWidth: 100,
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
  },
  icon: {
    color: '#333',
  },
  callButton: {
    paddingRight: 25,
  },
  deleteButton: {
    paddingLeft: 25,
  },
});

export default styles;
