import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  display: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
  },
  displayText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 24,
    color: "gray",
  },
  buttons: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
  },
  button: {
    width: '22%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    elevation:2,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  historyButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  historyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  historyItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
