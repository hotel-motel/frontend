<template>
  <div class="d-grid gap-2">
    <h6 class="display-6 fw-bold lh-1 mb-3 alert alert-primary">
      Passengers list
    </h6>
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
