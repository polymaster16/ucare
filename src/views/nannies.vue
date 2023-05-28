<template>
  <div class="nannies-container" v-motion-fade>
    <navbar-interactive
      rootClassName="navbar-interactive-root-class-name3"
    ></navbar-interactive>
    <div class="nannies-container1">
      <div class="nannies-container2">
        <div class="nannies-container3">
          <app-back rootClassName="back-root-class-name"></app-back>
          <span class="nannies-text">
            <span class="nannies-text1">
              Search
              <span v-html="rawmtdj"></span>
            </span>
            <span class="nannies-text2">a Nanny</span>
          </span>
        </div>
        <div class="nannies-container4">
          <span class="nannies-text3">
            <span>All</span>
            <span class="nannies-text5">Nannies</span>
          </span>
          <nanny-card></nanny-card>
          <div class="nannies-container5">
            <img
              alt="image"
              src="https://s.france24.com/media/display/5de428a0-dc52-11ec-abb9-005056bfb2b6/w:1280/p:1x1/000_326W9KK.jpg"
              loading="lazy"
              class="nannies-image"
            />
            <div class="nannies-container6">
              <span class="nannies-text6">
                <span class="nannies-text7">Francia </span>
                <span class="nannies-text8">marq </span>
              </span>
              <div class="nannies-container7">
                <svg viewBox="0 0 950.8571428571428 1024" class="nannies-icon">
                  <path
                    d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="nannies-icon2">
                  <path
                    d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
                  ></path></svg
                ><svg viewBox="0 0 950.8571428571428 1024" class="nannies-icon4">
                  <path
                    d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name3"></app-footer>
  </div>
</template>

<script>
import NavbarInteractive from '../components/navbar-interactive.vue'
import AppBack from '../components/back.vue'
import NannyCard from '../components/nanny-card.vue'
import AppFooter from '../components/footer.vue'

export default {
  name: 'Nannies',
  components: {
    NavbarInteractive,
    AppBack,
    NannyCard,
    AppFooter,
  },
  data() {
    return {
      rawmtdj: ' ',
    }
  },
  metaInfo: {
    title: 'Nannies - Dependable Secret Vulture',
    meta: [
      {
        property: 'og:title',
        content: 'Nannies - Dependable Secret Vulture',
      },
    ],
  },
}
</script>

<style scoped>
.nannies-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.nannies-container1 {
  width: 100%;
  height: 1026px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url('https://post.healthline.com/wp-content/uploads/2020/11/834360-Best-Babysitting-websites-and-Apps-1200x628-Facebook-1200x628.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.nannies-container2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.31);
}
.nannies-container3 {
  flex: 0 0 auto;
  width: 662px;
  height: 466px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}
.nannies-text {
  font-size: 32px;
  font-style: normal;
  margin-top: 0px;
  font-family: Poppins;
  font-weight: 700;
}
.nannies-text1 {
  color: #ff4d4f;
}
.nannies-text2 {
  color: #000000;
}
.nannies-container4 {
  flex: 0 0 auto;
  width: 662px;
  height: 466px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}
.nannies-text3 {
  font-size: 32px;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  font-family: Poppins;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.nannies-text5 {
  color: #ff4d4f;
}
.nannies-container5 {
  width: 371px;
  height: 127px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: 13px;
  justify-content: center;
}
.nannies-image {
  width: 98px;
  height: 98px;
  object-fit: cover;
  border-color: var(--dl-color-success-500);
  border-width: 5px;
  margin-right: 11px;
  border-radius: var(--dl-radius-radius-round);
}
.nannies-container6 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nannies-text6 {
  font-size: 24px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Poppins;
  font-weight: 700;
}
.nannies-text7 {
  color: #000000;
}
.nannies-text8 {
  color: #ff4d4f;
}
.nannies-container7 {
  flex: 0 0 auto;
  width: 111px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nannies-icon {
  fill: var(--dl-color-success-500);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-unit);
}
.nannies-icon2 {
  fill: var(--dl-color-success-500);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-unit);
}
.nannies-icon4 {
  fill: var(--dl-color-success-500);
  width: 24px;
  height: 24px;
  margin-right: 0px;
}
@media(max-width: 991px) {
  .nannies-text {
    font-size: 32px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nannies-text3 {
    font-size: 32px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
}
@media(max-width: 767px) {
  .nannies-text {
    font-size: 32px;
  }
  .nannies-text3 {
    font-size: 32px;
  }
}
@media(max-width: 474px) {
  .nannies-container3 {
    width: 413px;
    height: 490px;
    margin-bottom: 0px;
  }
  .nannies-text {
    font-size: 32px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nannies-container4 {
    width: 428px;
    height: 429px;
    margin-bottom: 0px;
    padding-right: 0px;
  }
  .nannies-text3 {
    font-size: 32px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nannies-image {
    width: 119px;
    height: 117px;
    margin-right: var(--dl-space-space-unit);
  }
  .nannies-text6 {
    font-size: 24px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nannies-text7 {
    color: #000000;
  }
  .nannies-text8 {
    color: #ff4d4f;
  }
}
</style>
