<template>
<div class="container">
<br>
<template v-for="(src,index) in Sources">
<div class="box" :key="index">
  <article class="media">
    <div class="media-left">
      <figure class="image">
        <img :src="src" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <span class="is-size-5"><strong>{{ $t("label.name") }} : </strong></span> <span class="is-size-4">{{ $t(`book${index + 1}.name`) }}</span>
        <br>
        <span class="is-size-5"><strong>{{ $t("label.author") }} : </strong></span> <span class="is-size-4">{{ $t(`book${index + 1}.author`) }}</span>
        <br>
        <span class="is-size-5"><strong>{{ $t("label.rating") }} : </strong></span> <span class="is-size-4">{{ $t(`book${index + 1}.rating`) }}</span>
        <br>
        <span class="is-size-4"><strong>{{ $t("label.description") }} : </strong></span>
        <span class="is-size-5">
          <p>{{ $t(`book${index + 1}.mainText.para1`) }}</p>
          <p>{{ $t(`book${index + 1}.mainText.para2`) }}</p>
          <template v-if="$t(`book${index + 1}.mainText.para3`)"><p>{{ $t(`book${index + 1}.mainText.para3`) }}</p></template>
        </span>
      </div>
    </div>
  </article>
</div>
</template>
</div>
</template>

<script>
import One from "@/assets/lord_of_rings.jpg"
import Two from "@/assets/mockingbird.jpg"
import Three from "@/assets/wonderful_wizard.jpg"
import Four from "@/assets/flew_over.jpg"
import Five from "@/assets/the_shining.jpg"

export default {
  name: 'MainGrid',
  data (){
    return {Sources : [One,Two,Three,Four,Five]}
  },
}
</script>