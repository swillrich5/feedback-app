import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h2>{FeedbackStats.length} Reviews</h2>
            <h2>Average Rating: { isNaN(average) ? 0 : average }</h2>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats