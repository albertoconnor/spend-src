<template>
  <div id="app" class="small-container">
    <h1>Expenses</h1>
    <expense-form @add:expense="addExpense" />
    <expense-table :total="total" @delete:expense="deleteExpense"/>
  </div>
</template>

<script>
import ExpenseForm from './components/ExpenseForm.vue'
import ExpenseTable from './components/ExpenseTable.vue'
import { store } from './store/store'

export default {
  name: 'app',
  store: store,
  components: {
    ExpenseForm,
    ExpenseTable,
  },
  data() {
    return {}
  },
  computed: {
    total() {
      let expenses = this.$store.getters.expenses
      if (expenses.length > 0) {
        let sum = this.$store.getters.expenses.map(item => parseFloat(item.amount)).reduce((a, b) => a + b)
        return sum.toFixed(2)
      } else {
        return 0
      }
    },
  },
  methods: {
      addExpense(expense) {
        this.$store.commit('addExpense', expense)
      },
      deleteExpense(id) {
        this.$store.commit('deleteExpense', id)
      },
  },
}
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>
