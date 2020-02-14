<template>
    <div>
        <v-row>
            <v-col class="d-flex" cols="12" sm="6">
                <v-select
                v-model="model"
                :items="items"
                label="Genre"
                outlined
                ></v-select>
                <v-text-field label="Year" outlined v-model="year"></v-text-field>
                <v-card hover height="64%" width="65%" >  
                    <v-card-title @click="ApplyFilters"> Apply filters </v-card-title>
                </v-card>
            </v-col>
                
        </v-row>
    </div>
    
</template>

<script>

export default {
    data(){
        return{
            model:'all',
            value:false,
            items: ['movie', 'series', 'all'],
            year:''
            }
        },
    methods:{
        ApplyFilters(){
            this.$emit('ApplyFilters', {genre:this.model, year:this.year})
        }
    }
}
</script>

<style>
.filter-apply{
    background-color: rgb(162, 232, 228);
    width:120px;
    height:65%;
    padding: 0px;
    color: black ;
    border: 4px solid rgb(72, 92, 165);
    border-radius: 2px;
    display: inline-block;
    transition: all 0.3s ease 0s;
}

.filter-apply:hover{
  color: black;
  border-color:black;
  transition: all 0.3s ease 0s;
}

</style>