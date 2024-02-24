<template>
    <button class="menu" @click="logout">LOGOUT</button>
</template>

<script>
export default{
    methods: {
        logout() {
            localStorage.removeItem("username");
            this.$router.push('/');
        }
    },
}
</script>