<template>
    <div>
      <div class="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Loa-der",
  };
  </script>
  
  <style>
  .loader {
    display: inline-block;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 90%;
    left: 100%;
    transform: translateX(-150%) translateY(-50%);
  }
  .loader:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loader 0.7s linear infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>