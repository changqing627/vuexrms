<template>
    <div class="login">
        
    <el-form :model="loginFrom" status-icon :rules="rules" ref="loginFrom" label-width="100px" class="demo-ruleForm">
      <h1 class="title"> <i class="el-icon-bell"></i>VUEXMS-登录</h1>

   <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="loginFrom.username" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginFrom.password" autocomplete="off"></el-input>
  </el-form-item>
 
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginFrom')">提交</el-button>
    <el-button @click="resetForm('loginFrom')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginFrom:{
          username:'',
          password:''
      },
      rules:{
         username:[
             {required:true,message:'请输入用户名',trigger:'blur'},
             {min:5,max:18,message:'长度在5 到 18 个字符', trigger:'blur'}
         ] ,
         password:[
             {required:true, message:'请输入密码', trigger:'blur'},
             {min:5,max:18,message:'长度在5 到 18 个字符', trigger:'blur'}
         ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            let that=this;
         this.$http.post('/api/checklogin',{
            
                 username: that.loginFrom.username,
                 password:that.loginFrom.password,
             
         }).then(res=>{
             console.log(res.data)
             that.$store.commit('SAVE_USEINFO',res.data)
            that.$router.push('/index')
         })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app,
.login {
  height: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  width: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0px 45px 10px 10px;
}
.title {
  font-size: 26px;
  color: #333;
  font-weight: bolder;
  padding: 20px 0 20px 30px;
}
</style>
