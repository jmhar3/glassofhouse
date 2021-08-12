import {Component} from 'react';
import Palette from '../Palette';
import PaletteTools from '../components/PaletteTools'

export default class PalettePage extends Component {
    render() {
        return (
            <div>
                <PaletteTools />
                <Palette />
            </div>
        )
    }
}