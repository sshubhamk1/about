<template>
  <div>
    <article class="resume active" data-page="resume">
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              National Institute of Technology Karnataka, Surathkal
            </h4>

            <span>2019 — 2022</span>

            <p class="timeline-text">
              I did my master's with research in Computer Science and Engineering -Information
              Security. I studied 'Number Theory & Cryptography', 'Algorithms And Complexity', and
              'Network Security' as a part of my coursework and did my research on 'Network-level
              Mitigation of Mirai Malware in IoT' as a part of my research work.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Lovely Professional University</h4>

            <span>2015 — 2019</span>

            <p class="timeline-text">
              I did my bachelor's in Computer Science & Engineering with 'Cybersecurity' as my major
              and 'Embedded Systems' as my minor. I studied multiple programming languages
              (C/C++/Python/Java) as a part of my coursework. I also studied 'Computer Networks',
              'Database Management Systems', 'Operating Systems', 'Data Structures & Algorithms',
              'Compilers', 'Computer Organization and Design', and 'Artificial Intelligence'.
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="business-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Scale AI</h4>

            <span>Mar 2024 — Present</span>

            <p class="timeline-text">
              Training AI large language models, helping cutting-edge generative AI models write
              better code. Projects typically include discrete, highly variable problems that
              involve engaging with these models as they learn to code.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Techstat dynamics pvt ltd</h4>

            <span>Dec 2023 — Feb 2024</span>

            <p class="timeline-text">
              Created Microservices to monitor and place trades using a portal. Microservice based
              architecture with realtime data.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Radisys Coorporation</h4>

            <span>Jul 2021 — Dec 2023</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti,
              quos dolores et quas molestias exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Think 201</h4>

            <span>Sep 2020 — Nov 2020</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti,
              quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 80%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 70%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 90%"></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style="width: 50%"></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>
<script>
import iconDev from '@/assets/images/icon-dev.svg'
import iconDesign from '@/assets/images/icon-design.svg'
export default {
  name: 'ResumePage',
  setup() {
    return {
      iconDev,
      iconDesign
    }
  }
}
</script>
<style></style>
