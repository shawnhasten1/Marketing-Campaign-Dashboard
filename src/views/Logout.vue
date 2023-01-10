<template>
    <div></div>
</template>

<script>
import {authUser} from '@/utils'
export default {
    name: 'Logout',
    beforeMount(){
        localStorage.Authorization = null;
        authUser();
    }
}
</script>
