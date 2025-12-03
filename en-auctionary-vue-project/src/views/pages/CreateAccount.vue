<template>
    <div>
        <h1>Create Account</h1>
        <form @submit.prevent="handleSubmit">
            <label for="first_name">First Name:</label>
            <input type="name" name="first_name"/>
            <br/><br/>

            <label for="last_name">Last Name:</label>
            <input type="last_name" name="last_name"/>
            <br/><br/>

            <label for="email">Email:</label>
            <input type="email" name="email"/>
            <br/><br/>

            <label for="password">Password:</label>
            <input type="password" name="password"/>
            <br/><br/>
            
            <button type="submit">Create Account</button>
            <div v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
import * as EmailValidator from "email-validator";

export default {

    data() {
        return {
            first_name: "",
            last_name: "",
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
            const { first_name, last_name, email, password } = this

            if(!(first_name && last_name && email && password)){
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