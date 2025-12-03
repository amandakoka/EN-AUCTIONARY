<template>
    <div>
        <h1>Add New Item</h1>
         <form @submit.prevent="handleSubmit">
            <label for="name">Name:</label>
            <input type="name" name="name"/>
            <br/><br/>

            <label for="description">Description:</label>
            <input type="description" name="description"/>
            <br/><br/>

            <label for="starting_bid">Starting Bid:</label>
            <input type="starting_bid" name="starting_bid"/>
            <br/><br/>

            <label for="end_date">End Date:</label>
            <input type="end_date" name="end_date"/>
            <br/><br/>
            
            <button type="submit">Add Item</button>
            <div v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: "",
            description: "",
            starting_bid: "",
            end_date: "",
            submitted: false,
            error: ""
        }
    },
    methods: {
        handleSubmit(e){
            this.submitted = true;
            this.error = ""
            const { name, description, starting_bid, end_date } = this

            if(!(name && description && starting_bid && end_date)){
                return;
            }
        }
    }
}
</script>