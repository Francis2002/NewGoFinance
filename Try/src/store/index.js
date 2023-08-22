import { proxy } from "valtio";

const store = proxy({
    intro: 0,
    lesson: null,

    //simulation
    mainInput: null,
    specialInputs: null,
    inputValues: null,
    inputOverflow: false,

    //story
    actions: [
        "Action 1",
        "Action 2",
        "Action 3",
        "Action 4",
    ],
    stats: {},
});

export default store;