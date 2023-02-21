module.exports = {
    devServer:{
        open:true,
        proxy:{    //这个是为axios的基础路径URL配置的代理
            'api':{
                target:'http://1.116.64.64:5004/api2',
                changeOrigin:true,   //允许跨域
                pathRewrite:{     //重写
                    '^/api':''
                }
            }
        }
    }
}