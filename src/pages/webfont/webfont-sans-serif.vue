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
        <select @change="weight">
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
      <p v-show="loading">loading!</p>
      <p :style="`
          display: ${show};
          font-family: '${activeFont.family}';
          font-size: ${value}px;
          font-weight: ${fontWeight};
          text-align: ${fontAlign};
          border: 1px solid ${show === 'none' ? 'red' : 'transparent'};
        `"
         class="view2"
         contenteditable="true">
        친근하고 부드러운<br>나눔고딕
      </p>
      <p id="test" style="position:absolute;top:-9999px;left:-9999px">
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
            name: 'Noto Sans',
            family: 'Noto Sans',
            path: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i',
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
        loading: false,
        x: 0,
        objX: 0,
        ing: false,
        first: false,
        min: 1,
        max: 10,
        decimal: 1,
        value: 20,
        show: 'block',
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
      weight() {
        this.loading = true;
        this.show = 'none';
        this.fontWeight = event.target.value;
        const div = document.createElement('span');
        const test = this.$el.querySelector('#test');
        div.id = 'font-test';
        div.textContent = 'giItT1WQy@!-/#';
        div.style.fontFamily = this.activeFont.family;
        test.appendChild(div);
        const time = setInterval(() => {
          const width = div.offsetWidth;
          console.log(width);
          if (width > 0) {
            this.show = 'block';
            this.loading = false;
            clearTimeout(time);
            test.innerHTML = '';
          }
        }, 0);
      },
      activeFontChange(font) {
        this.loading = true;
        this.show = 'none';
        const div = document.createElement('span');
        const test = this.$el.querySelector('#test');
        div.id = 'font-test';
        div.textContent = 'giItT1WQy@!-/#';
        div.style.fontFamily = font.family;
        test.appendChild(div);
        const time = setInterval(() => {
          const width = div.offsetWidth;
          console.log(width);
          if (width > 0) {
            this.show = 'block';
            this.loading = false;
            clearTimeout(time);
            test.innerHTML = '';
          }
        }, 0);
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
          let percent = (((this.objX + moveX) / rangeWidth) * 100).toFixed(this.decimal);
          percent = Math.min(percent, 100);
          percent = Math.max(percent, 0);
          rangeBar.style.left = `${percent}%`;
          this.value = ((((this.max - this.min) * percent) / 100) + this.min).toFixed(this.decimal);
        }
      },
    },
  };
</script>

<style>
  .view {
    padding: 30px;
    /*border: 1px solid #fff;*/
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
  .view2 {
    animation: view 2s;
  }
  @keyframes view {
    0% {
      opacity: 0;
      /*transform: translateY(100px);*/
    }
    100% {
      opacity: 1;
      /*transform: translateY(0);*/
    }
  }
</style>