
import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".main")


    // Use the journal entry data from the data provider component
    const main = document.querySelector(".main") 
    
    export const EntryListComponent = () => {

    getJournalEntries()
        .then(() => {
            const entries = useJournalEntries()
            main.innerHTML += `
            
        ${entries.map(entry => JournalEntryComponent(entry)).join("")}
    `
        })
    }