const applicationState = {
    requests: [],
    completions: [],
    clowns: []
}
const mainContainer = document.querySelector("#container");
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (serviceCompletions) => {
                applicationState.completions = serviceCompletions
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (serviceClowns) => {
                applicationState.clowns = serviceClowns
            }
        )
}

export const getRequests = () => [...applicationState.requests]
export const getClowns = () => [...applicationState.clowns]
export const getCompletions = () => [...applicationState.completions]



export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            // do something after the POST is finished. Stay tuned for what to put here!
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const sendCompletions = (serviceCompletions) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceCompletions)
    }

    
    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            // do something after the POST is finished. Stay tuned for what to put here!
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}




// export const getRequests = () => [...applicationState.requests]
// export const getClowns = () => [...clowns.clownNames]
// export const getCompletions = () => [...applicationState.completions]

// const clowns = {
   
//    clownNames: [
//     { name: "Buttons", id: 1 },
//     { name: "Lollipop", id: 2}  
// ]
// }