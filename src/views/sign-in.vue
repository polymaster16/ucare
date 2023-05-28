<template>
  <div class="sign-in-container" v-motion-fade>
    <navbar-interactive></navbar-interactive>
    <div class="sign-in-container1">
      <div class="sign-in-container2">
        <div class="sign-in-container3">
          <app-back rootClassName="back-root-class-name1"></app-back>
          <span class="sign-in-text">
            <span class="sign-in-text1">
              Create a
              <span v-html="rawfw9x"></span>
            </span>
            <span class="sign-in-text2">
              nanny
              <span v-html="rawae6v"></span>
            </span>
            <span class="sign-in-text3">account</span>
          </span>
          <div class="sign-in-container4">
            <span class="sign-in-text4">-Full Name</span>
            <input
              type="text"
              required
              placeholder="Your name"
              class="sign-in-textinput input"
            />
            <span class="sign-in-text5">-Date of Birth</span>
            <input
              type="date"
              required
              placeholder="Your name"
              class="sign-in-textinput1 input"
            />
            <span class="sign-in-text6">-Gender</span>
            <select class="sign-in-select">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <button class="sign-in-find button">Continue</button>
          </div>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import NavbarInteractive from '../components/navbar-interactive.vue'
import AppBack from '../components/back.vue'
import AppFooter from '../components/footer.vue'

export default {
  name: 'SignIn',
  components: {
    NavbarInteractive,
    AppBack,
    AppFooter,
  },
  data() {
    return {
      rawfw9x: ' ',
      rawae6v: ' ',
    }
  },
  metaInfo: {
    title: 'SignIn - Dependable Secret Vulture',
    meta: [
      {
        property: 'og:title',
        content: 'SignIn - Dependable Secret Vulture',
      },
    ],
  },
}
</script>

<style scoped>
.sign-in-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.sign-in-container1 {
  width: 100%;
  height: 786px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-start;
  background-image: url('https://post.healthline.com/wp-content/uploads/2020/11/834360-Best-Babysitting-websites-and-Apps-1200x628-Facebook-1200x628.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.sign-in-container2 {
  width: 100%;
  height: 787px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.36);
}
.sign-in-container3 {
  flex: 0 0 auto;
  width: 751px;
  height: 582px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-sixunits);
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}
.sign-in-text {
  font-size: 32px;
  font-style: normal;
  margin-top: 0px;
  font-family: Poppins;
  font-weight: 700;
}
.sign-in-text1 {
  color: #000000;
}
.sign-in-text2 {
  color: #ff4d4f;
}
.sign-in-text3 {
  color: #000000;
}
.sign-in-container4 {
  width: 566px;
  height: 560px;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.sign-in-text4 {
  font-size: 20px;
  margin-top: var(--dl-space-space-twounits);
  font-family: Poppins;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.sign-in-textinput {
  width: 100%;
  height: 51px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
}
.sign-in-text5 {
  font-size: 20px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  font-family: Poppins;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.sign-in-textinput1 {
  width: 100%;
  height: 51px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-unit);
  border-width: 0px;
  border-radius: var(--dl-radius-radius-radius8);
}
.sign-in-text6 {
  font-size: 20px;
  margin-top: var(--dl-space-space-oneandhalfunits);
  font-family: Poppins;
  font-weight: 600;
  margin-left: var(--dl-space-space-halfunit);
}
.sign-in-select {
  width: 100%;
  height: 51px;
  margin-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
}
.sign-in-find {
  color: var(--dl-color-gray-white);
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  transition: 0.3s;
  font-weight: 500;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  border-radius: 56px;
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-unit);
  background-color: rgb(255, 77, 79);
}
.sign-in-find:hover {
  opacity: 0.5;
}
@media(max-width: 991px) {
  .sign-in-find {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .sign-in-container3 {
    padding-left: 7%;
    padding-right: 7%;
  }
  .sign-in-container4 {
    width: 100%;
    align-items: flex-start;
    margin-left: 0%;
    margin-right: 0%;
    padding-left: 0%;
    padding-right: 0%;
  }
  .sign-in-find {
    width: 137px;
  }
}
@media(max-width: 474px) {
  .sign-in-container3 {
    width: 100%;
    height: 632px;
    align-self: center;
    margin-left: 0px;
    padding-left: 7%;
    margin-bottom: 0px;
    padding-right: 7%;
  }
  .sign-in-text {
    margin-top: var(--dl-space-space-twounits);
    text-align: center;
  }
  .sign-in-container4 {
    width: 100%;
    height: 473px;
    align-self: center;
    padding-left: 0px;
    padding-right: 0px;
  }
  .sign-in-textinput {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .sign-in-textinput1 {
    width: 100%;
    margin-left: 1px;
    margin-right: 0px;
  }
  .sign-in-select {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .sign-in-find {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
