import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { 
    flex: 1 
  },
  map: { 
    marginTop: 10,
    flex: 1,
    borderRadius: 5,
  },
  text: { 
    textAlign: "center", 
    marginTop: 20, 
    fontSize: 16 
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginBottom: 10,
  },
  mainContainer: { 
    flex: 1, 
    padding: 20, 
    justifyContent: "center" 
  }
});
