import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, useWindowDimensions, ScrollView, Pressable, Modal, Keyboard, ActivityIndicator } from 'react-native';
import AppHeader from "../components/header.js";

export default function Home() {
       return (
        <View style={{backgroundColor: '#FCF9E2', height:"100%"}}>
                <AppHeader />
                <Divider inset={true} insetType="middle" />
                <Text>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 
});