import React from 'react'
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from 'expo-mail-composer';

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' } ).format(incident.value)}.`

    function navigateToIncidents() {
        navigation.navigate('Incidents')
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg}></Image>

            <TouchableOpacity style={styles.returnButton} onPress={navigateToIncidents}>
                <Feather name="arrow-left" size={28} color="#E02041"/>
            </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                
                    <View>
                        <Text style={ [styles.incidentProperty, {marginTop: 0}]}>CASO:</Text>
                        <Text style={ styles.incidentValue}>{incident.title}</Text>
                    </View>                        
                    <View>
                        <Text style={ [styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                        <Text style={ styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                    </View>

                <Text style={ styles.incidentProperty}>DESCRIÇÃO:</Text>
                <Text style={ styles.incidentValue}>{incident.description}</Text>

                <Text style={ styles.incidentProperty}>VALOR:</Text>
                <Text style={ styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactBold}>Salve o Dia!</Text>
                <Text style={styles.contactBold}>Seja o herói desse caso.</Text>
                <Text style={styles.contactText}>Entre em contato</Text>

                <View style={styles.action}>
                    <TouchableOpacity style={styles.actionButton} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}