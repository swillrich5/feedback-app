import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);

    const average = Math.round(
        feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length);

    return (
        <div className="feedback-stats">
            <h2>{feedback.length} Reviews</h2>
            <h2>Average Rating: { isNaN(average) ? 0 : average }</h2>
        </div>
    )
}

export default FeedbackStats