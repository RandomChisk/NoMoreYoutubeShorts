var host = "https:\\www.youtube.com/watch?v=";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match('shorts/([a-zA-Z0-9_-]+)&?')[1]};
    },
    {
        urls: [
            "https://www.youtube.com/shorts/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
