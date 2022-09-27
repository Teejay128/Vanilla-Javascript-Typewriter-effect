// const TypeWriter = function(txtelement, words, wait = 2000) {
//     this.txtelement = txtelement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type()
//     this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function(){
//     // Current Index of Word
//     const current = this.wordIndex % this.words.length;

//     // Get full text of current word
//     const fullTxt = this.words[current];

//     // Check if Deleting
//     if(this.isDeleting) {
//         // Remove Char
//         this.txt = fullTxt.substring(0, this.txt.length - 1)
//     } else {
//         // Add Char
//         this.txt = fullTxt.substring(0, this.txt.length + 1)
//     }

//     // Insert txt into element
//     this.txtelement.innerHTML = `<span class = "txt">${this.txt}</span>`

//     // Initial Type Speed
//     let typeSpeed = 300;

//     if(this.isDeleting) {
//         typeSpeed /= 3;
//     }

//     // If word is complete
//     if(!this.isDeleting && this.txt === fullTxt) {
//         // Short pause at end
//         typeSpeed = this.wait;

//         // Set Delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;

//         // Move to next word
//         this.wordIndex++;

//         // Short Pause at Start
//         typeSpeed = 500
//     }
//     setTimeout(() => this.type(), typeSpeed)
// }




// ES6 Class
class TypeWriter {
    constructor(txtelement, words, wait = 2000) {
        this.txtelement = txtelement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type()
        this.isDeleting = false;
    }

    type(){
    // Current Index of Word
        const current = this.wordIndex % this.words.length;

        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if Deleting
        if(this.isDeleting) {
            // Remove Char
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        } else {
            // Add Char
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }

        // Insert txt into element
        this.txtelement.innerHTML = `<span class = "txt">${this.txt}</span>`

        // Initial Type Speed
        let typeSpeed = 300;

        if(this.isDeleting) {
            typeSpeed /= 3;
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Short pause at end
            typeSpeed = this.wait;

            // Set Delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            // Move to next word
            this.wordIndex++;

            // Short Pause at Start
            typeSpeed = 500
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

// Init on DOM Load

document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init TypeWriter
    new TypeWriter(txtElement, words, wait)

}