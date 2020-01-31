<template>
  <div class="container">
    secret page
  </div>
</template>
<script>
export default {
  middleware ({ store, redirect }) {
      return redirect('/')
  }
}
</script>