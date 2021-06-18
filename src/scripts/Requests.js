import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data
    const requestList = (request) => 
        `<li>
            ${request.parentName} wants to have a party for ${request.childName} on ${request.partyDate}.  The party should last ${request.partyLength} hours.
            <button class="request__delete"
                id="request--${request.id}"> Reject
            </button>
        </li>`
    
    let html = `
        <ul>
            ${
                requests.map(requestList).join("")
            }
        </ul>
    `

    return html
}

// const startDate = "2021-06-08"
// const endDate = "2999-12-31"

// const result = requests.filter((request) => {
//     return request.partyDate >= startDate && request.partyDate <= endDate
// })