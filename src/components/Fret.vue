<template>
  <li
    :class="[
      'fret',
      { 'fret--highlight' : isHighlighted }
    ]"
  >
    <template v-if="isMuted">
      <span class="fret__muted">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
      </span>
    </template>
    <template v-else>
      <slot/>
    </template>
  </li>
</template>

<script>
export default {
  name: 'Fret',
  props: {
    number: {
      type: Number,
      default: 0
    },
    isMuted: {
      type: Boolean,
      default: false
    },
    isHighlighted: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.fret {
  position: relative;
  display: inline-block;
  width: $fret-regular-width;
  height: 100%;
  box-sizing: content-box;

  border-right: $fret-regular-border-width solid $color-gray-lighter;

  .fretboard--left-handed & {
    border: none;
    border-left: $fret-regular-border-width solid $color-gray-lighter;
  }

  .fretboard--vertical & {
    width: 100%;
    height: $fret-regular-width;
    border: none;
    border-bottom: $fret-regular-border-width solid $color-gray-lighter;
  }

  .fretboard--thumb & {
    width: $thumb-fret-regular-width;
  }

  .fretboard--vertical.fretboard--thumb & {
    height: $thumb-fret-regular-width;
  }

  &:first-of-type {
    width: $fret-initial-width;
    border-right: $fret-initial-border-width solid $color-gray-dark;

    .fretboard--left-handed & {
      border: none;
      border-left: $fret-initial-border-width solid $color-gray-dark;
    }

    .fretboard--vertical & {
      width: initial;
      height: $fret-initial-width;
      border: none;
      border-bottom: $fret-initial-border-width solid $color-gray-dark;
    }

    .fretboard--thumb & {
      width: $thumb-fret-initial-width;
      border-width: $thumb-fret-initial-border-width;
    }

    .fretboard--vertical.fretboard--thumb & {
      width: initial;
      height: $thumb-fret-initial-width;
    }
  }

  &:last-of-type {
    border-right: $fret-last-border-width solid $color-gray-dark;

    .fretboard--left-handed & {
      border: none;
      border-left: $fret-last-border-width solid $color-gray-dark;
    }

    .fretboard--vertical & {
      border: none;
      border-bottom: $fret-last-border-width solid $color-gray-dark;
    }

    .fretboard--thumb & {
      border-width: $thumb-fret-last-border-width;
    }
  }

  &--highlight {
    /* border-color: $color-grape;
    background: $color-grape-light; */
  }

  &__muted {
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      position: absolute;
      top: 50%;
      right: 35%;
      transform: translate(50%, -50%);
      width: 8px;
      height: 8px;
      fill: red;

      .fretboard--left-handed & {
        right: initial;
        left: 35%;
        transform: translate(-50%, -50%);
      }

      .fretboard--vertical & {
        top: initial;
        right: initial;
        bottom: 35%;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
  }
}
</style>
