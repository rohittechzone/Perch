import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, useWindowDimensions, ScrollView, Pressable, Modal, Keyboard, ActivityIndicator } from 'react-native';
import AppHeader from "../components/header.js";
import { useFonts } from 'expo-font';
import { Divider } from '@rneui/themed';

export default function Home() {
    const [fontsLoaded] = useFonts({
        'Hostania': require('../assets/fonts/Hostania.ttf'),
      });
       return (
        <View style={{backgroundColor: '#FCF9E2', height:"100%"}}>
                <AppHeader />
                <Text style={{fontFamily: "Hostania", fontSize: 25, top: 25, left: 25}}>Hey Rohit</Text>
                <View style={{minHeight: 200, overflow: 'hidden' }}>
                <View style={{height: 100, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', padding: 25, paddingTop: 45}}>
                <View style={{height: 100}}>
                        <View style={[styles.small_container, styles.shadow]}>
                        <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-between', flex: 1}}>
                                <Text style={{fontSize: 65, alignSelf: 'center'}}>😁</Text>
                                <Text style={{fontSize: 12, bottom: 5, alignSelf: 'center', fontFamily: "Hostania"}}>Happy</Text>
                        </View>
                        </View>
                        <Text style={{fontSize: 13, top:5, alignSelf: 'center', fontFamily: "Hostania"}}>Mood</Text>
                    </View>
                    <View style={{height: 100}}>
                        <View style={[styles.small_container, styles.shadow]}>
                        <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-between', flex: 1}}>
                                <Text style={{fontSize: 65, alignSelf: 'center'}}>😁</Text>
                                <Text style={{fontSize: 12, bottom: 5, alignSelf: 'center', fontFamily: "Hostania",}}>1/5 Hrs</Text>
                        </View>
                        </View>
                        <Text style={{fontSize: 13, top:5, alignSelf: 'center', fontFamily: "Hostania", width: 100, textAlign: 'center'}}>Hours Meditated</Text>
                    </View>
                    <View style={{height: 100}}>
                        <View style={[styles.small_container, styles.shadow]}>
                        <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'space-between', flex: 1}}>
                                <Text style={{fontSize: 65, alignSelf: 'center'}}>😁</Text>
                                <Text style={{fontSize: 12, bottom: 5, alignSelf: 'center', fontFamily: "Hostania"}}>2 Hrs</Text>
                        </View>
                        </View>
                        <Text style={{fontSize: 13, top:5, alignSelf: 'center', fontFamily: "Hostania", width: 100, textAlign: 'center'}}>Mindless Scrolling</Text>
                    </View>
                </View>
                </View>

                {/* Mood summary */}
                <View style={{paddingLeft: 25, paddingRight: 25}}>
                   <View style={[styles.big_container, styles.shadow]}>
                    <Text style={{fontSize: 12, top: 5, alignSelf: 'center', fontFamily: "Hostania"}}>
                       Your daily mood summary
                    </Text>
                    <Text style={{fontSize: 65, alignSelf: 'center'}} >😐</Text>
                    <Text style={{fontSize: 8, top: -5, alignSelf: 'center', fontFamily: "Hostania"}}>Tap me!</Text>
                   </View>  
                </View> 
                
                {/* Quick Shortcut buttons */}
                <View style={{padding: 25}}>
                    
                  <View style={[styles.big_container, styles.shadow]}></View>  
                </View>    

                {/* Exxtra features */}
                <View style={{paddingLeft: 25, paddingRight: 25}}>
                    
                  <View style={[styles.big_container, styles.shadow]}></View>  
                </View>    
        </View>
    )
}

const styles = StyleSheet.create({
  stats_container: {
     top: 25, 
     flex: 1, 
     flexDirection: 'row', 
     justifyContent: 'space-between', 
     padding: 20
  },
  small_container: {
    height: 100,
    width: 100,
    backgroundColor: '#e8def7',
    borderRadius: 19
  },
  big_container: {
    height: 100,
    width: "100%",
    alignSelf: 'center',
    backgroundColor: '#e8def7',
    borderRadius: 19,
    position: 'relative',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});