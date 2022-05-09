import norman from "../norman/index.js"

function init() {
    norman.core.log("Control")
    norman.core.track(Variant.name, "Loaded", true)
}

const Variant = {
    name: "Control",
    css: "",
    conditions: () => {
        let conditions = []
        conditions.push(true)
        norman.core.log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        norman.core.log({message: `Polling: Result`, result})
        return result
    },
    actions: init,
}

let nVariant = norman.init(Variant)
nVariant.run()