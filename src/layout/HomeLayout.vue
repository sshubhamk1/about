<template>
  <main>
    <SideBar />
    <div class="main-content">
      <NavBar />
      <router-view></router-view>
    </div>
  </main>
</template>
<script>
import SideBar from '@/components/Sidebar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomeLayout',
  components: {
    SideBar,
    NavBar
  }
}
</script>
<style></style>
