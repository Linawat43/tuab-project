<script>
import axios from 'axios';
export default{
    mounted() {
        const token = localStorage.getItem("token");
        if (!token) {
            // Token not found, navigate back to login page
            this.$router.push('/');
            return; // Stop further execution
        }

        axios.get('http://localhost:3000/user-detail', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            // Update the name property with user information retrieved from the server
            this.name = response.data.name;
            this.roles = response.data.roleID;
            var roleName;
            if(this.roles == '1'){
                this.roleName = "General User"
            }
            else if(this.roles == '2'){
                this.roleName = "Super Staff"
            }
            else if(this.roles == '3'){
                this.roleName = "Staff"
            }
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
            // Handle error appropriately, such as displaying an error message
        });
    },
}
</script>