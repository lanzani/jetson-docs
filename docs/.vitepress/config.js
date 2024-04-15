const librariesSidebar = [
    {
        text: "Python", collapsed: false, items: [
            {text: "Overview", link: "/libraries/python/overview"},
            {
                text: "L4T 32.7.1", collapsed: true, items: [
                    {text: "Python 2.7", link: "/libraries/python/l4t32.7.1/py2.7"},
                    {text: "Python 3.6.9", link: "/libraries/python/l4t32.7.1/py3.6.9"},
                    {text: "Python 3.8.0", link: "/libraries/python/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/python/l4t32.7.1/py3.10.11"},
                    {text: "Python 3.11.3", link: "/libraries/python/l4t32.7.1/py3.11.3"}
                ]
            }

        ]
    },
    {
        text: "OpenCV", collapsed: false, items: [
            {text: "Overview", link: "/libraries/opencv/overview"},
            {
                text: "L4T 32.7.1", collapsed: false, items: [
                    {text: "Python 3.6.9", link: "/libraries/opencv/l4t32.7.1/py3.6.9"},
                    {text: "Python 3.8.0", link: "/libraries/opencv/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/opencv/l4t32.7.1/py3.10.11"}
                ]

            },
            {
                text: "L4T 35.4.1", collapsed: false, items: [
                    {text: "Python 3.8.10", link: "/libraries/opencv/l4t35.4.1/py3.8.10"}
                ]
            }
        ]
    },
    {
        text: "Mediapipe GPU", collapsed: false, items: [
            {text: "Overview", link: "/libraries/mediapipe/overview"},
            {
                text: "L4T 32.7.1", collapsed: false, items: [
                    {text: "Python 3.6.9", link: "/libraries/mediapipe/l4t32.7.1/py3.6.9"},
                    {text: "Python 3.8.0", link: "/libraries/mediapipe/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/mediapipe/l4t32.7.1/py3.10.11.md"}
                ]
            },
            {
                text: "L4T 35.4.1", collapsed: false, items: [
                    {text: "Python 3.8.10", link: "/libraries/mediapipe/l4t35.4.1/py3.8.10"},
                ]
            }
        ]
    },
    {
        text: "Tensorflow", collapsed: false, items: [
            {text: "Overview", link: "/libraries/tensorflow/overview"},
            {
                text: "L4T 32.7.1", collapsed: false, items: [
                    {text: "Python 3.6.9", link: "/libraries/tensorflow/l4t32.7.1/py3.6.9"}
                ]
            }
        ]
    }
]

const gettingStartedSidebar = [
    {text: "Getting Started", link: "/getting-started/"},
    {text: "First Boot", link: "/getting-started/first-boot"},
    {text: "Setup Docker", link: "/getting-started/docker"}
]

module.exports = {
    title: "Jetson Docs",
    description: "Independent Jetson documentation",
    lang: 'en-US',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],

    themeConfig: {
        logo: {light: '/favicon.ico', dark: '/favicon.ico', alt: "JetsonDocs"},
        nav: [
            {text: "Getting Started", link: "/getting-started/"},
            {text: "Libraries", link: "/libraries/"},
            {text: "Blog", link: "https://medium.com/jetson-docs"}
        ],

        footer: {
            message: 'Released under the MIT License. <br><a href="https://github.com/sponsors/lanzani">Sponsor this project</a>.'
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/lanzani/jetson-docs'},
            {icon: 'twitter', link: 'https://twitter.com/FederLanzani'}
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