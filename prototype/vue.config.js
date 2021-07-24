module.exports = {
    devServer: {
        proxy:{
            '/api':{
                target: 'http://localhost:3000/api',
                changerOrigin: true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    outputDir: 'C:/GitRepo//Corona-Vaccine-Portal-Site//backend//public',
}