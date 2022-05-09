import variationCSS from "./index.css";
// Importing the norman library
import norman from "../norman/index.js"

// Declare my init function
function init() {
    // Log "Variation 1" to the window norman object
    norman.core.log("Variation 1")
    // Track the Variant impression event
    norman.core.track(Variant.name, "Loaded", true)
    // Get all titles
    let title = norman.core.elementManagement.get('.best-sellers__title')
    // Change all titles
    title.forEach(t => t.textContent = "Shop by pet type")
}

// Declare the variant with all the details.
const Variant = {
    name: "Variation 1",
    // Set the Varaint CSS to an empty string, this prevents CSS from being added to the page.
    css: variationCSS,
    // Declaring our conditions function for polling.
    conditions: () => {
        let conditions = []
        // Return true/false if element exists
        conditions.push(!!document.querySelector('.best-sellers__title'))
        // Return true/false if element exists
        conditions.push(norman.core.elementManagement.exists('.best-sellers__title'))
        // logging the conditions
        norman.core.log({message: `Polling: Conditions`, conditions})
        // check every element in array is true
        let result = conditions.every(a => a)
        // logging the result
        norman.core.log({message: `Polling: Result`, result})
        // return the result
        return result
    },
    // Map init function to actions property
    actions: init,
}

// Register variant in norman framework
let nVariant = norman.init(Variant)
// Run variant
nVariant.run()