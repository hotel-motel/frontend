<template>
  <div class="grid gap-2">
    <span class="h4">
        <div class="badge badge-primary">
            Passengers list
        </div>
    </span>
    <table class="table table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">National code</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(passenger, index) in passengers">
        <th scope="row">{{ index+1 }}</th>
        <td>{{ passenger.first_name }}</td>
        <td>{{ passenger.last_name }}</td>
        <td>{{ passenger.national_code }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  props:['passengers']
}
</script>
