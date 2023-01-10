<template>
    <main>
        <div class="mt-4 p-4">
            <div class="row justify-content-between">
                <div class="col">
                    <h4>{{ title }}</h4>
                </div>
                <div class="col" style="text-align:right;">
                    <a href="#" class="btn btn-primary btn-block text-white"><b>Create Campaign</b></a>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row justify-content-center">
            <CampaignCard v-for="card in 15" :key="card" title="Campaign Name"/>
        </div>
    </main>
</template>

<script>
import CampaignCard from '@/components/CampaignCard.vue'
export default {
  name: 'MainContent',
  components:{
    CampaignCard
  },
  props: {
    title:String
  }
}
</script>