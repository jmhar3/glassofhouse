import { Link } from 'react-router-dom'
import Creations from '../Creations'

const CreationsPage = () => {
    return(
        <div>
            <Link to='/palette'>Make Your Own</Link>
            <Creations />
        </div>
    )
}

export default CreationsPage