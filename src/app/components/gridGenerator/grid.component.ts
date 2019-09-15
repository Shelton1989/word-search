import { 
    Component,
    Output,
    EventEmitter
} from '@angular/core';

import {letters} from '../../data/data.js';


@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})

export class GridComponent {

    grid = []

    @Output() transmitGrid = new EventEmitter();

    instructions = "Please click the generate button below."

    generate () {
        let grid = []
        let data = ''

        for (let j = 0; j < 5; j++) {
            let line:Array<string> = [];
            for (let i = 0; i < 5; i++) {
                let letter = letters[Math.floor(Math.random() * letters.length)]
                line.push(letter)
                data += letter
            }
            grid.push(line)
        }
        this.transmitGrid.emit(data)
        this.instructions = null
        this.grid = grid
        return grid
    }
}