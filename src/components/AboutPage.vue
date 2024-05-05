<template>
  <div>
    <article class="about active" data-page="about">
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          👋 Hi there! I'm Shubham, a seasoned Senior Software Engineer with a passion for tackling
          new challenges and delivering innovative solutions. With a strong foundation in C, C++,
          Python, Bash, Git, and Linux, I have honed my skills over two years of industry experience
          and actively contribute to code reviews.
        </p>

        <p>
          🌟 My expertise lies in developing robust and scalable software systems, leveraging my
          in-depth knowledge of data structures and algorithms. I thrive in dynamic environments
          that push the boundaries of technology, constantly seeking opportunities to optimize
          performance and enhance user experiences.
        </p>
        <p>
          🔍 As a diligent reviewer of code, I possess a keen eye for detail and a strong commitment
          to maintaining code quality. I believe in fostering collaboration and continuously
          learning from others, recognizing the importance of constructive feedback and mentorship
          to drive personal and team growth.
        </p>
        <p>
          💡 I find immense satisfaction in solving complex problems, and my passion for data
          structures and algorithms fuels my curiosity for finding optimal solutions. I approach
          challenges with a strategic mindset, always striving to balance efficiency, scalability,
          and maintainability in my designs.
        </p>
        <p>
          ✨ Beyond my technical skills, I thrive in cross-functional teams, collaborating closely
          with stakeholders to understand their needs and deliver software solutions that exceed
          expectations. I am a proactive learner, constantly staying up-to-date with the latest
          industry trends and technologies.
        </p>
        <p>
          🌍 If you are seeking a Senior Software Engineer who excels in data structures and
          algorithms, is committed to code quality, and thrives in challenging environments, let's
          connect! I am always eager to explore new opportunities and contribute to impactful
          projects that make a difference.
        </p>
      </section>

      <!--
      - service
    -->

      <section class="service">
        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">
          <li class="service-item">
            <div class="service-icon-box">
              <img :src="this.iconDesign" alt="design icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Backend Development</h4>

              <p class="service-item-text">
                Currently making backend microservices in Python and learning golang for future
                projects.
              </p>
            </div>
          </li>
          <li class="service-item">
            <div class="service-icon-box">
              <img :src="this.iconDev" alt="Web development icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                High-quality development of sites at the professional level, using Vue.js at
                frontend
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img :src="this.iconApp" alt="mobile app icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Cyber Security</h4>

              <p class="service-item-text">
                Participating in CTF events to learn about latest security bugs and how to deal with
                those.
              </p>
            </div>
          </li>

          <li class="service-item">
            <div class="service-icon-box">
              <img :src="this.iconPhoto" alt="camera icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Learning</h4>

              <p class="service-item-text">
                I'm currently learning Machine learning and blockchain and highly instrested in jobs
                related to it.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <!--
      - testimonials
    -->

      <section class="testimonials">
        <h3 class="h3 testimonials-title">Skills</h3>

        <ul class="testimonials-list has-scrollbar">
          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  :src="this.iconAvatar1"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Python3</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the
                  work done. She has a lot of experience and is very concerned about the needs of
                  client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                  seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  :src="this.iconAvatar2"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the
                  work done. She has a lot of experience and is very concerned about the needs of
                  client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                  seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  :src="this.iconAvatar3"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the
                  work done. She has a lot of experience and is very concerned about the needs of
                  client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                  seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>
            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>
              <figure class="testimonials-avatar-box">
                <img
                  :src="this.iconAvatar4"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the
                  work done. She has a lot of experience and is very concerned about the needs of
                  client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit,
                  seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!--
      - testimonials modal
    -->

      <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">
          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img :src="this.iconAvatar1" alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img :src="this.iconQuote" alt="quote icon" />
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title" data-modal-title>Python3</h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work
                done. She has a lot of experience and is very concerned about the needs of client.
                Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      <!--
      - clients
    -->

      <section class="clients">
        <h3 class="h3 clients-title">Experience</h3>

        <ul class="clients-list has-scrollbar">
          <li class="clients-item">
            <a href="#">
              <img :src="this.iconLogo1Color" alt="Radisys" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img :src="this.iconLogo1Color2" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img :src="this.iconLogo1Color3" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img :src="this.iconLogo1Color4" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img :src="this.iconLogo1Color5" alt="client logo" />
            </a>
          </li>

          <!-- <li class="clients-item">
                <a href="#">
                  <img :src="this.iconLogo1Color6" alt="client logo" />
                </a>
              </li> -->
        </ul>
      </section>
    </article>
  </div>
</template>
<script>
import iconDev from '@/assets/images/icon-dev.svg'
import iconDesign from '@/assets/images/icon-design.svg'
import blog1 from '@/assets/images/blog-1.jpg'
import blog2 from '@/assets/images/blog-2.jpg'
import blog3 from '@/assets/images/blog-3.jpg'
import blog4 from '@/assets/images/blog-4.jpg'
import blog5 from '@/assets/images/blog-5.jpg'
import blog6 from '@/assets/images/blog-6.jpg'
import project1 from '@/assets/images/project-1.jpg'
import project2 from '@/assets/images/project-2.png'
import project3 from '@/assets/images/project-3.jpg'
import project4 from '@/assets/images/project-4.png'
import project5 from '@/assets/images/project-5.png'
import project6 from '@/assets/images/project-6.png'
import project7 from '@/assets/images/project-7.png'
import project8 from '@/assets/images/project-8.jpg'
import project9 from '@/assets/images/project-9.png'
import iconApp from '@/assets/images/cybersecurity.svg'
import iconPhoto from '@/assets/images/work-learn-fight.svg'
import iconAvatar1 from '@/assets/images/python-logo-only.svg'
import iconAvatar2 from '@/assets/images/avatar-2.png'
import iconAvatar3 from '@/assets/images/avatar-3.png'
import iconAvatar4 from '@/assets/images/avatar-4.png'
import iconLogo1Color from '@/assets/images/radisys.svg'
import iconLogo1Color2 from '@/assets/images/think201.svg'
import iconLogo1Color3 from '@/assets/images/nitk.jpg'
import iconLogo1Color4 from '@/assets/images/lpu.svg'
import iconLogo1Color5 from '@/assets/images/ctftime.svg'
import iconLogo1Color6 from '@/assets/images/logo-6-color.png'
export default {
  name: 'AboutPage',
  setup() {
    return {
      iconDev,
      iconDesign,
      blog1,
      blog2,
      blog3,
      blog4,
      blog5,
      blog6,
      project1,
      project2,
      project3,
      project4,
      project5,
      project6,
      project7,
      project8,
      project9,
      iconApp,
      iconPhoto,
      iconAvatar1,
      iconAvatar2,
      iconAvatar3,
      iconAvatar4,
      iconLogo1Color,
      iconLogo1Color2,
      iconLogo1Color3,
      iconLogo1Color4,
      iconLogo1Color5,
      iconLogo1Color6
    }
  }
}
</script>
<style></style>
