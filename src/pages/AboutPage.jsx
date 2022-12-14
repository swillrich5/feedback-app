import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>  
        <p><Link to={{          // this is the same as doing <Link to='/'>Back to Home</Link>
            pathname: '/',       // you can also add query parameters / properties
        }}>Back to Home</Link></p>
    </Card>
  )
}

export default AboutPage