<template>
    <div class="start-container">
      <navbar-interactive
        rootClassName="navbar-interactive-root-class-name4"
      ></navbar-interactive>
      <div class="start-container1">
        <div class="start-container2">
          <div class="start-container3">


            <div class="start-container4" v-if="m1" v-motion-roll-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Snowballggggggggggg&backgroundColor=ffd5dc&backgroundType=solid,gradientLinear&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt&clothingGraphic[]&eyebrows=default&eyes=default&facialHair=beardMedium&facialHairColor=2c1b18&facialHairProbability=100&hairColor=2c1b18&mouth=default&skinColor=ae5d29&top=dreads01,theCaesar,hat"
                class="start-image"
              />
              <span class="start-text">
                <span>
                  Hello! Welcome to
                  <span v-html="raw0j7f"></span>
                </span>
                <span class="start-text02">U.CARE.</span>
                <span>How can we help you?</span>
              </span>
            </div>


            <div
            class="start-container5" v-if="m2" v-motion-pop> 
              <span class="start-text04">
                <span class="start-text05">1.</span>
                <span> I&apos;m looking for a nanny / house-help 😁 </span>
              </span>
            </div>


            <div  v-on:click="m4=true; m1=false; m2=false;" 
             class="start-container6" v-if="m3" v-motion-pop>
              <span class="start-text07">
                <span class="start-text08">2.</span>
                <span> I want to apply as a nanny / house-help 📝</span>
              </span>
            </div>


            <div  class="start-container4" v-if="m4" v-motion-roll-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Snowballggggggggggg&backgroundColor=ffd5dc&backgroundType=solid,gradientLinear&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt&clothingGraphic[]&eyebrows=default&eyes=default&facialHair=beardMedium&facialHairColor=2c1b18&facialHairProbability=100&hairColor=2c1b18&mouth=default&skinColor=ae5d29&top=dreads01,theCaesar,hat"
                class="start-image"
              />
              <span class="start-text">
             In other to apply as a nanny, you'll have
              to fill the short form below.
                 
              </span>
            </div>

            <div
            class="start-container4" v-if="m4" v-motion-pop> 
            <span class="start-text07">
            <van-cell-group inset>
  <van-field v-model="name" label="Your Name" />
  <van-field v-model="phone" type="number" label="Phone" placeholder="600 00 00 00" />
  <van-field
  v-model="result"
  is-link
  readonly
  name="datePicker"
  label="Date Picker"
  placeholder="Select date"
  @click="showPicker = true"
/>
<van-popup v-model:show="showPicker" position="top">
  <van-date-picker  title="YY - MM - DD"
  :min-date="minDate"
  :max-date="maxDate"
   @confirm="onConfirm" @cancel="showPicker = false" />
</van-popup>

<button class="login-find button">
              <span>
                <span class="login-text09">Continue</span>
                <br />
              </span>
            </button>

</van-cell-group>
</span>
     
            </div>




          </div>


          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavbarInteractive from '../components/navbar-interactive.vue'
  import { ref, onMounted } from 'vue';

    const m1 = ref(false)
    const m2 = ref(false)
    const m3 = ref(false)
    const m4 = ref(false)

   const minDate = new Date(1965, 1, 1)
   const maxDate = new Date(2005, 1, 1)
const name= ref('')
const phone= ref()

    const result = ref('');
    const showPicker = ref(false);
    const onConfirm = ({ selectedValues }) => {
      result.value = selectedValues.join('/');
      showPicker.value = false;
    };

    onMounted(() => {
        setTimeout(() => {
            m1.value = true;
        }, 1000);
        setTimeout(() => {
            m2.value = true;
        }, 2000);
        setTimeout(() => {
            m3.value = true;
        }, 3000);
    })
 

  </script>
  
  <style scoped>
  .start-container {
    width: 100%;
    display: flex;
    overflow: auto;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
   
    background: rgb(167,198,251);
background: linear-gradient(90deg, rgba(167,198,251,1) 0%, rgba(217,131,163,1) 100%, rgba(121,9,109,1) 100%);
  }
  .start-container1 {
    width: 100%;
    height: auto !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    justify-content: flex-start;
    background-image: url('https://post.healthline.com/wp-content/uploads/2020/11/834360-Best-Babysitting-websites-and-Apps-1200x628-Facebook-1200x628.jpg');
    background-repeat: no-repeat;
    background-position: center;
 
  }
  .start-container2 {
    width: 100%;
    height: auto !important;
    display: flex;
    align-items: center;
    padding-left: 10vw;
    padding-right: 10vw;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.36);
    background-size: cover;
    padding-bottom: 50%;
    padding-top: 5%;
  }
  .start-container3 {
    flex: 0 0 auto;
    width: 100%;
    height: 729px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .start-container4 {
    width: 100%;
    height: auto;
    display: flex;
    padding: 2vw;
    align-items: center;
    padding-top: 3vw;
    padding-left: 3vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 3vw;
    padding-bottom: 3vw;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .start-image {
    width: 145px;
    height: 155px;
    object-fit: cover;
    border-radius: var(--dl-radius-radius-round);
  }
  .start-text {
    font-size: 22px;
    font-family: Poppins;
    margin-left: 2vw;
  }
  .start-text02 {
    font-style: normal;
    font-weight: 700;
  }
  .start-container5 {
    width: 100%;
    height: auto;
    display: flex;
    padding: 2vw;
    transition: 0.3s;
    align-items: center;
    padding-top: 3vw;
    padding-left: 3vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 3vw;
    padding-bottom: 3vw;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .start-container5:focus {
    background-color: #ffb2bb;
  }
  .start-container5:hover {
    background-color: #ffb2bb;
  }
  .start-text04 {
    font-size: 22px;
    font-family: Poppins;
    margin-left: 2vw;
  }
  .start-text05 {
    font-style: normal;
    font-weight: 700;
  }
  .start-container6 {
    width: 100%;
    height: auto;
    display: flex;
    transition: 0.3s;
    align-items: center;
    padding-top: 3vw;
    padding-left: 3vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    padding-right: 3vw;
    padding-bottom: 3vw;
    justify-content: flex-start;
    background-color: #ffffff;
  }
  .start-container6:focus {
    background-color: #ffb2bb;
  }
  .start-container6:hover {
    background-color: #ffb2bb;
  }
  .start-text07 {
    font-size: 22px;
    font-family: Poppins;
    margin-left: 2vw;
  }
  .start-text08 {
    font-style: normal;
    font-weight: 700;
  }


.login-find {
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
.login-find:hover {
  opacity: 0.5;
}
@media(max-width: 991px) {

  .login-find {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
  .login-text09 {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
}
@media(max-width: 767px) {
  .login-find {
    width: 137px;
  }
  .login-text09 {
    width: 137px;
  }
}
@media(max-width: 474px) {
 
  .login-find {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .login-text09 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
}

  @media(max-width: 767px) {
    .start-container2 {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    .start-text {
      font-size: 18px;
    }
    .start-text04 {
      font-size: 18px;
    }
    .start-text07 {
      font-size: 18px;
    }
  }
  @media(max-width: 474px) {
    .start-container2 {
      padding-left: 6vw;
      padding-right: 6vw;
    }
    .start-container4 {
      height: auto;
      padding-top: 5vw;
      padding-right: 3vw;
      padding-bottom: 5vw;
    }
    .start-text {
      font-size: 22px;
      font-family: Poppins;
      margin-left: 2vw;
    }
    .start-text02 {
      font-style: normal;
      font-weight: 700;
    }
    .start-container5 {
      height: auto;
      padding: 5vw;
    }
    .start-container6 {
      height: auto;
      padding: 5vw;
    }
  }
  </style>
  