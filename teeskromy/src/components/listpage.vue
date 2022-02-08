<template>
  <div>
    <ul>
      <li v-for="tshirt in list" :key="tshirt.id">
        <p v-if='tshirt.flag != ""' class="flag" v-bind:class="{ red: tshirt.flag == 'NEW', blue: tshirt.flag=='Sale!'}">{{tshirt.flag}}</p>
        <img :src="tshirt.imageURL" alt="">
        <h3>{{tshirt.name}}</h3>
        <p class="price">{{tshirt.price}}</p>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Listpage',
  props: {
    list: {
      type: Array
    }
  },
  data(){
    return{
      isNew: false,
      isSale: false
    }
  },
  methods: {
    check(tshirt) {
      if(tshirt.flag == "NEW"){
        this.isNew=true;
        this.isSale=false;
      }
      else if(tshirt.flag == "Sale!"){
        this.isNew=false;
        this.isSale=true;
      }
      else{
        this.isNew=false;
        this.isSale=false;
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
  }
  li{
    list-style: none;
    grid-column: 0/1;
    
  }
  img{
    width: 300px;
  }
  .red{
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(-45deg);
    color: white;
    background-color: red;
    text-align: center;
  }
  .blue{
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    transform: rotate(-45deg);
    color: white;
    background-color: blue;
    text-align: center;
  }
</style>