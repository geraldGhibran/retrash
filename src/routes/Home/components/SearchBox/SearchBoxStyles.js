import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
const styles = {
    searchBox: {
        top: 60,
        position: "absolute",
        width: width
    },
    inputWrapper: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: "#fff",
        opacity: 0.9,
        borderRadius: 7
    },
    secondInputWrapper: {
        marginHorizontal: 15,
        marginTop: 0,
        backgroundColor: "#fff",
        opacity: 0.9,
        borderRadius: 7
    },
    inputSearch: {
        fontSize: 14
    },
    label: {
        fontSize: 10,
        fontStyle: "italic",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 0
    }
};

export default styles;