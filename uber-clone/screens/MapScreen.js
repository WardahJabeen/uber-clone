import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <View>
            <Text>MapScreen</Text>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                    />
                    <Stack.Screen
                        name='RideOptionCard'
                        component={RideOptionCard}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})