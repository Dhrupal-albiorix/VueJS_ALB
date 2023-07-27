<template>
  <div>
    <button @click="$emit('add', 3)">Add 3</button>
    <button @click="$emit('multiplay', 22)">multiplay 11</button>
    <button @click="$emit('multiplay2', 2)">multiplay 2</button>
    <button @click="$emit('ip')">Ip</button>
  </div>
</template>