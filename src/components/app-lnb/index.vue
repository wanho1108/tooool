<template>
  <nav role="navigation" class="lnb">
      <h2 class="blind">메뉴</h2>
      <div class="lnb__wrapper">
          <ul>
              <li class="lnb__listitem">
                  <router-link to="/webfont" class="lnb__anchor" aria-label="webfont">
                    <i aria-hidden="true" class="lnb__ico lnb__ico--webfont"></i>
                  </router-link>
              </li>
              <li class="lnb__listitem">
                <router-link to="/calculator" class="lnb__anchor" aria-label="calculator">
                  <i aria-hidden="true" class="lnb__ico lnb__ico--calculator"></i>
                </router-link>
              </li>
              <li class="lnb__listitem">
                <router-link to="/device" class="lnb__anchor" aria-label="device">
                  <i aria-hidden="true" class="lnb__ico lnb__ico--device"></i>
                </router-link>
              </li>
              <li class="lnb__listitem">
                <router-link to="/contrast" class="lnb__anchor" aria-label="contrast">
                  <i aria-hidden="true" class="lnb__ico lnb__ico--contrast"></i>
                </router-link>
              </li>
          </ul>
      </div>
  </nav>
</template>

<script>
  export default {
    name: 'app-lnb',
  };
</script>