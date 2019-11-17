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
              type="password"
              class="login-box__controls"
              placeholder="Password"
              v-model="loginData.password"
            >
          </label>
          <button class="login-box__button" @click.prevent="loginClickHandler">Login</button>
          <span class="login-box__error">{{ errorCode }}</span>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters([
      'errorCode'
    ])
  },
  methods: {
    loginClickHandler() {
      this.$store.dispatch('login', [this.loginData.email, this.loginData.password]);
      this.$router.push('/admin');
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
    padding: 20px 20px 10px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    background-image: url('~@/assets/admin/gears.svg');
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: -25px -25px;
    &__title {
      display: block;
      margin-bottom: 40px;
      color: #606060;
      font-size: 24px;
    }
    &__label {
      position: relative;
      display: block;
      margin-bottom: 25px;
    }
    &__controls {
      width: 100%;
      padding: 6px 12px;
      color: #303030;
      font-family: inherit;
      font-size: 16px;
      border: none;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: 3px solid #3c4c67;
      box-sizing: border-box;
      outline: none;
      transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
      &:hover,
      &:focus {
        background-color: lighten($color: #3c4c67, $amount: 60%);
        border-color: lighten($color: #3c4c67, $amount: 20%);
      }
    }
    &__button {
      margin-bottom: 10px;
      padding: 4px 12px;
      color:  #3c4c67;
      font-family: inherit;
      font-size: 18px;
      background-color: transparent;
      border: 2px solid #3c4c67;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s ease-in, color 0.2s ease-in;
      outline: none;
      &:hover,
      &:focus {
        color: #ffffff;
        background-color: #3c4c67;
      }
    }
    &__error {
      display: block;
    }
  }
</style>
