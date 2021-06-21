import { getRequests, sendCompletions } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"



const mainContainer = document.querySelector("#container");
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestString, clownString] = event.target.value.split("--")
            const request = parseInt(requestString)
            const clown = parseInt(clownString)
    
            const completion = {
                requestId: request,
                clownId: clown,
                date_created: Date.now(),
             }

             sendCompletions(completion)

        }
    }
)

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data
    const clowns = getClowns()
    const requestList = (request) => 
        `<li>
            ${request.parentName} wants to have a party for ${request.childName} on ${request.partyDate}.  The party should last ${request.partyLength} hours.
             <select class="clowns" id="clowns">
                <option value="">Choose</option>${ clowns.map(clown => {return `<option value="${request.id}--${clown.id}">${clown.name}</option>`}).join("")}
            </select>
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


// ${ clowns.map(clown => {return `<option value="${clow.id}--${clown.id}">${clown.name}</option>`}).join("")}


