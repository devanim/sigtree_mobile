import { StyleSheet } from "react-native";

export const briefStyles = StyleSheet.create({
  containerCard: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 1,
    borderBottomColor: "#000",
  },
  twoRow: {
    flex: 2,
    flexDirection: "row"
  },
  ticketName: {
    fontWeight: "bold"
  },
  text: {
    margin: 5,
    color: "#000",
  },
  title: {
    margin: 5,
    color: "#000",
    fontWeight: "bold"
  },
  textView: {
    flex: 2,
    padding: 1,
    flexDirection: "row"
  },
  titleView: {
    textAlign: "center",
    width: '100%',
    fontSize: 25
  },
});