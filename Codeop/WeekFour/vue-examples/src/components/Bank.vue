

<template>
<div>
    <div>Income</div>
    <div>{{ income }}£</div>
</div>

<div>
    <div>Outcome</div>
    <div>{{ income }}£</div>
</div>
<div>
    <div>Balance</div>
    <div>{{ balance }}£</div>
</div>
<div>
    <input type="text" v-model="expenseName" />
    <input type="number" v-model="amount" />
    <button @click="addItem">Add Item</button>

    <ul>
        <li v-for="item in items">{{ item }}</li>
    </ul>
</div>

</template>

<script>

export default {
data() {
    return {
        income: 200,
        outcome: -37,
        expenseName: "",
        amount: 0,
        items: [{name: "", amount:0}],
    };
},
    computed: {
        balance(){
            return this.income + this.outcome;
        },
    },
    methods: {
        addItem() {
            this.items.push({
                name: this.expenseName,
                amount: this.amount,
            });
        }
    },
};
</script>