<template>
  <div id="expense-form">
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input v-model="expense.name" type="text" />
      <label>Amount</label>
      <input v-model="expense.amount" type="number" step="0.01"/>
      <button>Add Expense</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'expense-form',
    data() {
      return {
        expense: {
          name: '',
          amount: '',
        },
      }
    },
    methods: {
      handleSubmit() {
        this.$emit(
          'add:expense',
          {
            id: Date.now(),
            time: Date.now(),
            name: this.expense.name,
            amount: this.expense.amount
          }
        )
      },
    },
  }
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }
</style>
