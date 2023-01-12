<template>
    <div>
        <table class="mt-4 table">
            <thead style="vertical-align:middle;">
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created</th>
                <th scope="col">Last Modified</th>
                <th scope="col">Actions</th>
            </thead>
            <tbody v-if="journeys.length>0">
                <tr v-for="journey in journeys" :key="journey">
                    <td>{{journey.name_first}} {{ journey.name_last }}</td>
                    <td>Active</td>
                    <td>{{journey.created_date}}</td>
                    <td>{{journey.created_date}}</td>
                    <td>
                        <a href="#" class="btn m-1 btn-primary">Edit</a>
                        <a href="#" class="btn m-1 btn-danger">Delete</a>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5" class="p-3" style="border:none">No journeys to display</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'JourneysTable',
    props:{
        journey:Number
    },
    data(){
        return{
            journeys:[]
        }
    },
    watch:{
        journey(){
            this.loadJourneys();
        }
    },
    beforeMount(){
        this.loadJourneys();
    },
    methods:{
        loadJourneys(){
            var config = {
                headers:{
                    Authorization:localStorage.Authorization
                }
            };

            var paths = window.location.pathname.split('/'); 
            var campaign_id = paths[2];
            axios.get(`http://localhost:5000/campaigns/${campaign_id}/journeys`,config)
            .then(res=>{
                this.journeys = res.data
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
}
</script>