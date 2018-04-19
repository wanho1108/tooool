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
      <div :class="{'is-loading': loading}">
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
          드디어 성이 되었다 싶었는데 파도가 치니 곧 허물어진다. 애써 쌓은 우리의 성은 이제 흔적이 없다. 이 책은 그 모래성을 복원하는 작업이다. 새로 쌓는 모래성이 또 한번의 파도에 자취를 감추기 전에, 우리에게도 단단히 쌓은 모래성이 있었음을 기억하는 일이다.
        </p>
        <div class="loading-area">
          <div class="loading"></div>
          <div class="loading"></div>
          <div class="loading"></div>
        </div>
      </div>
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
      handleLoading() {
        const div = document.createElement('span');
        const test = this.$el.querySelector('#test');
        div.id = 'font-test';
        div.textContent = 'giItT1WQy@!-/#';
        div.style.fontFamily = this.activeFont.family;
        test.appendChild(div);
        const time = setInterval(() => {
          const width = div.offsetWidth;
          if (width > 0) {
            this.show = 'block';
            this.loading = false;
            clearTimeout(time);
            test.innerHTML = '';
          }
        }, 0);
        /*
         document.querySelector('.test').addEventListener('click', function() {
         var tag = document.createElement('link');
         tag.href = '//fonts.googleapis.com/earlyaccess/notosanskr.css';
         tag.rel = 'stylesheet';
         document.body.appendChild(tag);
         var $test = document.querySelector('.test');
         $test.style.fontFamily = 'Noto Sans KR';
         $test.style.color = '#ffff00';
         var time = setInterval(function() {
         var fontCheck = document.fonts.check('1em Noto Sans Kr');
         if (fontCheck) {
         console.log('적용 O');
         clearTimeout(time);
 
         } else {
         console.log('적용 X');
         }
         }, 0);
         });
         */
      },
      weight() {
        this.loading = true;
        this.show = 'none';
        this.fontWeight = event.target.value;
        this.handleLoading();
      },
      activeFontChange(font) {
        this.loading = true;
        this.show = 'none';
        this.activeFont = font;
        this.handleLoading();
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
    /*animation: view 2s;*/
  }
  .is-loading .loading-area {
    display: block;
  }
  .loading-area {
    display: none;
    animation: view .4s;
  }
  .loading {
    height: 20px;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    border-radius: 20px;
    background: #f6f7f8;
    background: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
    background-size: 1000px 104px;
    position: relative;
    opacity: .4;
  }
  .loading + .loading {
    margin-top: 5px;
  }
  @keyframes placeHolderShimmer{
    0%{
      background-position: -500px 0
    }
    100%{
      background-position: 550px 0
    }
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