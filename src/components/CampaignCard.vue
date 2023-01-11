<template>
    <div class="col-lg-2-5 col-md-4 p-4">
        <div class="campaign-card card p-0 bg-primary-2 shadow">
            <div class="card-header p-3">
                <h5>{{title}}</h5>
            </div>
            <div class="card-body">
                <div class="row justify-content-center">
                    <img src="@/assets/logo.png" />
                </div>
            </div>
            <div class="card-footer">
                <div class="row justify-content-center text-center">
                    <div class="col-4">
                        <a href="#" class="campaign-card-button"><h6>View</h6></a>
                    </div>
                    <div class="col-4 border-left border-right">
                        <a href="#" class="campaign-card-button"><h6>Edit</h6></a>
                    </div>
                    <div class="col-4">
                        <a href="#" class="campaign-card-button"><h6>Delete</h6></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CampaignCard',
  props: {
    title:String
  }
}
</script>