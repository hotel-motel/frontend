<template>
  <div class="alert alert-danger" role="alert">
    {{ form.errors.get(name) }}
  </div>
</template>

<script>
export default {
  props: ['name', 'form']
}
</script>
