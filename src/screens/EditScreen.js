import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)

    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    )


    return(
        <BlogPostForm
            titleLabel='Enter New Title:'
            contentLabel='Enter New Content'
            initalValues={{ title: blogPost.title, content: blogPost.content}} //initalizes state values
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },

})

export default EditScreen;