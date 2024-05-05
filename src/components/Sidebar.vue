<template>
  <div>
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img :src="this.profilePic" alt="Shubham Kumar" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="Shubham Kumar">Shubham Kumar</h1>

          <p class="title">Senior Software Engineer</p>
        </div>
        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <!-- <ion-icon name="chevron-down"></ion-icon> -->
        </button>
      </div>

      <div class="sidebar-info_more">
        <div class="separator"></div>

        <ul class="contacts-list">
          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:sshubhamk1@hotmail.com" class="contact-link"
                >sshubhamk1@hotmail.com</a
              >
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+919877883408" class="contact-link">(+91) 9877 88 3408</a>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">July 1st, 1997</time>
            </div>
          </li>

          <li class="contact-item">
            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Bangalore, India</address>
            </div>
          </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          <li class="social-item">
            <a href="http://linkedin.com/in/sshubhamk1/" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://twitter.com/shubh_app" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://instagram.com/shubh_app/" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://stackoverflow.com/users/6834611/shubham-kumar" class="social-link">
              <ion-icon name="logo-stackoverflow"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://leetcode.com/sshubhamk1/" class="social-link">
              <ion-icon name="code-slash-outline"></ion-icon>
            </a>
          </li>
          <li class="social-item">
            <a href="https://github.com/sshubhamk1" class="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
<script>
import profilePic from '@/assets/images/profile.jpeg'
export default {
  name: 'SideBar',
  setup() {
    return {
      profilePic
    }
  }
}
</script>
<style></style>
