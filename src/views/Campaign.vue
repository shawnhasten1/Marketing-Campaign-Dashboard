<template>
    <div>
        <Navbar />
        <CampaignMain :title="campaign.name" />
    </div>
</template>

<script>
import axios from 'axios';

import Navbar from '@/components/Navbar.vue'
import CampaignMain from '@/components/Campaigns/CampaignMain.vue'
import {authUser} from '@/utils'

export default {
    name: 'Campaign',
    components: {
    Navbar,CampaignMain
    },
    data: function(){
        return {
            campaign:{},
        }
    },
    methods:{
        loadCampaign(){
            var config = {
                headers:{
                    Authorization:localStorage.Authorization
                }
            };

            var paths = window.location.pathname.split('/'); 
            var campaign_id = paths[2];
            axios.get("http://localhost:5000/campaigns/"+campaign_id, config)
            .then(response => {
                this.campaign = response.data;
            })
        }
    },
    beforeMount(){
        authUser(),
        this.loadCampaign()
    }
}
</script>