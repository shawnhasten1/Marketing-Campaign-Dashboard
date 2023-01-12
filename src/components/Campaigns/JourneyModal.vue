<template>
    <div :style="{display:displayModal}">
        <div class="custom-modal" @click="$emit('closeModal')">
        </div>
        <div class="custom-modal-dialog shadow p-4">
            <div class="custom-modal-header">
                <h5>Create Journey</h5>
            </div>
            <hr/>
            <div class="custom-modal-body">
                <form>
                    <div class="form-outline mb-4 mt-4">
                        <label class="form-label" for="form2Example1">Unique ID</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="unique_id"/>
                    </div>
                    <a href="#" class="btn btn-primary btn-block mb-2" @click="createJourney()" >Create Journey</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import axios from 'axios';

export default {
    name: 'JourneyModal',
    props:{
        show:Boolean
    },
    data: function(){
        return {
            unique_id:''
        }
    },
    methods:{
        createJourney(){
            console.log('TEST');
            this.$emit('closeModal');
        }
    },
    computed:{
        displayModal(){
            if(this.show) return '';
            return 'none';
        }
    }
}
</script>