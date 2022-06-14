import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialCommunityIcons, Entypo} from '@expo/vector-icons';

export default function Cameras() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'right',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <MaterialCommunityIcons name="camera-flip-outline" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </Camera>
            <TouchableOpacity
            style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
            }}
            >
                <Entypo name="circle" size={45} color="black" />
        </TouchableOpacity>
        
            <TouchableOpacity
                style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'left',
                }}
                onPress={() =>
                    navigation.navigate('Chats') }>
                <Feather name="message-square" size={35} color="black" />
            </TouchableOpacity>
        </View>  
    );
}