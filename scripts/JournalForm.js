// import { useMoods, getMoods } from "./MoodDataProvider.js";

import { getMoods, useMoods } from "./moods/MoodDataProvider.js"

const contentTarget = document.querySelector(".main")

export const journalEntryComponent = () => {
  getMoods().then( () => {
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
          <label for="journalEntry">Journal Entry</label>
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
        </fieldset>
        <article class="recordButton">
          <button id="journalRecordButton" type="button">Record Journal Entry</button>
        </article>
        <article id="entryLog">
        </article>
    </div>
    `;
  })
}


// const render = () => {
//   contentTarget.innerHTML = `
//   ${
//     allMoods.map(
//         (mood) => {
//             return `<option id="mood--${ mood.id }">${ mood.label }</option>`
//         }
//     ).join("")
// }
//   `
// }

// export const MoodForm = () => {
//   render()
// }