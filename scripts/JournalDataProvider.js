/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.


/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

let journal = []

export const getJournalEntries = () => {

return fetch("http://localhost:3000/entries")  //Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(ParsedEntries => {
        console.log("journal")
        journal = ParsedEntries
        // What should happen when we finally have the array?
    })
}

export const saveJournalEntry = entry => {
    return fetch("http://localhost:3000/entries", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    // .then(dispatchStateChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}