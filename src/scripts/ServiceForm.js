import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='serviceParentName']").value
        const userChild = document.querySelector("input[name='serviceChildName']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userLength = document.querySelector("input[name='serviceLengthOfParty']").value
        const userPeople = document.querySelector("input[name='serviceNumberOfPeople']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParent,
            childName: userChild,
            address: userAddress,
            partyLength: userLength,
            numberOfPeople: userPeople,
            partyDate: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})



export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceParentName">Parent Name</label>
            <input type="text" name="serviceParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChildName">Child Name</label>
            <input type="text" name="serviceChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceNumberOfPeople">Number of People</label>
            <input type="number" name="serviceNumberOfPeople" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLengthOfParty">Length of Party</label>
            <input type="number" name="serviceLengthOfParty" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}