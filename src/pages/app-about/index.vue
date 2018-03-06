<template>
  <div class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Hi there ;)</app-content-heading>
      <div class="about">
        <div class="about__division about__division--left">
          <p class="about__paragraph">We are designer and front-end developer who are making web and mobile services.</p>
          <p class="about__paragraph">During the workflow of our communication, we are talking about the small, handy tools we use by default.</p>
          <p class="about__paragraph">These tools have very convenient features in our work,<br>But uncomfortable to use, and we realized that each tool was located in a different location.</p>
          <p class="about__paragraph">After the dialogue, we have to build our own tools to solve these problems in a more constructive direction, We have decided to create this site to use these tools directly in our work.</p>
          <p class="about__paragraph">Furthermore, if this site made by our little thoughts and efforts makes many people feel use and convenience,<br>each of us will be able to achieve small satisfaction.</p>
          <p class="about__paragraph">Thank you.</p>
        </div>
        <div class="about__division about__division--right">
          <p class="about__paragraph">우리는 웹과 모바일 서비스를 제작하고 있는 디자이너와 프론트엔드 개발자입니다.</p>
          <p class="about__paragraph">커뮤니케이션 과정 중에 우리는 우리의 업무 중에 기본적으로 사용하고 있는 작고 편리한 도구들에 대해 이야기를 나누게 되었습니다.</p>
          <p class="about__paragraph">이 도구들은 업무에 있어서는 매우 편리한 기능을 갖고 있지만, 다소 사용이 불편하고, 각각의 도구가 서로 다른 곳에 위치하고 있다는 문제를 인식하게 되었습니다.</p>
          <p class="about__paragraph">대화 이후, 우리는 조금 더 건설적인 방향으로 나아가고자 이런 문제들을 해결할 수 있는 도구들을 직접 제작하고, 이 도구들을 우리의 업무에 우리가 직접 사용하고자 이 사이트를 제작하게 되었습니다.</p>
          <p class="about__paragraph">나아가 우리의 작은 생각과 노력으로 만들어진 이 사이트를 많은 사람들이 사용하고 편리함을 느끼게 된다면, 우리 각각의 작은 만족도 달성할 수 있을 것입니다.</p>
          <p class="about__paragraph">감사합니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';

  export default {
    name: 'appAbout',
    components: {
      AppContentHeading,
    },
  };
</script>