import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet.</p>
    }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
            {feedback.map((item) =>(
                <div key={item.id}>
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0}}
                    >
                        <FeedbackItem item={item} handleDelete={handleDelete} />
                    </motion.div>
                </div>
            ))}
        </AnimatePresence>
    </div>
  )

//     <div className='feedback-list'>
//         {feedback.map((item) =>(
//             <div key={item.id}>
//                 <FeedbackItem item={item} handleDelete={handleDelete} />
//             </div>
//         ))}
//     </div>
//   )
}

export default FeedbackList