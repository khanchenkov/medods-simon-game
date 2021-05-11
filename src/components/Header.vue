<template>
  <header class="header">
      <div class="container">
            <div class="header__logo">
                <img alt="Medods logo" src="../assets/logo.png">
                <span>Medods</span>
            </div>  
      </div>
  </header>
</template>

<style lang="sass" scoped>
@import '../sass/vars'

.header 
    background: $main-color
    width: 100%
    height: 40px
    line-height: 40px
    margin-bottom: 40px
    &__logo
        user-select: none
        width: 160px
        display: flex
        justify-content: space-between
        align-items: center
        img
            height: 25px
        span
            color: #fff
            font-size: 1.8rem
            text-transform: uppercase
            font-family: 'Mitr', sans-serif
</style>