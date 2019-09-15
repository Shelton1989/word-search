import {
    Component,
    ViewChild,
    Input
} from '@angular/core';

@Component({
    selector: 'app-file-reader',
    templateUrl: './reader.component.html',
    styleUrls: ['./reader.component.scss']
})

export class ReaderComponent {
    @ViewChild('file', {static: false}) file
    fileName = ''
    words = []

    @Input() grid: string

    validate() {
        if (this.words) {
            this.words.forEach(word => {
                let newWord = [...word.word.toLowerCase()];
                for (let i = 0; i < newWord.length; i++) {
                    if (this.grid.toLowerCase().includes(newWord[i])) {
                        word.inGrid = true
                    } else {
                        word.inGrid = false
                        break
                    }
                }
            })
        }
    }

    handleChange() {
        this.fileName = this.file.nativeElement.files[0].name

        const file = this.file.nativeElement.files[0]

        const reader = new FileReader()

        reader.onload = (e) => {
            const uploadedFile = e.target.result
            const wordList = uploadedFile.split(/\r\n|\n/)

            wordList.forEach(line => {
                this.words.push({
                    word: line,
                    inGrid: null
                })
            })
        }

        reader.onerror = (e) => {
            alert(e.target.error.name)
        }

        reader.readAsText(file)
    }
}