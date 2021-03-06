// declare config with test id and tracking requirements
export const config = {
    // Unique to test/patch. UJsed in tracking and CSS.
    "id": "pah000",
    "tracking": {
        "google_analytics": {
            // custom dimension number to send data to, leave as empty string to not track.
            "dimension": ""
        },
        "hotjar": {
            // Hotjar tracking, true or false value.
            "heatmaps": false
        }
    }
}

export default config