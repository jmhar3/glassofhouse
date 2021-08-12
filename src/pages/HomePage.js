import { Link } from 'react-router-dom'
import Swatches from '../Swatches'

const HomePage = () => {
    return(
        <div>
            <Link to='/palette'>Make Your Own</Link>
            <Swatches {...this.props}/>
        </div>
    )
}

export default HomePage