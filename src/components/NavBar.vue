<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link to="/about"
            ><button class="navbar-link active" data-nav-link>About</button></router-link
          >
        </li>

        <li class="navbar-item">
          <router-link to="/resume" class="navbar-item"
            ><button class="navbar-link" data-nav-link>Resume</button></router-link
          >
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Portfolio</button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Blog</button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>Contact</button>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style></style>
