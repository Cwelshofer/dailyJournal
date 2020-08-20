
import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("journalStateChanged", () => {
    const allEntries = useJournalEntries()
    render(allEntries)
});

const render = (arrayOfEntries) => {
    entryLog.innerHTML = `
    ${arrayOfEntries.map((entry) => JournalEntryComponent(entry)).join("")}
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [notUsed, entryId] = clickEvent.target.id.split("--")

        /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
        const message = new CustomEvent("editEntryButtonClicked", {
            detail: {
                entryId:parseInt(entryId)
            }

        })
   
    eventHub.dispatchEvent(message)
    }
})

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