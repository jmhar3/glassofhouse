import { Link } from 'react-router-dom'
import Swatches from '../components/Swatches/Swatches'

const HomePage = () => {
    return(
        <>
            <Link to='/palette' className="action-button">Make Your Own</Link>
            <Swatches {...this.props} swatchData={this.props.swatchData} swatch={this.props.swatch}/>
            {console.log("PROPS:", this.props)}
        </>
    )
}

export default HomePage