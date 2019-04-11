const initState = {
    projects: [
        { id: 1, title: 'Renewal Journey', content: 'Renew your energy plan' },
        { id: 1, title: 'GAQ Journey', content: 'Get a quote for your energy' },
        { id: 1, title: 'Appointment booking Journey', content: 'Book an appoinment for your Boiler service' },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project);
            return action.project;
        default: return state;
    }
}

export default projectReducer;