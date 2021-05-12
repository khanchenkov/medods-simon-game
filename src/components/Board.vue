<template>
  <div>
      <div class="container">
          <div class="game">
            <div class="board">
                <div @click="clicked(1)" :class="{active: isTileActive[1], clickable: isFieldClickable}" class="board__part board__part-red"></div>
                <div @click="clicked(2)" :class="{active: isTileActive[2], clickable: isFieldClickable}" class="board__part board__part-lime"></div>
                <div @click="clicked(3)" :class="{active: isTileActive[3], clickable: isFieldClickable}" class="board__part board__part-blue"></div>
                <div @click="clicked(4)" :class="{active: isTileActive[4], clickable: isFieldClickable}" class="board__part board__part-violet"></div>
            </div>
            <ControlPanel
                @startGame="startGame"  
                @stopGame="stopGame()"
                :level="level"
                :isGameStarted="isGameStarted"
                @setDifficulty="updateParent"
            />
          </div>
      </div>
  </div>
</template>

<script>
import ControlPanel from './ControlPanel'

export default {
    name: 'Board',
    props: {},
    components: {
        ControlPanel
    },
    data() {
        return {
            level: 0,
            isGameLost: false,
            currentGameSequence: [],
            currentUserSequence: [],
            currDifficulty: 1500,
            isFieldClickable: false,
            isGameStarted: false,
            isTileActive: {
                1: false,
                2: false,
                3: false,
                4: false,
            }
        }
    },
    methods: {
        updateParent(diff) {
            this.currDifficulty = diff
        },
        startGame() {
            clearInterval(this.currentInterval)
            this.isGameStarted = true
            this.isFieldClickable = false
            this.currentUserSequence = []
            this.currentGameSequence = []
            this.level++
            this.showLevel(this.level)
        },
        stopGame() {
            clearInterval(this.currentInterval)
            this.isGameStarted = this.isFieldClickable = false
            this.level = 0
        },
        generate(num) {
            let currentLevel = []
            for (let i = 0; i < num; i++) {
                currentLevel.push(Math.floor(Math.random() * (5 - 1) + 1))
            }
            return currentLevel
        },
        clicked(num) {
            if (this.isFieldClickable && this.isGameStarted) {
                this.currentUserSequence.push(num)
                this.lightUp(num)
                this.checkSequences()
            }
        },
        checkSequences() {
            for (let i = 0; i < this.currentUserSequence.length; i++) {

                if (this.currentUserSequence[i] !== this.currentGameSequence[i]) {
                    this.isGameLost = true
                    setTimeout(()=> {
                        alert('Неправильно')
                    }, 350)
                    
                    setTimeout(()=> {
                        this.stopGame()
                    }, this.currDifficulty)
                    
                    
                    
                }
            } 

            if (this.currentUserSequence.length === this.currentGameSequence.length && !this.isGameLost) {
                let curLvl = this.level
                setTimeout(() => {
                    alert(`Уровень ${curLvl} пройден`)
                }, 350)

                setTimeout(()=> {
                        this.startGame()
                }, this.currDifficulty)
                
            }
        },
        lightUp(num) {
            this.playSound(num)
            this.isTileActive[num] = true
            setTimeout(() => {
                this.isTileActive[num] = false
            }, 200)
        },
        playSound(num) {
            let audio = new Audio(`./sounds/${num}.mp3`);
            audio.loop = false
            return audio.play()
        },
        showLevel(lvl) {  
            this.currentGameSequence = this.generate(lvl) 
            let currentIndex = 0
            this.isFieldClickable = false

            this.currentInterval = setInterval(() => {
                if (currentIndex >= this.currentGameSequence.length) {
                    clearInterval(this.currentInterval)
                    this.isFieldClickable = true
                }
                this.lightUp(this.currentGameSequence[currentIndex])                
                currentIndex++
            }, this.currDifficulty)
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/vars.sass'

.game
    display: flex
        
.board
    display: grid
    background: #1d1d1d
    padding: 10px 20px 20px 10px
    border-radius: 50px
    grid-template: 1fr 1fr / 1fr 1fr
    grid-gap: 11px 9.5px
    width: 400px
    height: 400px
    margin-right: 60px
    &__part
        box-sizing: border-box
        width: 200px    
        height: 200px
        &.clickable
            cursor: pointer
        &-red
            background: $red-part
            border-radius: 100% 0 0 0
            &.active
                background: darken($red-part, 20%)
        &-lime
            background: $blue-part
            border-radius: 0 100% 0 0
            &.active
                background: darken($blue-part, 20%)
        &-blue
            background: $yellow-part
            border-radius: 0 0 0 100%
            &.active
                background: darken($yellow-part, 20%)
        &-violet
            background: $green-part
            border-radius: 0 0 100% 0
            &.active
                background: darken($green-part, 20%)
</style>