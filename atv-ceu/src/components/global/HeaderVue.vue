<template>
  <header>
    <a href="">
      <h1>CÉU</h1>
    </a>
    <nav>
      <ul>
        <li><a href="#" class="currPage">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li>
          <span><a href="#">Contact Us</a></span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1.5vw 2vw 1.5vw 3vw;

  & h1 {
    font-size: 29px;
    color: #1090cb;
    font-weight: bold;
  }

  & nav ul {
    display: flex;

    & li {
      margin: 0 2.3vw 0 2.3vw;

      & a {
        color: #000000;
        font-size: 16px;
      }

      & a.currPage {
        color: #1090cb;
      }

      & span {
        background-color: #1090cb;
        padding: 0.5vw 1vw 0.5vw 1vw;
        border-radius: 5px;

        & a {
          color: #ffffff;
          font-size: 13px;
        }
      }

      & span:hover {
        background-color: #189bd8;
      }
    }
  }
}
</style>
