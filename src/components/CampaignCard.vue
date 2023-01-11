<template>
    <div class="col-lg-2-5 col-md-4 p-4">
        <div class="campaign-card card p-0 bg-primary-2 shadow">
            <div class="card-header p-3">
                <h5>{{campaign.name}}</h5>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <img src="@/assets/logo.png" />
                </div>
            </div>
            <div class="card-footer">
                <div class="row justify-content-center text-center">
                    <div class="col-4">
                        <a href="#" class="campaign-card-button"><h5>View</h5></a>
                    </div>
                    <div class="col-4 border-left border-right">
                        <a href="#" class="campaign-card-button"><h5>Edit</h5></a>
                    </div>
                    <div class="col-4">
                        <a href="#" class="campaign-card-button" @click="deleteCampaign()"><h5>Delete</h5></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CampaignCard',
  props: {
    campaign:Object
  },
  methods:{
    deleteCampaign(){
        var config = {
            headers:{
                Authorization:localStorage.Authorization
            }
        };
        axios.delete('http://localhost:5000/campaigns/'+this.campaign.id, config)
        .then(response => {
            console.log(response);
            this.$emit('loadCamps');
        })
    }
  },
  computed:{
    editLink(){
        return "/campaigns/edit/" + this.campaign.id;
    }
  }
}
</script>