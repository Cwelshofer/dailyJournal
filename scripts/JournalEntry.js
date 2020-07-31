import { saveJournalEntry } from "./JournalDataProvider.js"

  
/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id.label}" class="journalEntry">
           <div class="journal__date">${entry.date.label}</div>
           <div class="journal__concept">${entry.concept.label}</div>
           <div class="journal__entry">${entry.entry.label}</div>
        </section>
    `
}

const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", clickEvent => {
    console.log("event")
    if(clickEvent.target.id === "journalRecordButton") {
        const entryDate = document.querySelector("#journalDate")
        const entryConcepts = document.querySelector("#concepts")
        const entryEntry = document.querySelector("#journalTextArea")
        const entryMood = document.querySelector("#moods")

        const newEntry = {
            date: entryDate.value,
            concept: entryConcepts.value,
            entry: entryEntry.value,
            mood: entryMood.value
        } 
        debugger
        saveJournalEntry(newEntry)

        }
    })
