import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    display: {
      flex: 2,
      justifyContent: "center",
      alignItems: "flex-end",
      padding: 20,
      backgroundColor: "#dcdcdc",
    },
    displayText: {
      fontSize: 36,
      color: "#333",
    },
    resultText: {
      fontSize: 28,
      color: "#888",
    },
    buttons: {
      flex: 5,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    historyContainer: {
      flex: 3,
      padding: 10,
      backgroundColor: "#f5f5f5",
    },
    historyTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    historyItem: {
      fontSize: 16,
      color: "#555",
      marginBottom: 5,
    },
  });

  export default styles;