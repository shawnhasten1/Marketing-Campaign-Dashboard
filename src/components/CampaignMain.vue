<template>
    <main>
        <div class="mt-4 p-4">
            <div class="row justify-content-between">
                <div class="col">
                    <h4>{{ title }}</h4>
                </div>
                <div class="col" style="text-align:right;">
                    <a href="#" class="btn btn-primary btn-block text-white" @click="show=true"><b>Create Campaign</b></a>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row campaign-row">
            <CampaignCard v-for="campaign in campaigns" :key="campaign" :campaign="campaign" @loadCamps="loadCampaigns()"/>
        </div>
        <Modal :show="show" @closeModal="show=false;" @loadCamps="loadCampaigns()"/>
    </main>
</template>

<script>
import axios from 'axios';

import Modal from '@/components/Modal.vue'
import CampaignCard from '@/components/CampaignCard.vue'

export default {
    name: 'MainContent',
    components:{
        CampaignCard,Modal
    },
    props: {
        title:String
    },
    data: function(){
        return {
            campaigns:[],
            show:false
        }
    },
    beforeMount(){
        this.loadCampaigns();
    },
    methods:{
        loadCampaigns(){
            var config = {
                headers:{
                    Authorization:localStorage.Authorization
                }
            };
            axios.get("http://localhost:5000/campaigns", config)
            .then(response => {
                this.campaigns = response.data;
            })
        }
    }
}
</script>