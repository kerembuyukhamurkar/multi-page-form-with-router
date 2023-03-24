<template>
    <div class="list">
        <div>
            <h1>Name: </h1>
            <h2>{{ this.$store.state.person.name }}</h2>
        </div>
        <div>
            <h1>Surname: </h1>
            <h2>{{ this.$store.state.person.lastname }} </h2>
        </div>
        <div>
            <h1>Phonenumber: </h1>
            <h2>{{ this.$store.state.person.phonenumber }} </h2>
        </div>
        <div>
            <h1>Email:</h1>
            <h2>{{ this.$store.state.person.email }} </h2>
        </div>
        <div>
            <h1>Country: </h1>
            <h2>{{ this.$store.state.person.country }} </h2>
        </div>
        <div>
            <h1>Point Given:</h1>
            <h2>{{ this.$store.state.person.point }} </h2>
        </div>
        
        <button>Comfirm</button>
    </div>
</template>
