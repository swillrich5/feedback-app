import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from Feedback item 1',
            rating: 5
        },
        {
            id: 2,
            text: 'This item is from Feedback item 1',
            rating: 7
        },
        {
            id: 3,
            text: 'This item is from Feedback item 1',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, 
        edit: false
    })

    // Delete feedback item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }    

    // Add feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback])
    }

    // Set feedback item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value= {{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;