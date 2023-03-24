<template>
    <div class="stepone">
    <div class="item">
        <p>Name:</p>
        <input type="text" placeholder="Your name..." v-model="name">
    </div>
     <div class="item">
         <p>Surname:</p>
         <input type="text" placeholder="Your Surname" v-model="surname">
     </div>
     <button v-if="check" @click="$store.commit('stepone',{ name ,surname});handleClick();" >Next</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            name:"",
            surname:""
        }

    },
    methods:{
        handleClick(){
            this.$router.push("step2");

        }
    },
    computed:{
        check(){
            if(this.name!==""&&this.surname!==""){
                return true;

            }
            return false;         
        }
    }



}


</script>
