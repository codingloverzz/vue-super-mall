const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    'font-size-sm': '13px',
                    'font-size-md': '15px',
                    'font-size-lg': '17px',
                    'goods-action-button-danger-color': '#7232dd',
                    'van-nav-bar-height': '90px'
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                views: '@/views',
                components: '@/components'
            }
        }
    }
};