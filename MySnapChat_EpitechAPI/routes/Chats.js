import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons'

export default function App() {
    return (
        <SafeAreaView>
            <View >
                <Text style={styles.home}>CHAT</Text>
            </View>
            <TouchableOpacity style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.user}>
                        <View style={styles.iconContainer}>
                            <AntDesign name="user" size={20} color="red" />
                        </View>
                        <View>
                            <Text style={styles.title}>Charlotte</Text>
                            <View style={styles.newConatiner}>
                                <View style={styles.newSnap} />
                                <Text>New Snap . 2min ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.replayIcon}>
                        <Ionicons name="camera-outline" size={30} color="red" />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.user}>
                        <View style={styles.iconContainer}>
                            <AntDesign name="user" size={20} color="red" />
                        </View>
                        <View>
                            <Text style={styles.title}>Johanna</Text>
                            <View style={styles.newConatiner}>
                                <View style={styles.open} />
                                <Feather name="send" size={24} color="red" />
                                <Text> Open . 5min ago</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.replayIcon}>
                        <Ionicons name="camera-outline" size={30} color="red" />
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        fontSize: 20,
        marginTop: 15,
        marginLeft: 75,
    },

    container: {
        marginTop: 20,
        padding: 10,
    },

    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    user: {

        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontSize: 20,
    },

    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 45 / 2,
        padding: 10,
        borderColor: "red",
        borderWidth: 2,
        marginRight: 10,
    },

    newConatiner: {
        flexDirection: "row",
        alignItems: "center",
    },

    newSnap: {
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: "red",
        marginRight: 10,
        marginVertical: 5,
    },

    replayIcon: {
        padding: 10,
        borderLeftWidth: 2,
        borderLeftColor: "#ccc",
    },
})