"use strict";

// project loader
const projectContainer = document.querySelector(".projects-container");
console.log(projectContainer);
const allProjects = [
  {
    name: "MOSSAM",
    about:
      "MOSSAM was project created in 2024. This project was only for practice purpose. Free version of AccuWeather Api is used in it. It is Developed using HTML, CSS, JS.",
    pic: "img/mossam.png",
    link: "https://mossam-all.netlify.app/",
    year: "2024",
  },
  {
    name: "Quran Code of Life",
    about:
      "Quran Code of Life was project created in 2023. This project was only for practice purpose. Quran Api is used for this project. It is Developed using HTML, CSS, JS.",
    pic: "img/quran-code-of-life.png",
    link: "https://qurancodeoflife.netlify.app/",
    year: "2023",
  },
  {
    name: "GUP SHUP",
    about:
      " GUP SHUP was project created in 2024. This project was only for practice purpose. . It is Developed using HTML, CSS, JS, NodeJs.",
    pic: "img/gup shup.png",
    link: "https://gup-shup-app.netlify.app/",
    year: "2024",
  },
  {
    name: "MK STORE",
    about:
      "Mk Store is was e-commerce project created in 2023. This project was only for practice purpose. It was Developed using HTML, CSS, JS.",
    pic: "img/mk store.png",
    link: "https://mkstore.netlify.app/",
    year: "2023",
  },
  {
    name: "VOUGE RESUME",
    about:
      "    VOUGE RESUME was project created in 2023. This project was only for practice purpose. It is Developed using HTML, CSS, JS.",
    pic: "img/vouge-resume.png",
    link: "https://vouge-resume.netlify.app/",
    year: "2023",
  },
  {
    name: "TELE PIZZA",
    about:
      "     TELE PIZZA was project created in 2024. This project was only for practice purpose. It is Developed using HTML, CSS, JS.",
    pic: "img/tele-pizza.png",
    link: "https://tele-pizza.netlify.app/",
    year: "2024",
  },
];

allProjects.forEach((project) => {
  const html = ` <div class="project auto-blur">
          <div class="date">${project.year}</div>
          <div class="info">
            <div>
              <p class="name">${project.name}</p>
              <p class="about-title">About:</p>
              <p class="product-about">
              ${project.about}
              </p>
            
            </div>
           <a class='project-link' href="${project.link}"> <button class="go-to-project-btn">
              <span class="arrow">&#8599;</span>
            </button></a
              >
          </div>

          <div>
            <img class="pic" src="${project.pic}" alt="${project.name}" />
          </div>

        
        </div>
`;
  projectContainer.insertAdjacentHTML("beforeend", html);
});

// projects blur animation

const nav = document.querySelector(".nav");
console.log(nav);
const header = document.querySelector(".header");

const navHeight = nav.getBoundingClientRect().height;

const stickyNavCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const stickyNavObserver = new IntersectionObserver(stickyNavCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

stickyNavObserver.observe(header);
