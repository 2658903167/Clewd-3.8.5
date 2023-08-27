/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "sessionKey=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",
    "CookieArray": [
        "sessionKey=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",
        "sessionKey=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",
    ],
    "Ip": "127.0.0.1",
    "Port": 8443,
    "BufferSize": 1,
    "SystemInterval": 3,
    "padtxt_placeholder": "",
    "PersonalityFormat": "{{CHAR}}'s personality: {{PERSONALITY}}",
    "ScenarioFormat": "Dialogue scenario: {{SCENARIO}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": true,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 13500,
        "xmlPlot": true,
        "localtunnel": false,
        "Superfetch": false
    },
    "SuperfetchHost": "localhost",
    "SuperfetchPort": 8443,
    "SuperfetchTimeout": 120
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
