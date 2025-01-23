import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  listContainer:{
    padding: 20,
    marginTop: 0,
    textAlign: 'center',
  },
  alert: {
    color: '#000000',
    fontSize: 14,
    padding: 10,
    backgroundColor: '#a0e695',
    marginTop: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  buttonContainer:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 0,
  },
  input: {
    minWidth: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default GlobalStyles;
