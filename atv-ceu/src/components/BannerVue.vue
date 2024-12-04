<template>
  <section>
    <div>
      <h1>Experienced <span>mobile and web</span> applications and website builders measuring.</h1>
      <p>
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website
        builders measuring dozens of completed projects. We build and develop mobile applications
        for several top platforms, including Android &amp; IOS.
      </p>
      <button id="bt-contact"><a href="#">Contact Us</a></button>
      <button id="bt-view"><a href="#">View More</a></button>
    </div>
    <img src="../img/banner.png" alt="Banner Image" />
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  padding-bottom: 3vw;
  background-color: #1090cb1a;

  & div {
    margin: 0 15vw 0 10vw;

    & h1 {
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
      margin-top: 5vw;
      margin-bottom: 1vw;

      & span {
        color: #1090cb;
      }
    }

    & p {
      color: #5c5c5c;
      line-height: 204%;
      font-size: 16px;
    }

    & button {
      padding: 0.5vw 2vw 0.5vw 2vw;
      border: none;
      border-radius: 10px;
      margin: 2vw;

      & a {
        text-decoration: none;
        font-size: 16px;
      }
    }

    & ul {
      display: flex;
    }

    & button#bt-contact {
      background-color: #1090cb;
      margin: 0;

      & a {
        color: #ffffff;
      }
    }

    & button#bt-contact:hover {
      background-color: #189bd8;
      cursor: pointer;
    }

    & button#bt-view {
      background-color: #ffffff;
      border: #1090cb 1px solid;

      & a {
        color: #1090cb;
      }
    }

    & button#bt-view:hover {
      background-color: #ebe9e9;
      cursor: pointer;
    }
  }

  img {
    margin: 0;
    margin-right: 5vw;
  }
}
</style>
