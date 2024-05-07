<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: ''
            
        }
    },
    mounted() {
        const token = localStorage.getItem("token");
        if (!token) {
            // Token not found, navigate back to login page
            this.$router.push('/');
            return; // Stop further execution
        }

        axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response && error.response.status === 401) {
                    // Token expired or unauthorized, navigate back to login page
                    localStorage.removeItem("name");
                    localStorage.removeItem("roleName");
                    localStorage.removeItem("username");
                    localStorage.removeItem("token");
                    localStorage.removeItem("endDate");
                    this.$router.push('/');
                }
                return Promise.reject(error);
            }
        );

        axios.get('http://localhost:3000/user-detail', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            // Update the name property with user information retrieved from the server
            this.name = response.data.name;
            this.username = response.data.username;
            this.roles = response.data.roleID;
            this.tel = response.data.telNumber;
            var roleName;
            if (this.roles == '1') {
                this.roleName = "General User"
            } else if (this.roles == '2') {
                this.roleName = "Super Staff"
            } else if (this.roles == '3') {
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