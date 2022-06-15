<script lang="ts">
export default {
  layout: "default"
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { useFetch } from "#app";
const searchText = ref("");

const myData = ref([]) as any;

const count = ref(0);
async function searchForStuff() {
  const data = await fetch(`/api/hello?search=${searchText.value}`);
  const json = await data.json();
  console.log("data.value", json);
  myData.value = json;
}
</script>
<template>
  <div>
    <form class="form" @submit.prevent="searchForStuff">
      <input type="text" v-model="searchText" />
      <button>Search For TV Shows</button>
    </form>
    <div class="stuff">
      <div v-for="show in myData" :key="show.id">
        <img :src="show.show?.image?.medium"/>
      </div>
    </div>
  </div>
</template>

<style>
.stuff {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 10px;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
</style>
