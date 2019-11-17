<template>
  <div class="login">
    <div class="login__inner">

      <div class="login-box">
        <span class="login-box__title">Authorization</span>
        <form action="" class="login-box__form">
          <label class="login-box__label">
            <input
              type="text"
              class="login-box__controls"
              placeholder="Email"
              v-model="loginData.email"
            >
          </label>
          <label class="login-box__label">
            <input
              type="text"
              class="login-box__controls"
              placeholder="Password"
              v-model="loginData.password"
            >
          </label>
          <button class="login-box__button" @click.prevent="loginClickHandler">Login</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginClickHandler() {
      this.$store.dispatch('login', [this.loginData.email, this.loginData.password]);
      setTimeout(() => {
        this.$router.push('/admin');
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
  .login {
    width: 100vw;
    height: 100vh;
    background-color: #3c4c67;
    &__inner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .login-box {
    position: relative;
    width: 360px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    background-image: url('~@/assets/admin/gears.svg');
    background-size: 60px;
    background-repeat: no-repeat;
    background-position: 5px 5px;
    &__title {
      display: block;
      margin-bottom: 40px;
      color: #303030;
      font-size: 24px;
    }
    &__label {
      position: relative;
      display: block;
      margin-bottom: 25px;
    }
    &__controls {
      width: 100%;
      padding: 4px 8px;
      font-family: inherit;
      font-size: 16px;
      border: none;
      border-bottom: 3px solid #3c4c67;
      box-sizing: border-box;
    }
    &__button {
      padding: 4px 8px;
      color:  #3c4c67;
      font-family: inherit;
      font-size: 18px;
      background-color: transparent;
      border: 2px solid #3c4c67;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      &:hover,
      &:focus {
        color: #ffffff;
        background-color: #3c4c67;
      }
    }
  }
</style>
