import { StyleSheet } from "react-native";

export const articleBriefStyles = StyleSheet.create({
  containerCard: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 15
  },
  default: {
    margin: 5,
    color: "#000",
  }, 
  firstRow: {
    flex: 2,
    flexDirection: "row"
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: "auto"
  },
  title: {
    marginRight: "auto",
    color: "#000"
  }
});