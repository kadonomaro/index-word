<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">

      <div class="modal">
        <header class="modal__header">
          <slot name="header"></slot>
          <button class="modal__button modal__button--close" @click="close" aria-label="Close modal"></button>
        </header>
        <section class="modal__body">
          <slot name="body">
          </slot>
        </section>
        <footer class="modal__footer">
          <slot name="footer">
            <app-button
              :text="'OK'"
              @click-handler="action"
            />
          </slot>
        </footer>
      </div>

    </div>
  </transition>
</template>

<script>
import AppButton from '@/components/blocks/AppButton.vue';
export default {
  name: 'modal',
  components: {
    AppButton
  },
  methods: {
    close() {
      this.$emit('close');
    },
    action() {
      this.$emit('action');
    }
  },
};
</script>

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }

  .modal {
    position: relative;
    min-width: 320px;
    max-width: 600px;
    background: #ffffff;
    overflow-x: auto;
    &__header,
    &__footer {
      display: flex;
      padding: 10px 20px;
    }
    &__header {
      justify-content: space-between;
      color: #ffffff;
      font-size: 24px;
      background-color: #606060;
    }
    &__body {
      position: relative;
      padding: 10px 20px;
      font-size: 18px;
    }
    &__footer {
      justify-content: flex-end;
      border-top: 1px solid #eeeeee;
    }
    &__button {
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    &__button--close {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      color: #ffffff;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47.971 47.971'%3E%3Cpath fill='%23ffffff' d='M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z'/%3E%3C/svg%3E");
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: center;
      border: 2px solid #ffffff;
    }
  }


  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
