
const eventHub = document.querySelector(".main")


const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))

}

let journal = []

export const getJournalEntries = () => {

return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor")  //Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(ParsedEntries => {
        console.log("journal")
        journal = ParsedEntries
        // What should happen when we finally have the array?
    })
}

export const saveJournalEntry = entry => {
    return fetch("http://localhost:8088/entries", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    // .then(dispatchStateChangeEvent)
}

export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${ entryId }`, {
        method: "DELETE"
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)
}

export const updateEntry = entry => {
    return fetch(`http://localhost:8088/entries/${ entry.id }`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
}).then(getJournalEntries)
    .then(dispatchStateChangeEvent)

}


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}