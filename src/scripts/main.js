import { ReserveAClown } from "./ReserveAClown.js"
import { fetchRequests, fetchClowns, fetchCompletions } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")
// mainContainer.addEventListener("click", click => {
//     if (click.target.id.startsWith("request--")) {
//         const [,requestId] = click.target.id.split("--")
//         deleteRequest(parseInt(requestId))
//     }
// })

const render = () => {
    fetchRequests()
        .then(fetchClowns)
        .then(fetchCompletions) 
        .then (() => {
            mainContainer.innerHTML = ReserveAClown()
        }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    (customEvent) => {
        render()
    }
)

