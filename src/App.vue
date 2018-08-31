<template>

  <el-container>


        <el-main>
          

          <el-row :gutter="20">

            <el-col class="public" :span="8" :offset="8" style="margin-top:8%;">
                <el-col :span="16" :offset="4">                  
                   
                      <div style="margin: 20px;"></div>
                      <el-form label-position="top" label-width="80px" >
                        <el-form-item label="用户名">
                          <el-input v-model="formData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="商户号">
                          <el-input v-model="formData.region"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                          <el-input v-model="formData.type"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: center;">
                          <el-button type="primary" @click="onSubmit">立即登陆</el-button>
                        </el-form-item>
                                       
                      </el-form>


                </el-col>
             </el-col>

          </el-row>


        </el-main>

      



  </el-container>

   
 

</template>

<style>

  .public{border: 1px solid #eee;border-radius: 18px;}
</style>
<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods:{
      onSubmit(){

      }

    }
  }
</script>