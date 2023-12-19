const librariesSidebar = [
    {
        text: "Python", collapsed: false, items: [
            {text: "Overview", link: "/libraries/python/overview"},
            {text: "L4T 32.7.1", link: "/libraries/python/l4t32.7.1"}

        ]
    },
    {
        text: "OpenCV", collapsed: false, items: [
            {text: "Overview", link: "/libraries/opencv/overview"},
            {
                text: "L4T 32.7.1", collapsed: false, items: [
                    {text: "Python 3.6.9", link: "/libraries/opencv/l4t32.7.1/py3.6.9.md"},
                    {text: "Python 3.8.0", link: "/libraries/opencv/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/opencv/l4t32.7.1/py3.10.11.md"}
                ]
            }
        ]
    },
    {
        text: "Mediapipe GPU", collapsed: false, items: [
            {text: "Overview", link: "/libraries/mediapipe/overview"},
            {
                text: "L4T 32.7.1", collapsed: false, items: [
                    {text: "Python 3.6.9", link: "/libraries/mediapipe/l4t32.7.1/py3.6.9.md"},
                    {text: "Python 3.8.0", link: "/libraries/mediapipe/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/mediapipe/l4t32.7.1/py3.10.11.md"}
                ]
            }
        ]
    }
]

const gettingStartedSidebar = [
    {text: "Getting Started", link: "/getting-started/"},
    {text: "First Boot", link: "/getting-started/first-boot"},
    {text: "Docker", link: "/getting-started/docker"}
]

module.exports = {
    title: "Jetson Docs",
    description: "Independent Jetson documentation",
    lang: 'en-US',
    themeConfig: {
        nav: [
            {text: "Getting Started", link: "/getting-started/"},
            {text: "Libraries", link: "/libraries/"},
            {text: "Blog", link: "https://medium.com/jetson-docs"}
        ],

        footer: {
            message: 'Released under the MIT License.'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lanzani/jetson-docs'}
        ],

        sidebar: {
            "/libraries/": librariesSidebar,
            "/getting-started": gettingStartedSidebar
        },

        outline: 'deep',

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