import React from 'react'
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native'
import { Fonts } from '../theme'

const ListItem = ({ item }) => <View style={styles.listItem}>
    <Text>{item}</Text>
</View>

const MealDetails = ({ route }) => {
    const { meal } = route.params
    return <ScrollView>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.complexity.toUpperCase()}</Text>
            <Text>{meal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.subHeader}>Ingredients</Text>
        {meal.ingredients.map(ingredient => <ListItem key={ingredient} item={ingredient}></ListItem>)}
        <Text style={styles.subHeader}>Steps</Text>
        {meal.steps.map(step => <ListItem key={step} item={step}></ListItem>)}
    </ScrollView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20
    },
    subHeader: {
        alignSelf: 'center',
        fontFamily: Fonts.bold,
        fontSize: 20
    },
    listItem: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 10
    }
})

export default MealDetails
