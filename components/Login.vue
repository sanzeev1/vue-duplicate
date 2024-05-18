<template>
    <div class="login-form">
        <form v-on:submit="login">
            <input type="email" name="user-name" v-on:change="setEmail" placeholder="Username">
            <input type="password" name="user-password" v-on:change="setPassword" placeholder="Password">
            <div class="button-box">
                <div class="login-toggle-btn">
                    <input type="checkbox">
                    <label>Remember me</label>
                    <!-- <a href="#">Forgot Password?</a> -->
                </div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    methods: {

        setEmail(e) {
            this.email = e.target.value;
        },
        setPassword(e) {
            this.password = e.target.value;
        },

        login(e) {
            e.preventDefault();



            fetch('https://api.cheparo.com/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                })
            }).then(async (res) => {
                if (res.ok) {
                    const body = await res.json();
                    localStorage.setItem('user', JSON.stringify(body));
                    window.location = "/"

                } else {
                    throw "Incorrect Login Details";
                }
            }).catch((err) => {
                alert(err);
            })
        }
    },
    mounted() {
        const user = localStorage.getItem('user');
        if (user) window.location = '/my-account';

    },

};
</script>
