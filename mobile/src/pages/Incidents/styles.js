import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#eeeeee',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a'
    },

    description: {
        fontSize: 16,
        color: '#737380',
        lineHeight: 24
    },
    //----------------------------------------------Incidents

    incidentsList:{
        marginTop: 32
    },

    incident:{
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 8,
        marginBottom:16
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold",
    },

    incidentValue:{
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380'
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color:'#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
    incidentOng:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:44
    }

});