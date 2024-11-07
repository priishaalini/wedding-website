// Load sticky notes from localStorage
function loadStickyNotes() {
    const notes = JSON.parse(localStorage.getItem('stickyNotes')) || [];
    const stickyNotesContainer = document.getElementById('sticky-notes');

    notes.forEach((note, index) => {
        const stickyNote = createStickyNoteElement(note.text, note.disabled);
        stickyNotesContainer.appendChild(stickyNote);
    });
}

// Save sticky notes to localStorage
function saveStickyNotes() {
    const stickyNotes = [];
    const stickyNoteElements = document.querySelectorAll('.sticky-note');

    stickyNoteElements.forEach(stickyNote => {
        const textArea = stickyNote.querySelector('textarea');
        const tickButton = stickyNote.querySelector('.tick-btn');

        const note = {
            text: textArea.value,  // Save the text of the sticky note
            disabled: textArea.disabled,  // Save whether the note is disabled (non-editable)
        };
        stickyNotes.push(note);  // Push note object to the array
    });

    // Save to localStorage
    localStorage.setItem('stickyNotes', JSON.stringify(stickyNotes));
}

// Function to create a sticky note element
function createStickyNoteElement(text = '', disabled = false) {
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('sticky-note');

    // Create a text area for users to input their message
    const textArea = document.createElement('textarea');
    textArea.placeholder = "Write your wish here...";
    textArea.value = text;  // Pre-fill the text area with saved message
    textArea.style.width = '100%';
    textArea.style.height = '100%';
    textArea.style.border = 'none';
    textArea.style.resize = 'none';
    textArea.disabled = disabled;  // Check if note is disabled (non-editable)

    // Create a classy heart icon (button) for submitting
    const tickButton = document.createElement('button');
    tickButton.textContent = '❤️';  // Heart symbol for wedding theme
    tickButton.classList.add('tick-btn');
    tickButton.style.display = text.trim() && !disabled ? 'inline' : 'none';  // Show tick if there's a message and it's not disabled

    // Add click event to the heart button to disable editing
    tickButton.addEventListener('click', function() {
        textArea.disabled = true;  // Make text area non-editable
        tickButton.style.display = 'none';  // Hide tick button after click
        saveStickyNotes();  // Save to localStorage after clicking the tick
    });

    // Add event listener for when the user types in the text area
    textArea.addEventListener('input', function() {
        tickButton.style.display = textArea.value.trim() && !textArea.disabled ? 'inline' : 'none';  // Show heart button if there's text and not disabled
    });

    // Append text area and tick button to sticky note
    stickyNote.appendChild(textArea);
    stickyNote.appendChild(tickButton);

    return stickyNote;
}

// Function to create a new sticky note and add it to the top
function createStickyNote() {
    const stickyNotesContainer = document.getElementById('sticky-notes');
    const newStickyNote = createStickyNoteElement();  // Create a new sticky note element
    stickyNotesContainer.prepend(newStickyNote);  // Prepend the new sticky note to the top
    saveStickyNotes();  // Save sticky notes after adding a new one
}

// Event listener for the plus button
document.getElementById('add-note-btn').addEventListener('click', createStickyNote);

// Load sticky notes when the page is loaded
window.onload = loadStickyNotes;
