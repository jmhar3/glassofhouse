import {Component} from 'react';
import Palette from '../components/Palette/Palette';
import PaletteTools from '../components/Palette/PaletteTools'

export default class PalettePage extends Component {
    render() {
        return (
            <>
                <PaletteTools />
                <Palette />
            </>
        )
    }
}