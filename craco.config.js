const path = require('path')
module.exports = {
    devServer: {
        port :9527,
        open: true,
        proxy: {

        }
    },
    webpack:{
        alias: {
           "@": path.join(__dirname,'/src')
        }
    } 
}