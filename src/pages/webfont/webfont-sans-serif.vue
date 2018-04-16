<template>
  <div>
    <div class="list">
      <ul>
        <li v-for="(font, key) in fonts" :key="key" @click="activeFontChange(font)">
          {{font.name}}
          {{numberFill(key+1, 2, 0)}}
        </li>
      </ul>
    </div>
    <div class="view">
      <link rel="stylesheet" :href="activeFont.path">
      {{activeFont.name}}
      <div>
        <button type="button" @click="fontAlign='left'">왼쪽</button>
        <button type="button" @click="fontAlign='center'">중간</button>
        <button type="button" @click="fontAlign='right'">오른쪽</button>
      </div>
      <div>
        <select v-model="fontWeight">
          <option
            v-for="(weight, key) in activeFont.weight"
            :key="key"
            :value="weight.value">{{weight.name}}</option>
        </select>
      </div>
      <div>
        <div class="range">
          <div
            class="range__bar"
            @mousedown="rangeDown"
          ></div>
        </div>
      </div>
      <p :style="`
          font-family: '${activeFont.family}';
          font-size: ${value}px;
          font-weight: ${fontWeight};
          text-align: ${fontAlign};
        `"
         contenteditable="true">
        친근하고 부드러운<br>나눔고딕
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'webfont-sans-serif',
    data() {
      return {
        activeFont: '',
        fontSize: 40,
        fontWeight: 400,
        fontAlign: 'left',
        fonts: [
          {
            name: '나눔고딕',
            family: 'Nanum Gothic',
            path: 'http://fonts.googleapis.com/earlyaccess/nanumgothic.css',
            weight: [
              {
                name: 'normal',
                value: '400',
              },
              {
                name: 'bold',
                value: '700',
              },
            ],
          },
          {
            name: '나눔바른고딕',
            name2: 'NanumBarunGothic',
          },
          {
            name: '나눔스퀘어',
            name2: 'NanumSqaure',
          },
        ],
        x: 0,
        objX: 0,
        ing: false,
        first: false,
        min: 10,
        max: 120,
        value: 18,
      };
    },
    methods: {
      numberFill(number, length, fillNumber) {
        let value = '';
        for (let i = 0; i < length - number.toString().length; i += 1) {
          value += fillNumber.toString();
        }
        value += number;
        return value;
      },
      activeFontChange(font) {
        this.activeFont = font;
      },
      // input range
      rangeDown() {
        console.log('down');
        const range = document.querySelector('.range');
        const rangeBar = range.querySelector('.range__bar');
        this.ing = true;
        this.x = event.clientX;
        this.objX = rangeBar.offsetLeft;
        window.addEventListener('mouseup', this.rangeUp);
        window.addEventListener('mousemove', this.rangeMove);
      },
      rangeUp() {
        console.log('up');
        this.ing = false;
        window.removeEventListener('mouseup', this.rangeUp);
        window.removeEventListener('mousemove', this.rangeMove);
      },
      rangeMove() {
        if (this.ing) {
          console.log('move');
          const range = document.querySelector('.range');
          const rangeBar = range.querySelector('.range__bar');
          const rangeWidth = range.offsetWidth;
          const moveX = event.clientX - this.x;
          let percent = parseInt(((this.objX + moveX) / rangeWidth) * 100);
          percent = Math.min(percent, 100);
          percent = Math.max(percent, 0);
          rangeBar.style.left = percent + '%';
          this.value = parseInt((((this.max - this.min) * percent) / 100) + this.min);
        }
      },
    },
  };
</script>

<style>
  .view {
    padding: 30px;
    border: 1px solid #fff;
    margin-top: 100px;
  }
  .range {
    position: relative;
    padding: 0 50px;
    height: 35px;
    background-color: #333;
  }
  .range__bar {
    position: absolute;
    left: 0;
    width: 36px;
    height: 100%;
    border-radius: 35px;
    background-color: #fff;
    opacity: .5;
  }
</style>