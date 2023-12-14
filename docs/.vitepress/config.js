const librariesSidebar = [
    {text: "Python", link:"/libraries/python"},
    {text: "OpenCV", link:"/libraries/opencv"},
    {text: "Mediapipe GPU", link:"/libraries/mediapipe"}
]

const gettingStartedSidebar = [
    {text: "Getting Started", link:"/getting-started/"},
    {text: "First Boot", link:"/getting-started/first-boot"},
    {text: "Docker", link:"/getting-started/docker"}
]

module.exports = {
    title: "Jetson Docs",
    description: "Independent Jetson documentation",
    themeConfig: {
        nav: [
            {text : "Getting Started", link: "/getting-started/"},
            {text : "Libraries", link: "/libraries/"},
            {text : "Blog", link: "https://medium.com/jetson-docs"}
        ],

        footer: {
            message: 'Released under the MIT License.'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/lanzani/jetson-docs' }
        ],

        sidebar: {
            "/libraries/": librariesSidebar,
            "/getting-started": gettingStartedSidebar
        },

        search: {
            provider: 'local'
        },

        editLink: {
            pattern: 'https://github.com/lanzani/jetson-docs/tree/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        }

    },

    cleanUrls: true
}