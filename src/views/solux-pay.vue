<template>
  <div class="solux-pay-container" v-motion-fade>
    <span class="solux-pay-text">Payment Successful</span>
    <div class="solux-pay-container1">
      <img
        alt="image"
        src="https://img.freepik.com/premium-psd/paper-food-delivery-box-packaging-mockup_439185-9522.jpg"
        class="solux-pay-image"
      />
      <span class="solux-pay-text1">
        Your packet is ready, enter your infos below in other to receive your
        personalzed solutions
      </span>
      <input
        type="text"
        v-model="name"
        name="Name"
        placeholder="Your Name"
        class="solux-pay-textinput input"
      />
      <input
      v-model="email"
        type="text"
        name="Name"
        placeholder="Your Email"
        class="solux-pay-textinput1 input"
      />
      <input
      v-model="matricle"
        type="text"
        name="Name"
        placeholder="Your matricle"
        class="solux-pay-textinput2 input"
      />

      <div class="errorClass" v-if="error.visible">
        {{ error.message }}
      </div>
      <button @click="submit()"
       class="solux-pay-find button">
        <span>
          <span class="solux-pay-text3">Receive Solutions</span>
          <br />
        </span>
      </button>
    </div>
    <div class="solux-pay-container2">
      <span class="solux-pay-text5">
        Copyright © 2023 All Rights Reserved By Novus Technologies
      </span>
    </div>
  </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'

    const name= ref('')
    const email= ref('')
    const matricle= ref('')

    const error = reactive({message:'', visible:false})

    const submit = () => {
      console.log("clicked")
      if(name.value === ''){
        error.visible =true
        error.message = 'Please enter Your Full name'
      }
      else   if(email.value === ''){
        error.visible =true
        error.message = 'Please provide us with your email'
      }
      else   if(!email.value.includes('.ictuniversity.edu.cm')){
        error.visible =true
        error.message = 'Please enter your ICTU email with extension .ictuniversity.edu.cm'
      }
      else   if(matricle.value === ''){
        error.visible =true
        error.message = 'Please provide us with your ICTU matricle'
      }
      else   if(!matricle.value.includes('ICTU')){
        error.visible =true
        error.message = 'Please your matric should be in the format ICTUXXXXXXXX'
      }
      else   if(matricle.value.length != 12){
        error.visible =true
        error.message = 'Please enter a valid matric number'
      }
      else{
        error.visible =false
       // windows.location.href = 'https://wa.me/675903349'
       window.open(`https://wa.me/675903349?text=Hello, my name is ${name.value} 
       and I'm interested in buying the JAVA Programming 2. my email is ${email.value} 
       and my matricle is ${matricle.value}'`)
      }



    }

</script>

<style scoped>
.errorClass{
  margin-top: 3%;
  color:#E93F1A
}
.solux-pay-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.solux-pay-text {
  color: #2f2f2f;
  font-size: 48px;
  font-style: normal;
  margin-top: 5vw;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  text-transform: uppercase;
}
.solux-pay-container1 {
  width: 760px;
  height: 783px;
  display: flex;
  align-items: center;
  padding-top: 2%;
  flex-direction: column;
}
.solux-pay-image {
  width: 440px;
  height: 310px;
  margin-top: 3px;
  object-fit: cover;
}
.solux-pay-text1 {
  color: rgb(47, 47, 47);
  font-size: 28px;
  font-style: normal;
  margin-top: 4%;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.solux-pay-textinput {
  width: 419px;
  height: 58px;
  margin-top: var(--dl-space-space-twounits);
  border-color: #E93F1A;
  border-width: 2px;
  border-radius: var(--dl-radius-radius-radius8);
}
.solux-pay-textinput1 {
  width: 419px;
  height: 58px;
  margin-top: var(--dl-space-space-twounits);
  border-color: #E93F1A;
  border-width: 2px;
  border-radius: var(--dl-radius-radius-radius8);
}
.solux-pay-textinput2 {
  width: 419px;
  height: 58px;
  margin-top: var(--dl-space-space-twounits);
  border-color: #E93F1A;
  border-width: 2px;
  border-radius: var(--dl-radius-radius-radius8);
}
.solux-pay-find {
  color: var(--dl-color-gray-white);
  width: 202px;
  height: 62px;
  display: flex;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  transition: 0.3s;
  font-weight: 500;
  padding-top: 19px;
  border-width: 0px;
  padding-left: 36px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  padding-bottom: 21px;
  background-color: #E93F1A;
}
.solux-pay-find:hover {
  opacity: 0.5;
}
.solux-pay-text3:hover {
  opacity: 0.5;
}
.solux-pay-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E93F1A;
}
.solux-pay-text5 {
  color: #ffffff;
  font-family: Poppins;
}
@media(max-width: 991px) {
  .solux-pay-text3 {
    width: 139px;
    text-align: center;
    margin-right: 0px;
  }
  .solux-pay-container2 {
    height: 117px;
  }
}
@media(max-width: 767px) {
  .solux-pay-container1 {
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .solux-pay-text3 {
    width: 137px;
  }
  .solux-pay-container2 {
    height: 126px;
  }
}
@media(max-width: 474px) {
  .solux-pay-text {
    font-size: 42px;
    padding-top: 5vw;
    padding-left: 5vw;
    text-transform: capitalize;
  }
  .solux-pay-container1 {
    width: 100%;
    height: 843px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  .solux-pay-image {
    margin-top: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .solux-pay-text1 {
    color: rgb(47, 47, 47);
    font-size: 22px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 500;
    text-transform: capitalize;
  }
  .solux-pay-textinput {
    width: 100%;
    height: 63px;
  }
  .solux-pay-textinput1 {
    width: 100%;
    height: 72px;
  }
  .solux-pay-textinput2 {
    width: 100%;
    height: 72px;
  }
  .solux-pay-find {
    height: 66px;
    margin-top: var(--dl-space-space-fourunits);
    margin-bottom: var(--dl-space-space-fourunits);
  }
  .solux-pay-text3 {
    margin-top: var(--dl-space-space-oneandhalfunits);
  }
  .solux-pay-container2 {
    height: 124px;
  }
  .solux-pay-text5 {
    color: #ffffff;
    font-size: 12px;
  }
}
</style>