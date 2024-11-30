// 3. Write a program to calculating the minimum number of notes required for a given withdrawal amount at an ATM?

function MinNotes(amt) {
    let notes = [500, 200, 100, 50, 20, 10, 5];
    let noteCount = {};

    for (let note of notes) {
        if (amt >= note) {
            noteCount[note] = Math.floor(amt / note);
            amt = amt % note;
        }
    }


    for (let note of notes) {
        if (noteCount[note]) {
            console.log(`${note}: ${noteCount[note]} notes`);
        }
    }
}


MinNotes(850);
