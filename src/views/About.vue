<template>
  <div class="about">
    <div class="container">
      <div class="about-content" lang="uk">
        <p>
          Mini Weather App – це веб-додаток, який дозволяє користувачам
          отримувати інформацію про погоду в певному місці. Він забезпечує
          зручний інтерфейс для доступу до поточних і прогнозованих даних про
          погоду для будь-якого місця, просто ввівши назву міста. Додаток
          розроблено таким чином, щоб бути простим і легким у використанні, що
          робить його ідеальним для людей, які хочуть отримувати швидкі
          оновлення погоди без потреби в більш складній і багатофункціональній
          програмі погоди.
        </p>
        <p>
          Додаток використовує API для отримання даних про погоду та
          відображення їх користувачеві у візуально привабливому вигляді. Він
          містить основну інформацію про погоду, таку як температура.
        </p>
        <p>
          Програма Mini Weather створена за допомогою сучасних веб-технологій,
          таких як Vue.js, HTML, CSS і JavaScript, що робить її легкою та
          швидкою програмою.
        </p>
        <p>
          Загалом, Mini Weather App є чудовим інструментом для тих, хто хоче
          швидко та легко отримати доступ до інформації про погоду. Його простий
          та інтуїтивно зрозумілий інтерфейс робить його ідеальним вибором для
          тих, хто хоче бути в курсі погоди без необхідності переглядати безліч
          функцій і даних.
        </p>
        <p>
          Незалежно від того, чи плануєте ви подорож чи просто хочете дізнатися
          прогноз на день, додаток Mini Weather допоможе вам.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.about {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgb(0 0 0 / 58%)
    ),
    url("../assets/about.png");
  background-size: cover;
  background-position: 25% 30%;
  min-height: 100vh;
  padding: 30px 0;
}

.about-content {
  font-size: 17px;
  color: #2b303f;
  text-align: justify;
  background: #f4f5fb66;
  box-shadow: 1px 2px 8px #2025355c;
  border-radius: 0 20px 0 20px;
  padding: 30px 25px 40px;
}
.about p {
  text-indent: 20px;
  padding: 12px 0;
  -webkit-hyphens: auto;
  hyphens: auto;
}
</style>