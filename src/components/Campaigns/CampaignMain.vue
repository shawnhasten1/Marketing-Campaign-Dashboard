<template>
    <main>
        <div class="mt-4 p-4">
            <div class="row justify-content-between">
                <div class="col">
                    <h4>{{ title }}</h4>
                </div>
                <div class="col" style="text-align:right;">
                    <a href="#" class="btn btn-primary btn-block text-white" @click="show=true"><b>Create Journey</b></a>
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
        <JourneyModal :show="show" @closeModal="show=false; loadJourneysFlag++;" @loadJourneys="loadJourneysFlag++"/>
    </main>
</template>

<script>
import CampaignNav from './CampaignNav.vue';
import JourneysTable from './JourneysTable.vue';
import JourneyModal from './JourneyModal.vue';

export default {
    name: 'MainCampaign',
    components:{
        CampaignNav,JourneysTable,JourneyModal
    },
    props: {
        title:String
    },
    data: function(){
        return {
            show:false,
            loadJourneysFlag:0
        }
    }
}
</script>

<style scoped>

</style>