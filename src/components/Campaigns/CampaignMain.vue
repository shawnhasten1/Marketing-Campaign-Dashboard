<template>
    <main>
        <div class="mt-4 p-4">
            <div class="row justify-content-between">
                <div class="col">
                    <h4>{{ title }}</h4>
                </div>
                <div class="col" style="text-align:right;">
                    <a href="#" class="btn btn-primary btn-block text-white" @click="modal('journey-modal', 'show')"><b>Create Journey</b></a>
                </div>
            </div>
        </div>
        <hr/>
        <div class="p-4 row justify-content-center">
            <div class="card login-card p-4 col-lg-8 col-sm-12 bg-primary-2">
                <CampaignNav/>
                <JourneysTable :journey="loadJourneysFlag"/>
            </div>
        </div>
        <ModalTest/>
    </main>
</template>

<script>
import CampaignNav from './CampaignNav.vue';
import JourneysTable from './JourneysTable.vue';
import ModalTest from './ModalTest.vue';

import { modalController } from '@/utils';

export default {
    name: 'MainCampaign',
    components:{
        CampaignNav,JourneysTable,ModalTest
    },
    props: {
        title:String
    },
    data: function(){
        return {
            show:false,
            loadJourneysFlag:0
        }
    },
    methods:{
        modal:modalController,
        loadJourneys(){
            this.loadJourneysFlag = this.loadJourneysFlag + 1;
        }
    }
}
</script>

<style scoped>

</style>