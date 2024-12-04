<template>
  <section>
    <div id="first">
      <h3>Lorem Ipsum is simply dummy text.</h3>
      <p>
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website
        builders measuring dozens of completed projects. We build and develop mobile applications
        for several top platforms, including Android &amp; IOS.
      </p>
      <button>View More</button>
    </div>
    <div id="second">
      <h3>Lorem Ipsum is simply dummy text.</h3>
      <p>
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website
        builders measuring dozens of completed projects. We build and develop mobile applications
        for several top platforms, including Android &amp; IOS.
      </p>
      <button>View More</button>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  margin-bottom: 6vw;

  & div {
    width: 572px;
    height: 400px;
    text-align: center;
    margin: 0 2vw 0 2vw;
    padding: 3vw 6vw 0 6vw;
    border-radius: 20px;

    & h3 {
      font-size: 25px;
    }

    & p {
      padding: 3vw 0 3vw 0;
      font-size: 16px;
      line-height: 170%;
    }

    & button {
      border-radius: 10px;
      border: none;
      padding: 0.8vw 1.5vw 0.8vw 1.5vw;
      font-size: 16px;
    }
  }

  & div#first {
    background-color: #f4f4f4;

    & p {
      color: #545454;
    }

    & button {
      background-color: #1090cb;
      color: #ffffff;
      font-weight: bold;
    }

    & button:hover {
      background-color: #189bd8;
      cursor: pointer;
    }
  }

  & div#second {
    background-color: #1090cb;

    & p {
      color: #ffffff;
    }

    & h3 {
      color: #ffffff;
    }

    & button {
      color: #1090cb;
      font-weight: bold;
    }

    & button:hover {
      background-color: #dddddd;
      cursor: pointer;
    }
  }
}
</style>
