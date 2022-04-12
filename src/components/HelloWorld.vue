<template>
  <div>
    <div class='main'>
      <div class='title'>
        <div class='leftline'></div>
        <img src='@/assets/logo.png'/>
      </div>
      <div class='line'><span></span><div>CHARACTER</div><span></span></div>
      <ul class='content'>
        <li v-for="item in roles" :key='item.name'>
          <img src='@/assets/img-1.jpg'>
          <div class='tip'><span>角色:{{item.name}}</span></div>
        </li>
      </ul>
    </div>
    <div class='scape'>
      <div class='mask'></div>
      <div class='imgdiv'><img src='@/assets/scape.png'/></div>
    </div>
  </div>
</template>

<script>
import {apiGet} from '@/request'

export default {
  name: 'HelloWorld',
  data(){
    return {
      roles:[]
    }
  },
  mounted(){
    apiGet('/data.json',res=>{
      this.roles = JSON.parse(res)
    })
  }
}
</script>

<style scoped>
.title{
  background-color: #121413;
  height: 200px;
  display: flex;
  align-items: center;
  background:url(@/assets/bg.png) no-repeat;
  background-size: cover;
}
.title img{
  height: 40px;
  margin-left:150px;
}
.line{
  color:#B5C0C4;
  margin:60px 0 10px;
  display: flex;
  align-items: center;
  font-size:16px;
  font-weight: bold;
}
.line div{
  width:150px;
  text-align: center;
}
.line span{
  border:1px solid #293134;
  height: 0;
  flex:1;
}
.content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10% 150px;
}
.content li{
  width:30%;
  position: relative;
  list-style: none;
}
.content li img{
  width:100%;
  margin-top:50px;
}
.tip{
  position:absolute;
  height: 20%;
  bottom: 0;
  background-color: #202529;
  opacity: 0.5;
  width:100%;
  display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 20px;
    color:white;
}
.tip span{
  margin-right: 20px;
}

@media screen and (max-width:992px){
  .title{
    background:#121413;
    height: 40px;
  }
  .title .leftline{
    background-color:#E89818;
    width:6px;
    height: 100%;
  }
  .title img{
    height: 30px;
    margin-left:10px;
  }
  .content li{
    width:45%
  }
}

@media screen and (max-width:768px){
  .title{
    height: 30px;
  }
  .title img{
    height: 20px;
  }
  .content{
    justify-content: center;
  }
  .content li{
    width:80%
  }
}

.scape{display: none;}
@media screen and (max-width:768px) and (orientation: portrait ){
  .scape{display: block;}
}

.mask{
  background-color:black;
  opacity: 0.5;
  width:100%;
  height: 100%;
  position:fixed;
  top:0;
  left:0;
}
.imgdiv{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.imgdiv img{
  width:120px;
  transform: rotate(-90deg);
  animation: imgrotate 1s infinite;
}

@keyframes imgrotate {
  0% {transform: rotate(-90deg);}
  100% {transform: rotate(0);}
}
</style>
