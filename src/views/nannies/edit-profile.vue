<template>
    <div class="start-container" v-motion-fade >
      <navbar-interactive
        rootClassName="navbar-interactive-root-class-name4"
      ></navbar-interactive>
      <div class="start-container1">
        <div class="start-container2">
          <div class="start-container3">


            <div class="start-container4" v-if="m1" v-motion-roll-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
                <span>
                  Gooday {{ nanny_name }}
                  <span v-html="raw0j7f"></span>
                </span>
               I'm Sarrah and I'll assist you in the validation process of your account
              </span>
            </div>


            <div  v-on:click="m4=true; m1=false; m2=false; m3=false" 
             class="start-container6" v-if="m2" v-motion-pop>
              <span class="start-text07">
                <span> Okay 😊</span>
              </span>
            </div>


            <div  class="start-container4" v-if="m4" v-motion-slide-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
             In other to validate your account, provide us with more infos about you
                 
              </span>
            </div>

            <div
            class="start-container40" v-if="m4" v-slide-left> 
            <div>
    <v-select
    variant="outlined"
      v-model="location"
      label="Location"
      :items="['Yaounde', 'Douala', 'Bertoua', 'Ebolowa', 'Bafoussam', 'Bamenda', 'Buea']"
    ></v-select>

    <v-textarea
    variant="outlined"
      v-model="bio"
      label="More about you"
    ></v-textarea>

<div class="errorClass" v-if="error1.visible">
  {{ error1.message }}
</div>

<button @click="validateForm1" class="login-find button">
              <span>
                <span class="login-text09">Continue</span>
                <br />
              </span>
            </button>
     </div>
    </div>

     <div  class="start-container4" v-if="m5" v-motion-slide-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
             Now, provide us with front and back photos of your ID
                 
              </span>
            </div>



            <div
            class="start-container40" v-if="m6" v-motion-slide-left> 
<div>
    <div>
    <v-icon name="bi-card-image"></v-icon>
    <v-text>
        Front of ID Card
    </v-text>
</div>
    <br>

    <van-uploader :max-count="1"
     v-model="preview1"/>
    <br>

    <div>
    <v-icon name="bi-card-image"></v-icon>
    <v-text>
        Back of ID Card
    </v-text>
</div>
    <br>
    <van-uploader :max-count="1"
     v-model="preview2" />
    <br>
  
<div class="errorClass" v-if="error2.visible">
  {{ error2.message }}
</div>

<button @click="validateForm2" class="login-find button">
              <span>
                <span class="login-text09">Continue</span>
                <br />
              </span>
            </button>
          </div>

     </div>

     <div  class="start-container4" v-if="m7" v-motion-slide-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
            Now, snap a beutiful picture of yourself and upload. It will serve as your profile picture
                 
              </span>
            </div>

            <div
            class="start-container40" v-if="m8" v-slide-left> 
<div>
  <div>
    <v-icon name="bi-card-image"></v-icon>
    <v-text>
       Your pic
    </v-text>
</div>
    <br> 
    <van-uploader :max-count="1"
     v-model="preview3" />
    <br>
           
<div class="errorClass" v-if="error3.visible">
  {{ error3.message }}
</div>

<van-button :loading="loading" @click="validateForm3" class="login-find button">
              <span>
                <span class="login-text09">Continue</span>
                <br />
              </span>
            </van-button>
          </div>

     </div>

     <div  class="start-container4" v-if="m11" v-motion-slide-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
           We're almost done, now provide us with a pdf copy of you CV/ Resume 
                 
              </span>
            </div>

            <div
            class="start-container40" v-if="m11" v-slide-left> 
<div>
  <div>
    <v-icon name="bi-card-image"></v-icon>
    <v-text>
       Your Resume
    </v-text>
</div>
    <br> 
    <van-uploader :max-count="1"
     v-model="preview4" />
    <br>

      <v-switch v-model="checked"
  color="red-lighten-1" label="I agree to all the terms and blablabla"></v-switch>

           
<div class="errorClass" v-if="error3.visible">
  {{ error3.message }}
</div>

<van-button :loading="loading" @click="validateForm4" class="login-find button">
              <span>
                <span class="login-text09">Confirm</span>
                <br />
              </span>
            </van-button>
          </div>

     </div>
     



     <div class="start-container4" v-if="m9" v-motion-slide-left>
              <img
                alt="image"
                src="https://api.dicebear.com/6.x/avataaars/svg?seed=Bella&backgroundColor=ffd5dc&accessories[]&accessoriesColor[]&clothesColor=262e33,25557c&clothing=blazerAndShirt,blazerAndSweater&clothingGraphic[]&eyebrows=default&eyes=default&facialHair[]&facialHairColor[]&hairColor=2c1b18&hatColor=25557c&mouth=twinkle&skinColor=ae5d29&top=curly,bigHair,bob"
                class="start-image"
              />
              <span class="start-text">
              Congrats, your account have been validated
              </span>
            </div>


            <div @click="router.go(-1)"
            class="start-container5" v-if="m10"  v-motion-slide-left> 
              <span class="start-text04">
                <span class="start-text05">1.</span>
                <span> Go to my profile 😀</span>
              </span>
            </div>



          </div>


          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavbarInteractive from '@/components/navbar-interactive.vue'
  import { ref, onMounted, reactive } from 'vue';
  import {database} from '@/supabase.js';
  import { useRouter } from 'vue-router';

const router = useRouter()

    const m1 = ref(false)
    const m2 = ref(false)
    const m3 = ref(false)
    const m4 = ref(false)
    const m5 = ref(false)
    const m6 = ref(false)
    const m7 = ref(false)
    const m8 = ref(false)
    const m9 = ref(false)
    const m10 = ref(false)
    const m11 = ref(false)
    const m12 = ref(false)

    const nanny_name = localStorage.getItem('@name')



    const showKeyboard = ref(false);

    const loading=ref(false)

const location= ref('--select location--')
const bio= ref('')

const frontID= ref('')
const backID= ref('')

const preview1 = ref([])
const preview2 = ref([])
const preview3 = ref([])
const preview4 = ref([])


const afterRead1 = (file) => {
      frontID.value=file
      preview.value[0].url = file.content
      console.log(file)
    };
    const afterRead2 = (file) => {
      backID.value=file
    };

const dob = ref(new Date())
const checked= ref(false)
  
    const error1 =  reactive({message:"", visible:false})
    const error2 =  reactive({message:"", visible:false})
    const error3 =  reactive({message:"", visible:false})

const link = ref('')
    const upload = async(e) => {
  loading.value = true;
  try {
await database
  .storage
  .from('accordance-teachings')
  .upload(`tes2/${preview3.value[0].file.name}`, preview3.value[0].file, {
  cacheControl: '5000000',
  upsert: false
  })
link.value = `https://pwuhngcxepwfvynqirsc.supabase.co/storage/v1/object/public/accordance-teachings/tes2/${preview3.value[0].file.name}`
//window.open(link.value);
loading.value = false
  } catch (error) {
    console.log(error.message)
    loading.value = false

  }
}


    const validateForm1 =()=>{
      if(location.value === '--select location--')
      {
        error1.visible = true;
      error1.message = "Location  cannot be empty";
      } else
     if(bio.value === ""){
        error1.visible = true;
      error1.message = "Bio cannot be empty";
      }
      else{
        error1.visible = false;
        m5.value = true
        m6.value = true
        m1.value = false
        m2.value = false
        m3.value = false
        m4.value = false



      }
    }

    const validateForm2 =()=>{
      if(preview1.value.length === 0) {
        error2.visible = true;
      error2.message = "Come on, provide us with a picture of the front of your ID Card...";
    } else
      if(preview2.value.length === 0) {
        error2.visible = true;
      error2.message = "provide us with a picture of the back of your ID Card..";
    }
    else{
      error2.visible = false;
      m7.value = true
      m8.value = true
      m3.value = false
      m4.value = false
      m5.value = false
      m6.value = false

    }
  }

  
  const validateForm3 =async()=>{
    loading.value=true
      if(preview3.value.length === 0) {
        error3.visible = true;
      error3.message = "Come on, provide us with a picture of yourself";
    } else
      if(preview2.value.length === 0) {
        error2.visible = true;
      error2.message = "provide us with a picture of the back of your ID Card..";
    }
    else{

    try {
await database
  .storage
  .from('accordance-teachings')
  .upload(`tes2/${preview3.value[0].file.name}`, preview3.value[0].file, {
  cacheControl: '5000000',
  upsert: false
  })
link.value = `https://pwuhngcxepwfvynqirsc.supabase.co/storage/v1/object/public/accordance-teachings/tes2/${preview3.value[0].file.name}`
//window.open(link.value);
   loading.value = false
     error3.visible = false;
      m7.value = false
       m8.value = false  
      m11.value = true
  } catch (error) {
    console.log(error.message)
    loading.value = false

  }
     

    }
  }

  const validateForm4 = async()=>{
    if(preview4.value.length === 0) {
        error3.visible = true;
      error3.message = "You need to provide us with your CV in other to continue";
    } else
    if(!checked.value){
      error3.visible = true
      error3.message = "You need to agree with the terms in other to continue"
    }
    else{
      error3.visible = false
      loading.value = true;

      try { 
        loading.value = true;
       await database
       .from('nannies')
     .update({
     avatar: link.value,
     bio: bio.value,
      location: location.value,
      validated: true,
    })
    .eq('name', nanny_name)

    m11.value = false
      m9.value = true
      m10.value = true
      loading.value = false;


      } catch (error) {
        console.log('err: ', error.message);
      }

    }
  } 
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
  .errorClass{
    margin-top: 5%;
color: #ff8896;
font-size: medium;
  }
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
    background-attachment: fixed;
 
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
  .start-container40 {
    width: 100%;
    height: auto;
   padding: 3vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
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
  margin-top: var(--dl-space-space-unit);
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
  .start-container40 {
    width: 100%;
    height: auto;
   padding: 5vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    background-color: #ffffff;
  }
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
  .start-container40 {
    width: 100%;
    height: auto;
   padding: 8vw;
    border-radius: 24px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
    background-color: #ffffff;
  }
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
  