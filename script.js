const activityBtn = document.querySelector('#generate')
const saveBtn = document.querySelector('#save')
const apiURL = "https://www.boredapi.com/api/activity"
let listActivity = {pastActivities: []}

const apiRequest = (url, httpMethod, data) => {
    return fetch(url, {
        method: httpMethod,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(res => res.json())
}

const getAPI = () => {
    let modifiedParticipants = 'anyone';
    apiRequest(apiURL, 'GET').then(data => {
        const activityHeader = document.querySelector('#activity')
        const typeText = document.querySelector('#type')
        const {activity, participants, type} = data
        activityHeader.textContent = activity.toLowerCase()
        typeText.textContent = `(${type.toLowerCase()})`
        listActivity.pastActivities.push(activity)
        console.log(activity)
        modifiedParticipants = participants
    })
}

activityBtn.addEventListener('click', getAPI)

