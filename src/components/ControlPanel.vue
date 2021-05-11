<template>
  <div class="control-panel">
    <div class="control-panel__button">
      <button v-show="!isGameStarted" @click="startGame()">Начать</button>
      <button v-show=" isGameStarted" @click="stopGame()">Закончить</button> 
    </div>
    <div class="control-panel__heading" v-show="isGameStarted">
      <h1>Уровень {{ level }}</h1>
    </div> 
    <div v-show="!isGameStarted" class="control-panel__settings">
      <button @click="setDifficulty('easy', 1500)"   :class="{active: difficultyName == 'easy'}"   class="easy">Легко</button>
      <button @click="setDifficulty('medium', 1000)" :class="{active: difficultyName == 'medium'}" class="normal">Средне</button>
      <button @click="setDifficulty('hard', 400)"   :class="{active: difficultyName == 'hard'}"   class="hard">Сложно</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  props: {
    level: Number,
    isGameStarted: Boolean,
    currDifficulty: Number
  },
  data() {
    return {
      startedLocal: this.isGameStarted,
      localDifficulty: 1500,
      difficultyName: 'easy',
    }
  },
  methods: {
    startGame() {
      this.$emit('startGame')
    },
    stopGame() {
      this.startedLocal = false
      this.$emit('stopGame')
    },
    setDifficulty(name, value) {
      this.difficultyName = name
      this.localDifficulty = value
      this.$emit('setDifficulty', this.localDifficulty)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../sass/vars'
  
.control-panel
  box-sizing: border-box
  width: 200px
  height: 80px
  border: 1px solid #aaa
  border-radius: 10px
  background-color: #fefefe

  &__button
    button
      cursor: pointer
      background: $main-color
      color: #fff
      display: block
      margin: 10px auto 0
      border-radius: 10px
      border: none
      width: 100px
      padding: 5px 0
      &:nth-child(2)
        background: darken(red, 10%)

  &__heading
    h1
      margin-top: 10px
      text-align: center

  &__settings
    display: flex
    justify-content: space-between
    align-items: center

    width: 165px
    margin: 15px auto 0
    button
      border: none
      background: transparent
      cursor: pointer
      transition: 0.2s
      font-weight: bold 
      &.active
        color: $main-color
      &:hover
        color: $main-color

</style>