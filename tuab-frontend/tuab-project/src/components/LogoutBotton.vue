<template>
    <button class="menu" @click="logout">LOGOUT</button>
</template>

<script>
export default{
    methods: {
        logout() {
            localStorage.removeItem("username");
            sessionStorage.removeItem("role");
            this.$router.push('/');
        }
    },
}
</script>