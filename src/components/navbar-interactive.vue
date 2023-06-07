<script setup>

</script>

<template>
   <div class="navbar-interactive-container" >
    <v-menu activator="#menu-activator" >
      <v-list>
       <v-list-item><router-link to="/">🏠 Home</router-link> </v-list-item>
       <v-list-item><router-link to="/start">🔍 Start</router-link> </v-list-item>
       <v-list-item><router-link to="/login">🔏 Login</router-link> </v-list-item>
      </v-list>
    </v-menu>
    <header data-thq="thq-navbar" class="navbar-interactive-navbar-interactive">
      <span class="navbar-interactive-text">
        <span>E.</span>
        <span class="navbar-interactive-text02">hair</span>
      </span>
      <div
        data-thq="thq-navbar-nav"
        data-role="Nav"
        class="navbar-interactive-desktop-menu"
      >
        <nav
          data-thq="thq-navbar-nav-links"
          data-role="Nav"
          class="navbar-interactive-nav"
        >
          <span class="navbar-interactive-text03"><router-link to="/"> Home</router-link></span>
          <span class="navbar-interactive-text04"><router-link to="/nannies"> Search</router-link></span>
          <span class="navbar-interactive-text05"><span>Posts</span></span>
          <span class="navbar-interactive-text06"><span>Gallery</span></span>
        </nav>
      </div>
      <div 
        data-thq="thq-navbar-btn-group"
        class="navbar-interactive-btn-group"
      ></div>
      <div 
        data-thq="thq-burger-menu"
        class="navbar-interactive-burger-menu"
      ></div>
      <svg id="menu-activator"
      viewBox="0 0 1024 1024" class="navbar-interactive-icon">
        <path
          d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
        ></path>
      </svg>
      <div class="navbar-interactive-container1"></div>
      <div data-thq="thq-mobile-menu" class="navbar-interactive-mobile-menu">
        <div
          data-thq="thq-mobile-menu-nav"
          data-role="Nav"
          class="navbar-interactive-nav1"
        >
          <div class="navbar-interactive-container2">
            <img
              alt="image"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              class="navbar-interactive-image"
            />
            <div
              data-thq="thq-close-menu"
              class="navbar-interactive-menu-close"
            >
              <svg viewBox="0 0 1024 1024" class="navbar-interactive-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                ></path>
              </svg>
            </div>
          </div>
          <nav
            data-thq="thq-mobile-menu-nav-links"
            data-role="Nav"
            class="navbar-interactive-nav2"
          >
            <span class="navbar-interactive-text07"><span>About</span></span>
            <span class="navbar-interactive-text08"><span>Features</span></span>
            <span class="navbar-interactive-text09"><span>Pricing</span></span>
            <span class="navbar-interactive-text10"><span>Team</span></span>
            <span class="navbar-interactive-text11"><span>Blog</span></span>
          </nav>
          <div class="navbar-interactive-container3">
            <button class="navbar-interactive-login button">
              <span>Login</span>
            </button>
            <button class="button"><span>Register</span></button>
          </div>
        </div>
        <div class="navbar-interactive-icon-group">
          <svg
            viewBox="0 0 950.8571428571428 1024"
            class="navbar-interactive-icon04"
          >
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg
            viewBox="0 0 877.7142857142857 1024"
            class="navbar-interactive-icon06"
          >
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path></svg
          ><svg
            viewBox="0 0 602.2582857142856 1024"
            class="navbar-interactive-icon08"
          >
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  </div>
</template>

<style  scoped>
.navbar-interactive-container {
  display: flex;
  position: relative;
  background-color: #fff;
}
.navbar-interactive-navbar-interactive {
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  padding-bottom: var(--dl-space-space-twounits);
  justify-content: space-between;
}
.navbar-interactive-text {
  color: var(--dl-color-gray-black);
  font-size: 32px;
  font-style: normal;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  text-transform: uppercase;
}
.navbar-interactive-desktop-menu {
  display: flex;
}
.navbar-interactive-nav {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navbar-interactive-text03 {
  color: rgb(152, 0, 217);
  font-size: 20px;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Poppins;
  font-weight: 700;
  margin-left: 100px;
  text-transform: capitalize;
}
.navbar-interactive-text03:focus {
  color: #a60000;
}
.navbar-interactive-text03:hover {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text04 {
  color: rgb(152, 0, 217);
  font-size: 18px;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Poppins;
  font-weight: 700;
  margin-left: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.navbar-interactive-text04:focus {
  color: #a60000;
}
.navbar-interactive-text04:hover {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text05 {
  color: rgb(152, 0, 217);
  font-size: 18px;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Poppins;
  font-weight: 700;
  margin-left: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.navbar-interactive-text05:focus {
  color: #a60000;
}
.navbar-interactive-text05:hover {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text06 {
  color: rgb(152, 0, 217);
  font-size: 18px;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Poppins;
  font-weight: 700;
  margin-left: var(--dl-space-space-twounits);
  text-transform: capitalize;
}
.navbar-interactive-text06:focus {
  color: #a60000;
}
.navbar-interactive-text06:hover {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-btn-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-interactive-burger-menu {
  display: none;
  align-items: center;
  justify-content: center;
}
.navbar-interactive-icon {
  width: var(--dl-size-size-small);
  height: 30px;
  margin-left: 400px;
}
.navbar-interactive-container1 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: space-between;
  flex-direction: column;
}
.navbar-interactive-mobile-menu {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
}
.navbar-interactive-nav1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar-interactive-container2 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.navbar-interactive-image {
  height: 2rem;
}
.navbar-interactive-menu-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-interactive-icon02 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.navbar-interactive-nav2 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.navbar-interactive-text07 {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text08 {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text09 {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text10 {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-text11 {
  margin-bottom: var(--dl-space-space-unit);
}
.navbar-interactive-container3 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
}
.navbar-interactive-login {
  margin-right: var(--dl-space-space-twounits);
}
.navbar-interactive-icon-group {
  display: flex;
}
.navbar-interactive-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.navbar-interactive-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.navbar-interactive-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}




@media(max-width: 991px) {
  .navbar-interactive-navbar-interactive {
    width: 100vw;
    height: 105px;
    margin-left: 0px;
    padding-bottom: 13px;
  }
  .navbar-interactive-text {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    text-transform: uppercase;
  }
  .navbar-interactive-text02 {
    text-transform: capitalize;
  }
  .navbar-interactive-text03 {
    margin-left: var(--dl-space-space-sixunits);
  }
  .navbar-interactive-icon {
    width: var(--dl-size-size-small);
    height: 30px;
  }
}
@media(max-width: 767px) {
  .navbar-interactive-navbar-interactive {
    width: 100vw;
    height: 96px;
    margin-left: 0px;
    padding-left: var(--dl-space-space-twounits);
    padding-right: 3px;
  }
  .navbar-interactive-desktop-menu {
    display: none;
  }
  .navbar-interactive-text04 {
    margin-left: var(--dl-space-space-unit);
  }
  .navbar-interactive-text05 {
    margin-left: var(--dl-space-space-unit);
  }
  .navbar-interactive-text06 {
    margin-left: var(--dl-space-space-unit);
  }
  .navbar-interactive-btn-group {
    display: none;
  }
  .navbar-interactive-burger-menu {
    display: flex;
  }
  .navbar-interactive-icon {
    width: 8vw;
    height: 8vw;
    margin-left: 50%;
  }
}
@media(max-width: 474px) {
  .navbar-interactive-navbar-interactive {
    width: 100vw;
    height: 86px;
    padding: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .navbar-interactive-text {
    font-size: 30px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
    text-transform: uppercase;
  }
  .navbar-interactive-burger-menu {
    justify-content: flex-start;
  }
  .navbar-interactive-icon {
    flex: 1;
    width: 74px;
    height: 8vw;
    align-self: center;
    margin-left: 50%;
  }
  .navbar-interactive-mobile-menu {
    padding: 16px;
  }
}

</style>
