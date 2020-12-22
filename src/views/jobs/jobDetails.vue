<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <h4> this is the job id : {{ job.id }}</h4>
        <h4> {{ job.details }}</h4>
    </div>
    <div v-else>
        <p>Loding job...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data () {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // }
    data () {
        return {
            job: null
        }
    }
    ,
    mounted () {
        fetch('http://localhost:3000/jobs/'+ this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message));
    }

}
</script>

<style>

</style>