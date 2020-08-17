let moods = []

export const useMoods = () => {
    return moods.slice()
}



export const getMoods = () => {

    return fetch("http://localhost:8088/moods")  //Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(ParsedMoods => {
            moods = ParsedMoods
            console.log(moods)
            // What should happen when we finally have the array?
        })
    }