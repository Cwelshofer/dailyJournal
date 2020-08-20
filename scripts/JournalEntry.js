import { saveJournalEntry, updateEntry} from "./JournalDataProvider.js"
import { deleteEntry } from "./JournalDataProvider.js"


const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("entryDelete--")) {
        const [ prompt, entryIdString ] = clickEvent.target.id.split("--")  // "3"
console.log(entryIdString)
        deleteEntry(entryIdString)
    }
})
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="journal__date">${entry.date}</div>
           <div class="journal__concept">${entry.concept}</div>
           <div class="journal__entry">${entry.entry}</div>
              <div class="journal__mood">${entry.mood.label}</div>
              <div class="journal__instructors">${entry.instructor.first_name} ${entry.instructor.last_name} </div>
              
              
         <button id="entryDelete--${ entry.id }">Delete</button>
         <button id="editEntry--${entry.id}">Edit</button>

           
        </section>
    `
}


eventHub.addEventListener("click", clickEvent => {
    console.log("event")
    if(clickEvent.target.id === "journalRecordButton") {
        const id = document.querySelector("#entryId");
        const entryDate = document.querySelector("#journalDate")
        const entryConcepts = document.querySelector("#concepts")
        const entryEntry = document.querySelector("#journalTextArea")
        const entryMood = document.querySelector("#moods")
        const entryInstructor = document.querySelector("#instructors")

        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryEntry.value,
            moodId: parseInt(entryMood.value),
            instructorId: entryInstructor.value
            
        };

        if (id.value === "") {
        
        saveJournalEntry(newEntry)
        } else {
            newEntry.id = parseInt(id.value)
            updateEntry(newEntry)
        }
        }
    })
