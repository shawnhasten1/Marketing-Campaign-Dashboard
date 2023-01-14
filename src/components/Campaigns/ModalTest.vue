<template>
    <div class="modal-active" id="journey-modal" style="display:none">
        <div class="custom-modal" @click="modal('journey-modal', 'dismiss')">
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
                        <input type="text" id="form2Example1" class="form-control"/>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col">
                            <a href="#" class="btn btn-primary btn-block mb-2">Create Journey</a>
                        </div>
                        <div class="col text-right">
                            <a href="#" @click="modal('journey-modal', 'dismiss')" class="btn btn-danger btn-block mb-2">Close</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { modalController } from '@/utils';
export default {
    name: 'JourneyModal',
    methods:{
        modal:modalController
    }
}
</script>