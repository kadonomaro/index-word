<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">

      <div class="modal">
        <header class="modal__header">
          <button class="modal__button modal__button--close" @click="close" aria-label="Close modal">x</button>
          <slot name="header"></slot>
        </header>
        <section class="modal__body">
          <slot name="body">
          </slot>
        </section>
        <footer class="modal__footer">
          <slot name="footer">
            <app-button
              class="editable-article__button"
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
    background: #ffffff;
    overflow-x: auto;
    &__header,
    &__footer {
      display: flex;
      padding: 15px;
    }
    &__header {
      justify-content: space-between;
      color: #ffffff;
      background-color: #606060;
    }
    &__body {
      position: relative;
      padding: 20px 10px;
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
    }
  }


  .btn-close {
    padding: 20px;
    color: #4AAE9B;
    font-size: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
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
