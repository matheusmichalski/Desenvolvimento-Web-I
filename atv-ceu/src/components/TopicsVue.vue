<template>
  <section>
    <ul>
      <li>
        <img src="../img/info-web.png" alt="Web Application" id="img-web" />
        <div>
          <h3>Web Application</h3>
          <p>Lorem Ipsum is simply</p>
        </div>
      </li>
      <li>
        <img src="../img/info-seo.png" alt="SEO" id="img-seo" />
        <div>
          <h3>SEO</h3>
          <p>Lorem Ipsum is simply</p>
        </div>
      </li>
      <li>
        <img src="../img/info-ar-vr.png" alt="AR/VR Solutions" id="img-solutions" />
        <div>
          <h3>AR/VR Solutions</h3>
          <p>Lorem Ipsum is simply</p>
        </div>
      </li>
      <li>
        <img src="../img/info-mobile.png" alt="Mobile Applications" id="img-mobile" />
        <div>
          <h3>Mobile Applications</h3>
          <p>Lorem Ipsum is simply</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  border-bottom: solid 0.7px #c7c7c7;
  padding-bottom: 1vw;

  & ul {
    display: flex;
    justify-content: center;

    & li {
      display: flex;
      align-items: center;
      margin: 0 2vw 0 0;

      & img {
        width: 45px;
        height: 45px;
        margin-top: 1vw;
        padding: 1vw;
        border-radius: 20px;
      }

      & img#img-web {
        background-color: #efeaff;
      }

      & img#img-seo {
        background-color: #ecffda;
      }

      & img#img-solutions {
        background-color: #dae6ff;
      }

      & img#img- mobile {
        background-color: #ffe5da;
      }
    }

    div {
      margin-left: 1vw;

      & h3 {
        font-size: 20px;
        margin-bottom: 0.7vw;
      }

      & p {
        color: #969696;
        font-size: 15px;
      }
    }
  }
}
</style>
