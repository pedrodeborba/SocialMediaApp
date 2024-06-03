//rnfs
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

interface Props {
    onSubmit: (content: string) => void;
}

export default function AddPostForm({ onSubmit }: Props) {
    const [content, setContent] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="What's on your mind?"
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <TouchableOpacity 
                onPress={() => {
                    onSubmit(content);
                    setContent('');
                }} 
                style={styles.button}
            >
                <Text style={styles.textButton}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '65%',
        height: 40,
        borderColor: '#eaeaea',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        paddingLeft: 20,
    },
    button: {
        width: '30%',
        height: 40,
        backgroundColor: '#43A5FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 20,
    },
    textButton: {
        color: '#fff',
    }
})