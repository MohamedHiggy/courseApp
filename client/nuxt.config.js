export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'client',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ant-design-vue/dist/antd.css',
        '@/assets/scss/app.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/dotenv',
    ],
    loading: {
        color: '#007AFF',
        height: '4px'
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "http://course.test",
        credentials: true
    },


    auth: {

        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post' },
                    logout: { url: '/logout', method: 'post' },
                    user: { url: '/api/user', method: 'get', propertyName: false }
                },
                tokenRequired: false,
                tokenType: false,
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}