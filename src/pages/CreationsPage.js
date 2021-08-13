import { Link } from 'react-router-dom'
import Creations from '../components/Creations'

const CreationsPage = () => {
    return(
        <>
            <Link to='/palette' className="action-button">Make Your Own</Link>
            <Creations />
        </>
    )
}

export default CreationsPage