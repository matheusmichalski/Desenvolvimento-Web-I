<template>
  <footer>
    <div>
      <div>
        <p id="logotype">Céu</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>@Lorem</p>
      </div>
      <ul>
        <li><a href="#" class="currPage"></a>About Us</li>
        <li><a href="#">Lorem</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <p>Copyright &copy; 2021 Lorem All rights Reserved</p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 8vw;
  margin-bottom: 3vw;

  & div {
    padding: 0 5vw 0.5vw 5vw;
    display: flex;
    justify-content: space-between;

    & div {
      display: block;
      padding: 0;

      & p#logotype {
        font-weight: 600;
        color: #00329b;
      }

      & p {
        color: #515151;
        margin-bottom: 2vw;
        border: none;
        text-align: left;
        padding: 0;
      }
    }

    & ul {
      list-style: none;

      & li:first-child {
        margin: 0;
      }
      & a {
        text-decoration: none;
        color: #515151;
        font-size: 16px;
        cursor: pointer;
      }

      & li {
        margin: 10px 0 0 0;
      }
    }
  }

  & p {
    border-top: #686868 0.8px solid;
    text-align: center;
    color: #686868;
    padding: 2vw 0 2vw 0;
  }
}
</style>
