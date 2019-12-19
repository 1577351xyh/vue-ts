<template>
  <div class="hello">
    {{msg}}
    <ul>
      <li v-for="item in features" :key="item">{{item}}</li>
    </ul>

    <input type="text" placeholder="xxxx" @keyup.enter="add">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  //Prop里面的是配置项,没赋值,我就给个感叹号
  @Prop({default:'dddd'}) msg!: string;

  features:string[];

  constructor(){
    super();
    this.features=['类型','推论']
  }
  //作为生命周期的钩子
  created(){

  }
  //声明方法将来会加入到methods,除了声明周期函数
  add(e: any){
    this.features.push(e.target.value);
    e.target.value ='';
  }
}
</script>

<style scoped>
</style>
