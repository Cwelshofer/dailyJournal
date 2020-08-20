let instructors = []

export const useInstructors = () => {
    return instructors.slice()
}



export const getInstructors = () => {

    return fetch("http://localhost:8088/instructors")  //Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(ParsedInstructors => {
            instructors = ParsedInstructors
            // What should happen when we finally have the array?
        })
    }