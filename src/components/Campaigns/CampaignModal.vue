<template>
    <div :style="{display:displayModal}">
        <div class="custom-modal" @click="$emit('closeModal')">
        </div>
        <div class="custom-modal-dialog shadow p-4">
            <div class="custom-modal-header">
                <h5>Create Campaign</h5>
            </div>
            <hr/>
            <div class="custom-modal-body">
                <form>
                    <div class="form-outline mb-4 mt-4">
                        <label class="form-label" for="form2Example1">Campaign Name</label>
                        <input type="text" id="form2Example1" class="form-control" v-model="name"/>
                    </div>
                    <a href="#" class="btn btn-primary btn-block mb-2" @click="createCampaign()">Create Campaign</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Modal',
    props:{
        show:Boolean
    },
    data: function(){
        return {
            name:''
        }
    },
    methods:{
        createCampaign(){
            var config = {
                headers:{
                    Authorization:localStorage.Authorization
                }
            };
            axios.post('http://localhost:5000/campaigns', {
                "name":this.name
            }, config).then(response => {
                console.log(response.token);
                this.$emit('closeModal');
                this.$emit('loadCamps');
            })
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