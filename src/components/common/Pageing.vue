<template>
    <div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[5,10,20,50,100]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            :url="url">
        </el-pagination>
    </div>
</template>
<script>
import { getTableData } from '@/utils/table'
export default {
    props:{
        "total":Number,
        "url":String
    },
    data () {
        return {
            page:1,  //当前页数
            size:10, //每页显示条数
        }
    },
    created(){
          console.log(this.$parent)
          getTableData(this.$parent,'/works',{page:this.page,size:this.size},['completed'])
     },
     methods:{
       handleSizeChange(val) {
      this.size = val //改变了每页条数
      this.page = 1 //就让他跳转到1
      getTableData(this.$parent,'/works',{page:this.page,size:val},['completed'])  //重新请求
      },
      handleCurrentChange(val) {
        this.page = val
        getTableData(this.$parent,'/works',{page:val,size:this.size},['completed'])  // 重新请求
      },   
     }
}
</script>
