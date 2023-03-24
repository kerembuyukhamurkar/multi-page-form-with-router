<template>
    <div>

        <div class="item">
            <p>Phonenumber:</p>
            <input type="text" placeholder="Phonenumber..." v-model="phonenumber">
        </div>

        <div class="item">
            <p>Email:</p>
            <input type="text" placeholder="Email..." v-model="email">
        </div>

        <div class="item">
            <p>Country:</p>
            <input type="text" placeholder="Country..." v-model="country">
        </div>

        <div class="points item">
            <p>Point:</p>
            <div class="points_flex">
                <p @click="handlePoint" class="point">1</p>
                <p @click="handlePoint" class="point">2</p>
                <p @click="handlePoint" class="point">3</p>
                <p @click="handlePoint" class="point">4</p>
                <p @click="handlePoint" class="point">5</p>
            </div>
        </div>

        <div class="buttons item">
            <button @click="this.$router.push('/')">Back</button>
            <button v-if="check"
                @click="$store.commit('steptwo', { phonenumber, email, country, point }); this.$router.push('step3')">Next</button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            phonenumber: "",
            email: "",
            point: "",
            country: "",
            

        }
    },
    methods: {
        handlePoint(event) {
            this.point = event.target.innerHTML;
            if(document.querySelectorAll(".clicked").length!==0){
               document.querySelector(".clicked").classList.remove("clicked"); 
            }
            
            event.target.classList.add("clicked");

        }
    },
    computed: {
        check() {
            if (this.point !== "" && this.country !== "" && this.email !== "" && this.phonenumber !== "") {
                return true;

            }
            return false;
        }
    }







}



</script>
