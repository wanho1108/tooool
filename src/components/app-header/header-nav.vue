<template>
  <nav role="navigation" class="header__nav">
    <h2 class="blind">메뉴</h2>
    <div class="header__nav-wrapper">
      <ul>
        <li class="header__nav-listitem">
          <router-link to="/webfont" active-class="is-active" class="header__nav-anchor" aria-label="webfont">
            <i aria-hidden="true" class="header__nav-ico header__nav-ico--webfont"></i>
          </router-link>
        </li>
        <li class="header__nav-listitem">
          <router-link to="/calculator" active-class="is-active" class="header__nav-anchor" aria-label="calculator">
            <i aria-hidden="true" class="header__nav-ico header__nav-ico--calculator"></i>
          </router-link>
        </li>
        <li class="header__nav-listitem">
          <router-link to="/device"  active-class="is-active" class="header__nav-anchor" aria-label="device">
            <i aria-hidden="true" class="header__nav-ico header__nav-ico--device"></i>
          </router-link>
        </li>
        <li class="header__nav-listitem">
          <router-link to="/contrast"  active-class="is-active" class="header__nav-anchor" aria-label="contrast">
            <i aria-hidden="true" class="header__nav-ico header__nav-ico--contrast"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'header-nav',
  };
</script>