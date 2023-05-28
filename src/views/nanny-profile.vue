<template>
  <div class="nanny-profile-container" v-motion-fade>
    <navbar-interactive
      rootClassName="navbar-interactive-root-class-name2"
    ></navbar-interactive>
    <div class="nanny-profile-container01">
      <div class="nanny-profile-container02">
        <div class="nanny-profile-container03">
          <app-back rootClassName="back-root-class-name2"></app-back>
          <div class="nanny-profile-container04">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE="
              loading="lazy"
              class="nanny-profile-image"
            />
            <span class="nanny-profile-text">
              <span class="nanny-profile-text01">Sandrine </span>
              <span class="nanny-profile-text02">Oku </span>
            </span>
          </div>
          <div class="nanny-profile-container05">
            <span class="nanny-profile-text03">
              <span class="nanny-profile-text04">- Age:</span>
              <span class="nanny-profile-text05">  21</span>
            </span>
          </div>
          <div class="nanny-profile-container06">
            <span class="nanny-profile-text06">
              <span class="nanny-profile-text07">- Phone:</span>
              <span class="nanny-profile-text08">  +237 664667028</span>
            </span>
          </div>
          <div class="nanny-profile-container07">
            <span class="nanny-profile-text09">
              <span class="nanny-profile-text10">- Location:</span>
              <span class="nanny-profile-text11"> </span>
              <span class="nanny-profile-text12">Yaoundé</span>
            </span>
          </div>
          <span class="nanny-profile-text13">
            <span class="nanny-profile-text14">About </span>
            <span class="nanny-profile-text15">me </span>
          </span>
          <span class="nanny-profile-text16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tristique faucibus nulla, et tempus est. Vestibulum tincidunt quis sem
            ac scelerisque. Curabitur non lectus risus.
          </span>
          <span class="nanny-profile-text17">
            <span>Re</span>
            <span class="nanny-profile-text19">vi</span>
            <span>ews</span>
          </span>
          <div class="nanny-profile-container08">
            <span class="nanny-profile-text21">@Mrs Sharon Dinkeng</span>
            <span class="nanny-profile-text22">
              She is very respectful and efficient. She did all her chores without
              me having to control anything
            </span>
          </div>
          <div class="nanny-profile-container09">
            <span class="nanny-profile-text23">@Mrs Sharon Dinkeng</span>
            <span class="nanny-profile-text24">
              She is very respectful and efficient. She did all her chores without
              me having to control anything
            </span>
          </div>
          <button class="nanny-profile-find button">Recruit Now</button>
        </div>
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name2"></app-footer>
  </div>
</template>

<script setup>
import NavbarInteractive from '@/components/navbar-interactive.vue'
import AppBack from '@/components/back.vue'
import AppFooter from '@/components/footer.vue'

</script>

<style scoped>
.nanny-profile-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.nanny-profile-container01 {
  width: 100%;
  height: 1154px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: flex-start;
  background-image: url('https://post.healthline.com/wp-content/uploads/2020/11/834360-Best-Babysitting-websites-and-Apps-1200x628-Facebook-1200x628.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.nanny-profile-container02 {
  width: 100%;
  height: 1156px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.36);
}
.nanny-profile-container03 {
  flex: 0 0 auto;
  width: 844px;
  height: 1091px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: 12px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
}
.nanny-profile-container04 {
  width: 100%;
  height: 274px;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-bottom: 13px;
  justify-content: center;
}
.nanny-profile-image {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  border-color: var(--dl-color-primary-500);
  border-width: 5px;
  margin-right: var(--dl-space-space-threeunits);
  border-radius: var(--dl-radius-radius-round);
}
.nanny-profile-text {
  font-size: 32px;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 700;
}
.nanny-profile-text01 {
  color: #000000;
}
.nanny-profile-text02 {
  color: #ff4d4f;
}
.nanny-profile-container05 {
  width: 50%;
  height: 47px;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  justify-content: flex-start;
}
.nanny-profile-text03 {
  font-size: 21px;
  font-family: Poppins;
  font-weight: 600;
}
.nanny-profile-text04 {
  color: #000000;
}
.nanny-profile-text05 {
  color: #ff4d4f;
}
.nanny-profile-container06 {
  width: 50%;
  height: 47px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.nanny-profile-text06 {
  font-size: 21px;
  font-family: Poppins;
  font-weight: 600;
}
.nanny-profile-text07 {
  color: #000000;
}
.nanny-profile-text08 {
  color: #ff4d4f;
}
.nanny-profile-container07 {
  width: 50%;
  height: 47px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.nanny-profile-text09 {
  font-size: 21px;
  font-family: Poppins;
  font-weight: 600;
}
.nanny-profile-text10 {
  color: #000000;
}
.nanny-profile-text11 {
  color: #ff4d4f;
}
.nanny-profile-text12 {
  color: #ff4d4f;
}
.nanny-profile-text13 {
  font-size: 32px;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  font-family: Poppins;
  font-weight: 700;
}
.nanny-profile-text14 {
  color: #000000;
}
.nanny-profile-text15 {
  color: #ff4d4f;
}
.nanny-profile-text16 {
  font-size: 18px;
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
  text-align: justify;
  font-family: Poppins;
  line-height: 1.3;
  margin-left: var(--dl-space-space-fiveunits);
  margin-right: var(--dl-space-space-fiveunits);
}
.nanny-profile-text17 {
  font-size: 32px;
  font-style: normal;
  margin-top: var(--dl-space-space-threeunits);
  font-family: Poppins;
  font-weight: 700;
}
.nanny-profile-text19 {
  color: #ff4d4f;
}
.nanny-profile-container08 {
  flex: 0 0 auto;
  width: 675px;
  height: 100px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f1f1f1;
}
.nanny-profile-text21 {
  font-size: 18px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Poppins;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
}
.nanny-profile-text22 {
  font-size: 15px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 400;
  margin-left: var(--dl-space-space-unit);
}
.nanny-profile-container09 {
  flex: 0 0 auto;
  width: 675px;
  height: 100px;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f1f1f1;
}
.nanny-profile-text23 {
  font-size: 18px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Poppins;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
}
.nanny-profile-text24 {
  font-size: 15px;
  align-self: flex-start;
  font-style: normal;
  margin-top: var(--dl-space-space-halfunit);
  font-family: Poppins;
  font-weight: 400;
  margin-left: var(--dl-space-space-unit);
}
.nanny-profile-find {
  color: var(--dl-color-gray-white);
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
  background-color: #ff4d4f;
}
.nanny-profile-find:hover {
  opacity: 0.5;
}
@media(max-width: 991px) {
  .nanny-profile-container03 {
    width: 786px;
  }
  .nanny-profile-image {
    width: 25vw;
    height: 25vw;
  }
  .nanny-profile-text03 {
    font-size: 21px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .nanny-profile-text04 {
    color: #000000;
    font-weight: 700;
  }
  .nanny-profile-text05 {
    color: #ff4d4f;
  }
  .nanny-profile-text06 {
    font-size: 21px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .nanny-profile-text07 {
    color: #000000;
    font-weight: 700;
  }
  .nanny-profile-text08 {
    color: #ff4d4f;
  }
  .nanny-profile-text09 {
    font-size: 21px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
  }
  .nanny-profile-text10 {
    color: #000000;
    font-weight: 700;
  }
  .nanny-profile-text11 {
    color: #ff4d4f;
    font-weight: 700;
  }
  .nanny-profile-text12 {
    color: #ff4d4f;
  }
  .nanny-profile-text13 {
    font-size: 28px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nanny-profile-text14 {
    color: #000000;
  }
  .nanny-profile-text15 {
    color: #ff4d4f;
  }
  .nanny-profile-text17 {
    font-size: 28px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
  }
  .nanny-profile-find {
    width: 50%;
    text-align: center;
  }
}
@media(max-width: 767px) {
  .nanny-profile-container03 {
    width: 100%;
    padding-left: 7vw;
    padding-right: 7vw;
  }
  .nanny-profile-container04 {
    width: 100%;
    height: 218px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .nanny-profile-image {
    width: 25vw;
    height: 27vw;
  }
  .nanny-profile-container05 {
    width: 60%;
  }
  .nanny-profile-container06 {
    width: 60%;
  }
  .nanny-profile-container07 {
    width: 60%;
  }
  .nanny-profile-text16 {
    margin-left: var(--dl-space-space-oneandhalfunits);
    margin-right: var(--dl-space-space-oneandhalfunits);
  }
  .nanny-profile-container08 {
    width: 100%;
  }
  .nanny-profile-container09 {
    width: 100%;
  }
}
@media(max-width: 474px) {
  .nanny-profile-container01 {
    height: 1348px;
  }
  .nanny-profile-container02 {
    height: 100%;
  }
  .nanny-profile-container03 {
    width: 100%;
    height: 1241px;
    padding-left: 7vw;
    margin-bottom: 0px;
    padding-right: 7vw;
  }
  .nanny-profile-container04 {
    width: 100%;
    height: 262px;
    padding-bottom: 0px;
  }
  .nanny-profile-image {
    width: 36vw;
    height: 38vw;
    margin-right: var(--dl-space-space-unit);
  }
  .nanny-profile-text {
    font-size: 28px;
  }
  .nanny-profile-container05 {
    width: 324px;
    padding-right: 0px;
  }
  .nanny-profile-container06 {
    width: 324px;
    padding-right: 0px;
  }
  .nanny-profile-container07 {
    width: 332px;
  }
  .nanny-profile-text13 {
    font-size: 26px;
  }
  .nanny-profile-text16 {
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
  .nanny-profile-text17 {
    font-size: 26px;
  }
  .nanny-profile-container08 {
    width: 100%;
  }
  .nanny-profile-container09 {
    width: 100%;
  }
}
</style>
