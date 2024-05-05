<template>
  <div>
    <main>
      <!--
  - #SIDEBAR
-->
      <SideBar />
      <!--
  - #main-content
-->

      <div class="main-content">
        <!--
    - #NAVBAR
  -->

        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-item">
              <button class="navbar-link active" data-nav-link>About</button>
            </li>

            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Resume</button>
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

        <!--
    - #ABOUT
  -->

        <article class="about active" data-page="about">
          <header>
            <h2 class="h2 article-title">About me</h2>
          </header>

          <section class="about-text">
            <p>
              👋 Hi there! I'm Shubham, a seasoned Senior Software Engineer with a passion for
              tackling new challenges and delivering innovative solutions. With a strong foundation
              in C, C++, Python, Bash, Git, and Linux, I have honed my skills over two years of
              industry experience and actively contribute to code reviews.
            </p>

            <p>
              🌟 My expertise lies in developing robust and scalable software systems, leveraging my
              in-depth knowledge of data structures and algorithms. I thrive in dynamic environments
              that push the boundaries of technology, constantly seeking opportunities to optimize
              performance and enhance user experiences.
            </p>
            <p>
              🔍 As a diligent reviewer of code, I possess a keen eye for detail and a strong
              commitment to maintaining code quality. I believe in fostering collaboration and
              continuously learning from others, recognizing the importance of constructive feedback
              and mentorship to drive personal and team growth.
            </p>
            <p>
              💡 I find immense satisfaction in solving complex problems, and my passion for data
              structures and algorithms fuels my curiosity for finding optimal solutions. I approach
              challenges with a strategic mindset, always striving to balance efficiency,
              scalability, and maintainability in my designs.
            </p>
            <p>
              ✨ Beyond my technical skills, I thrive in cross-functional teams, collaborating
              closely with stakeholders to understand their needs and deliver software solutions
              that exceed expectations. I am a proactive learner, constantly staying up-to-date with
              the latest industry trends and technologies.
            </p>
            <p>
              🌍 If you are seeking a Senior Software Engineer who excels in data structures and
              algorithms, is committed to code quality, and thrives in challenging environments,
              let's connect! I am always eager to explore new opportunities and contribute to
              impactful projects that make a difference.
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
                  <img :src="this.iconApp" alt="mobile app icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Cyber Security</h4>

                  <p class="service-item-text">
                    Participating in CTF events to learn about latest security bugs and how to deal
                    with those.
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
                    I'm currently learning Machine learning and blockchain and highly instrested in
                    jobs related to it.
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
                      Richard was hired to create a corporate identity. We were very pleased with
                      the work done. She has a lot of experience and is very concerned about the
                      needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur
                      adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore
                      magnarels alia.
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
                      Richard was hired to create a corporate identity. We were very pleased with
                      the work done. She has a lot of experience and is very concerned about the
                      needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur
                      adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore
                      magnarels alia.
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
                      Richard was hired to create a corporate identity. We were very pleased with
                      the work done. She has a lot of experience and is very concerned about the
                      needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur
                      adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore
                      magnarels alia.
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
                      Richard was hired to create a corporate identity. We were very pleased with
                      the work done. She has a lot of experience and is very concerned about the
                      needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur
                      adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore
                      magnarels alia.
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
                    Richard was hired to create a corporate identity. We were very pleased with the
                    work done. She has a lot of experience and is very concerned about the needs of
                    client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
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

        <!--
    - #RESUME
  -->

        <article class="resume" data-page="resume">
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
                <h4 class="h4 timeline-item-title">University school of the arts</h4>

                <span>2007 — 2008</span>

                <p class="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
                  corrupti, quos dolores et quas molestias exceptur.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">New york academy of art</h4>

                <span>2006 — 2007</span>

                <p class="timeline-text">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis
                  voluptas assumenda est omnis..
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">High school of art and design</h4>

                <span>2002 — 2004</span>

                <p class="timeline-text">
                  Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut
                  fugit, sed consequuntur magni dolores eos.
                </p>
              </li>
            </ol>
          </section>

          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 class="h3">Experience</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Creative director</h4>

                <span>2015 — Present</span>

                <p class="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti,
                  quos dolores et qvuas molestias exceptur.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Art director</h4>

                <span>2013 — 2015</span>

                <p class="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
                  corrupti, quos dolores et quas molestias exceptur.
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Web designer</h4>

                <span>2010 — 2013</span>

                <p class="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque
                  corrupti, quos dolores et quas molestias exceptur.
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

        <!--
    - #PORTFOLIO
  -->

        <article class="portfolio" data-page="portfolio">
          <header>
            <h2 class="h2 article-title">Portfolio</h2>
          </header>

          <section class="projects">
            <ul class="filter-list">
              <li class="filter-item">
                <button class="active" data-filter-btn>All</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Web design</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Applications</button>
              </li>

              <li class="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>

            <div class="filter-select-box">
              <button class="filter-select" data-select>
                <div class="select-value" data-selecct-value>Select category</div>

                <div class="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>

              <ul class="select-list">
                <li class="select-item">
                  <button data-select-item>All</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Web design</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Applications</button>
                </li>

                <li class="select-item">
                  <button data-select-item>Web development</button>
                </li>
              </ul>
            </div>

            <ul class="project-list">
              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project1" alt="finance" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Finance</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img" />
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img :src="this.project2" />

                  <h3 class="project-title">Orizon</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project3" alt="fundo" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Fundo</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project4" alt="brawlhalla" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Brawlhalla</h3>

                  <p class="project-category">Applications</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project5" alt="dsm." loading="lazy" />
                  </figure>

                  <h3 class="project-title">DSM.</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project6" alt="metaspark" loading="lazy" />
                  </figure>

                  <h3 class="project-title">MetaSpark</h3>

                  <p class="project-category">Web design</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project7" alt="summary" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Summary</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project8" alt="task manager" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Task Manager</h3>

                  <p class="project-category">Applications</p>
                </a>
              </li>

              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img :src="this.project9" alt="arrival" loading="lazy" />
                  </figure>

                  <h3 class="project-title">Arrival</h3>

                  <p class="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>

        <!--
    - #BLOG
  -->

        <article class="blog" data-page="blog">
          <header>
            <h2 class="h2 article-title">Blog</h2>
          </header>

          <section class="blog-posts">
            <ul class="blog-posts-list">
              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog1" alt="Design conferences in 2022" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

                    <p class="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog2" alt="Best fonts every designer" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Best fonts every designer</h3>

                    <p class="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog3" alt="Design digest #80" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Design digest #80</h3>

                    <p class="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem
                      ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog4" alt="UI interactions of the week" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">UI interactions of the week</h3>

                    <p class="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation
                      ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog5" alt="The forgotten art of spacing" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">The forgotten art of spacing</h3>

                    <p class="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </a>
              </li>

              <li class="blog-post-item">
                <a href="#">
                  <figure class="blog-banner-box">
                    <img :src="this.blog6" alt="Design digest #79" loading="lazy" />
                  </figure>

                  <div class="blog-content">
                    <div class="blog-meta">
                      <p class="blog-category">Design</p>

                      <span class="dot"></span>

                      <time datetime="2022-02-23">Fab 23, 2022</time>
                    </div>

                    <h3 class="h3 blog-item-title">Design digest #79</h3>

                    <p class="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>

        <!--
    - #CONTACT
  -->

        <article class="contact" data-page="contact">
          <header>
            <h2 class="h2 article-title">Contact</h2>
          </header>

          <section class="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>

          <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>

            <form action="#" class="form" data-form>
              <div class="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  class="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />

                <input
                  type="email"
                  name="email"
                  class="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                class="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>

              <button class="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>
  </div>
</template>
<script>
import profilePic from '@/assets/images/profile.jpeg'
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
import SideBar from '@/components/Sidebar.vue'

export default {
  name: 'AllData',
  setup() {
    return {
      profilePic,
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
  },
  components: {
    SideBar
  }
}
</script>
<style></style>
