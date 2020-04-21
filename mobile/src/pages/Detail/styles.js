import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#e0e0e0',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 48
    },
    incident:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 24,
        marginBottom: 16
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: "bold",
        marginTop: 24,
    },

    incidentValue:{
        marginTop: 8,
        
        fontSize: 15,
        color: '#737380'
    },
    contactBold:{
        fontSize:20,
        fontWeight: 'bold',
        color:'#13131a',
        lineHeight: 30
    },
    contactBox:{
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 24,
    },
    contactText:{
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380'
    },
    action:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    actionText:{
        color: 'white',
        fontWeight:'bold'
    },
    actionButton:{
        borderRadius: 8,
        width: '48%',
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E02041'
    }
    
})