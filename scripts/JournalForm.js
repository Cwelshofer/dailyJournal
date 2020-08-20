
import { getInstructors, useInstructors } from "./instructors/instructorsDataProvider.js";
import { getMoods, useMoods } from "./moods/MoodDataProvider.js"
import { getJournalEntries, useJournalEntries} from "./JournalDataProvider.js";
const contentTarget = document.querySelector(".main")
const eventHub = document.querySelector(".main")


eventHub.addEventListener("editEntryButtonClicked", () => {
  editJournalEntry()
  console.log("edit") 
 
});
  const editJournalEntry = () => {
    console.log("edit event")
    const entryMatchId = event.detail.entryId;
    const entriesCollection = useJournalEntries();

    const entryToEdit = entriesCollection.find((entry) => {
      return entryMatchId === entry.id;
    });

        const entryDate = document.querySelector("#journalDate");
        const entryConcepts = document.querySelector("#concepts");
        const entryEntry = document.querySelector("#journalTextArea");
        const entryMood = document.querySelector("#moods");
        const entryInstructor = document.querySelector("#instructors");
        const editEntryId = document.querySelector("#entryId");

        entryDate.value = entryToEdit.date;
        entryConcepts.value = entryToEdit.concept;
        entryEntry.value = entryToEdit.entry;
        entryMood.value = entryToEdit.mood.id;
        entryInstructor.value = entryToEdit.instructor.id;
        editEntryId.value = entryMatchId

};

        
            


export const journalEntryComponent = () => {
  
  getMoods().then(
    getInstructors().then(() => {
    const copiedInstructors = useInstructors()
    const copiedMoods = useMoods()
  
    
    contentTarget.innerHTML = `
    <div class="content--left">
      <h2>Daily Journal</h2>
        <fieldset class="dateOfEntry">
          <label for="journalDate">Date of Entry</label>
          <input type="date" name="journalDate" id="journalDate" style="
          width: 130px;">
        </fieldset>
        <fieldset class="concept">
          <label for="journalConcepts">Concepts covered</label>
          <input type="text" style="" id="concepts" width: 126px;">
        </fieldset>
        <fieldset class="journalEntry">
          <label id=journalLabel for="journalEntry">Journal Entry</label>
          <textarea id="journalTextArea" name="journalEntry" rows="4" cols="50"
            style="margin: 0px 347px 0px 0px; width: 128px; height: 52px;"></textarea>
        </fieldset>
        <fieldset class="moodEntry">
          <label for="moods">Mood:</label>
          <select name="moods" id="moods">
          ${
            copiedMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
          </select>
          <select name="instructors" id="instructors">
          ${
            copiedInstructors.map(
                (instructor) => {
                    return `<option value="${ instructor.id }">${ instructor.first_name } ${ instructor.last_name }</option>`
                }
            ).join("")
        }
          </select>
          <input type="hidden" name="entryId" id="entryId" value="">
        </fieldset>
        <article class="recordButton">
          <button id="journalRecordButton" type="button">Record Journal Entry</button>
        </article>
        <article id="entryLog">
        </article>
    </div>
      `;
    
})
)}

