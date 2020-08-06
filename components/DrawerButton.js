import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const DrawerButton = ({ navigation }) => {
    return <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
        <Ionicons name='ios-menu' size={30} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    }
})

export default DrawerButton
