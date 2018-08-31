<template>
  <div id="out">

    <div class="middle">
       
       <div id="inner">



     
          
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="40px" style="padding-top: 66px;">
 
          <el-form-item label="账号" prop="age">
            <el-input v-model.number="ruleForm2.age"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item >
            <el-radio-group v-model="ruleForm2.resource" size="medium">
              <el-radio border label="管理员" value="root"></el-radio>
              <el-radio border label="员工" value="employee"></el-radio>
            </el-radio-group>
          </el-form-item>
          
          <el-form-item style="text-align: center;">
            <el-button type="primary" @click="submitForm('ruleForm2')">登录系统</el-button>
          </el-form-item>
        </el-form>
    

        </div>
    </div>
   

  </div>
</template>
<style>
  #out{width:100%;height:100%;background-image:url('./images/4.jpg'); 
    background-repeat:no-repeat; background-size:100% 100%;
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;}
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  #inner{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-width: 440px;
    width: calc(100% - 40px);
    padding: 44px;
    margin-bottom: 28px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 3px rgba(0,0,0,.55);
    -moz-box-shadow: 0 2px 3px rgba(0,0,0,.55);
    box-shadow: 0 2px 3px rgba(0,0,0,.55);
    border: 1px solid #818c94;
    border: 1px solid rgba(0,0,0,.4);
    min-width: 320px;
    min-height: 338px;
   
    }

</style>
<script>

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
        
          callback();
        }
      };
     
       return {
        ruleForm2: {
          pass: '',
          resource:"root",
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
      onSubmit(){
      }
    }
  }
</script>