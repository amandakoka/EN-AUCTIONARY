<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <label for="email">Email:</label>
            <input type="email" name="email" v-model="email"/>
            <div v-show="submitted && !email">Email is required</div>
            <br/><br/>

            <label for="password">Password:</label>
            <input type="password" name="password" v-model="password"/>
            <div v-show="submitted && !password">Password is required</div>
            <br/><br/>
            
            <button type="submit">Login</button>
            <div v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
import * as EmailValidator from "email-validator";

export default {

    data() {
        return {
            email: "",
            password: "",
            submitted: false,
            error: ""
        }
    },
    methods: {
        handleSubmit(e){
            this.submitted = true;
            this.error = ""
            const { email, password } = this

            if(!(email && password)){
                return;
            }

            if(!(EmailValidator.validate(email))){
                this.error = "Please enter a valid email address"
                return;
            }

            const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(!(password_pattern.test(password))){
                this.error = "Password not strong enough."
                return;
            }
        }
    }
}
</script>