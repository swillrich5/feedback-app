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
            text: 'This item is from Feedback item 2',
            rating: 7
        },
        {
            id: 3,
            text: 'This item is from Feedback item 3',
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

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item));
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
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;