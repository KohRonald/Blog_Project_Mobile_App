import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initalValues, titleLabel, contentLabel }) => {

    const [title, setTitle] = useState(initalValues.title)
    const [content, setContent] = useState(initalValues.content)

    return(
        <View>
            <Text style={styles.label}>{titleLabel}</Text>
            <TextInput style={styles.input} value={title} onChangeText={(title) => setTitle(title)}/>
            <Text style={styles.label}>{contentLabel}</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)}/>

            <Button 
                title="Save Blog Post" 
                onPress={() => onSubmit(title, content)
                    // //third argument is a callback function to occur when data is "fully done"
                    // addBlogPost(title, content, () => {
                    //     navigation.navigate('Index')
                    // })
                }
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initalValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm