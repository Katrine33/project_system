<template>
    <div class="header">
        <el-header>
            <div class="title">通用管理系统</div>   <!-- 左边是左边要展示的内容 -->
            <div>{{name}}</div>    <!-- 右边是要展示的名字 --> 

        </el-header>
    </div>
</template>

<script>
import {getToken} from '@/utils/setToken.js'
export default {
    data(){
        return {
            name:''   //初始化空值
        }
    },
    created() {   //获取端口的name，通过token所以引入getToken
            this.name = getToken('username')
        }
    
}
</script>

<style lang="scss" scoped>
.header {
    .el-header{
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        .title {
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>