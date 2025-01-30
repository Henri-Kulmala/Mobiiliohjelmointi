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
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
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
