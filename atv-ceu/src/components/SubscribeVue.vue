<template>
  <section>
    <h2>Lorem Ipsum is simply dummy text of the printing.</h2>
    <input type="email" placeholder="Enter your email" />
    <button>SUBSCRIBE</button>
  </section>
</template>

<style scoped>
section {
  background-color: #e8f4fa;
  text-align: center;
  padding: 10vw 0 10vw 0;

  & h2 {
    color: #252525;
    font-weight: 600;
    margin: 0 35vw 5vw 35vw;
    font-size: 30px;
    line-height: 170%;
  }

  & input {
    width: 532px;
    height: 67px;
    border-radius: 10px;
    border: none;
    padding-left: 1vw;
    font-size: 16px;
    color: #787878;
  }

  & button {
    background-color: #000000;
    color: #fff4f4;
    margin-left: 1vw;
    padding: 1vw 2vw 1vw 2vw;
    border-radius: 10px;
    border: none;
  }

  & button:hover {
    cursor: pointer;
    background-color: #1d1d1d;
  }
}
</style>
