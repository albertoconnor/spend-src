<template>
  <div id="expense-table">
    <strong>Total: ${{ total }}</strong>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Name</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in this.$store.getters.expenses" :key="expense.id">
          <td>{{ dateFmt(expense.time) }}</td>
          <td>{{ expense.name }}</td>
          <td>${{ expense.amount }}</td>
          <td><button @click="$emit('delete:expense', expense.id)">x</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'expense-table',
    props: ['total'],
    methods: {
      dateFmt: function (timestamp) {
        let date = new Date(timestamp)
        return date.toLocaleDateString()
      }
    }
  }
</script>

<style scoped></style>
