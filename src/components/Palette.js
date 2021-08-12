import {Component} from 'react';
import SwatchCard from './components/SwatchCard'

export default class Palette extends Component {
    render = () => {
        const {swatchData} = this.props

        return Object.keys(swatchData).map(i => {
            <SwatchCard 
            key = {swatch}
            name = {swatch[i].name}
            />
        })
    }
}