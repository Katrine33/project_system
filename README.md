# projiect-v2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 接口地址
地址：[https://www.showdoc.com.cn/jinducasey/8321036098744323]
密码：jinduVIP
登录的用户名和密码符合校验规则即可

### 资源
分数地图资源：[http://192.144.199.210:8080/editor/index.html?chart_id=7Ph0yZtNoJ1JhGDl]

```
       location / {
        root 
        index   index.html index.htm;
        try_files $uri $uri/ @router; #找指定路径下的文件，如果不存在，则转给哪个文件执行
       }
       #vue项目路由不是真实存在的，要加上这段代码
       location @router {
        rewrite ^.*$ /index.html last;
       }
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# project_system
