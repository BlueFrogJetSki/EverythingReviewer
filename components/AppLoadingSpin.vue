<template>
    <div class="disk"></div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .disk {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid #ccc;
    border-top: 8px solid #525252;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  