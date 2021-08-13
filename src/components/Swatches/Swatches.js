import {Component} from 'react';
import SwatchCard from './SwatchCard';

export default class Swatches extends Component {
    renderSwatches = () => {
        const {swatchData, swatch} = this.props

        return Object.keys(swatchData).map(swatch => (
            <div key={swatch}>
                <SwatchCard
                    key = {swatch}
                    name = {swatchData[swatch].name}
                    colours = {swatchData[swatch].colours.map(colours => colours.colour)}
                />
            </div>
        ))
    }

    render () {
        return(
            <div id="featured-swatches">
                {this.renderSwatches()}
            </div>
        )
    }
}