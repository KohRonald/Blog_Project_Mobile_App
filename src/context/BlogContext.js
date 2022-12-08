import createDataContext from './createDataContext';

const blogReducer = (state, action) =>{
    switch (action.type) {
        case 'edit_blogpost':
            return state.map((blogpost) => {
                return blogpost.id === action.payload.id ? action.payload : blogpost
            })
        case 'delete_blogpost':
            //filter iterates through all elements inside array and run child function
            //if filter returns true, then given element will returned inside new overall array
            //if filter returns false, then it will be rejected
            //bascially filters out selected id from current array and creates new state array to be displayed
            return state.filter((blogPost) => blogPost.id !== action.payload)

        case 'add_blogpost':
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } })
        callback ? callback() : null
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content }})
        callback ? callback() : null
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost }, 
    [{ title: 'Inital Test Post', content: 'This is an inital content in the post', id: 1}]
)