<template>
    <button class="menu" @click="logout">LOGOUT</button>
</template>

<script>
export default{
    methods: {
        logout() {
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            this.$router.push('/');
        }
    },
}
</script>