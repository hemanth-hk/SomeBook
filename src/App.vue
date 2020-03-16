<template>
  <div>
    <br>
  <nav class="navbar">
      <div class="container">
    <div class="navbar-brand">
      <h1 class="title">{{ $t("label.title") }}</h1>
    </div>
      <div class="navbar-end">
<div class="select">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
</div>
      </div>
      </div>
  </nav>
  <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue"
export default {
  name : "App",
    data () {
    return { langs: ['en', 'fr'] }
  },
  components : {
    Home
  }
}
</script>

