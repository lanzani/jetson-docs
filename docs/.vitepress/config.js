const librariesSidebar = [
    {text: "OpenCV", link:"/libraries/opencv"},
    {text: "Mediapipe", link:"/libraries/mediapipe"}
]

const gettingStartedSidebar = [
    {text: "Getting Started", link:"/getting-started/"},
    {text: "Docker", link:"/getting-started/docker"}
]

module.exports = {
    title: "Jetson Docs",
    description: "Independent Jetson documentation",
    themeConfig: {
        nav: [
            {text : "Getting Started", link: "/getting-started/"},
            {text : "Libraries", link: "/libraries/"},
            {text : "About", link: "/about"}
        ],

        sidebar: {
            "/libraries/": librariesSidebar,
            "/getting-started": gettingStartedSidebar
        },

        editLink: {
            pattern: 'https://github.com/lanzani/jetson-docs/docs/:path',
            text: 'Edit this page on GitHub'
        }
    },

    cleanUrls: true
}