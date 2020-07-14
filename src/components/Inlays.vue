<template>
  <ul class="inlays" v-if="inlays">
    <template v-if="inlays === 'circles'">
      <template v-for="index in octaves">
        <li class="inlays__group" data-octave-index="3" :key="`3-${index}`">
          <div class="inlays--circle"/>
        </li>
        <li class="inlays__group" data-octave-index="5" :key="`5-${index}`">
          <div class="inlays--circle"/>
        </li>
        <li class="inlays__group" data-octave-index="7" :key="`7-${index}`">
          <div class="inlays--circle"/>
        </li>
        <li class="inlays__group" data-octave-index="9" :key="`9-${index}`">
          <div class="inlays--circle"/>
        </li>
        <li class="inlays__group" data-octave-index="12" :key="`12-${index}`">
          <div class="inlays--circle"/>
          <div class="inlays--circle"/>
        </li>
      </template>
    </template>
    <template v-else-if="inlays === 'rectangles'">
      <template v-for="index in octaves">
        <li class="inlays__group" data-octave-index="3" :key="`3-${index}`">
          <div class="inlays--rectangle"/>
        </li>
        <li class="inlays__group" data-octave-index="5" :key="`5-${index}`">
          <div class="inlays--rectangle"/>
        </li>
        <li class="inlays__group" data-octave-index="7" :key="`7-${index}`">
          <div class="inlays--rectangle"/>
        </li>
        <li class="inlays__group" data-octave-index="9" :key="`9-${index}`">
          <div class="inlays--rectangle"/>
        </li>
        <li class="inlays__group" data-octave-index="12" :key="`12-${index}`">
          <div class="inlays--rectangle inlays--rectangle--large"/>
        </li>
      </template>
    </template>
    <template v-else-if="inlays === 'trapezoids'">
      <template v-for="index in octaves">
        <li class="inlays__group" data-octave-index="3" :key="`3-${index}`">
          <div class="inlays--trapezoid"/>
        </li>
        <li class="inlays__group" data-octave-index="5" :key="`5-${index}`">
          <div class="inlays--trapezoid"/>
        </li>
        <li class="inlays__group" data-octave-index="7" :key="`7-${index}`">
          <div class="inlays--trapezoid"/>
        </li>
        <li class="inlays__group" data-octave-index="9" :key="`9-${index}`">
          <div class="inlays--trapezoid"/>
        </li>
        <li class="inlays__group" data-octave-index="12" :key="`12-${index}`">
          <div class="inlays--trapezoid inlays--trapezoid--large"/>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'Inlays',
  props: {
    inlays: {
      type: String,
      default: 'circles'
    },
    octaves: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

$fret-initial-width: 30px;
$fret-regular-width: 36px;

.inlays {
  display: flex;

  position: absolute;
  height: 100%;
  left: $fret-initial-width;
  right: 0;

  padding: 0;
  list-style-type: none;
  margin: 0;

  .fretboard--left-handed & {
    left: 0;
    right: $fret-initial-width;
  }

  .fretboard--vertical & {
    width: 100%;
    top: $fret-initial-width;
    right: initial;
    left: initial;
  }

  &--circle {
    display: inline-block;
    width: 15px;
    height: 15px;

    border-radius: 100%;

    background-color: $color-gray-lightest;

    &:nth-of-type(2) {
      margin-top: 37px;
    }
  }

  &--rectangle {
    display: inline-block;
    width: 12px;
    height: 60%;

    border-radius: 3px;

    background-color: $color-gray-lightest;

    &--large {
      width: 18px;
    }
  }

  &--trapezoid {
    display: inline-block;

    width: 0;
    height: 40px;

    border-left: 12px solid $color-gray-lightest;
    border-bottom: 6px solid transparent;
    border-top: 6px solid transparent;

    border-radius: 3px;

    background-color: transparent;

    &--large {

    border-left: 12px solid $color-gray-lightest;
      height: 50px;
      border-left: 16px solid $color-gray-lightest;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    width: $fret-regular-width;
    height: 100%;

    .fretboard--vertical & {
      width: 100%;
      height: $fret-regular-width;
    }

    $inlays-positions: 3 5 7 9 12;
    @each $inlay in $inlays-positions {
      $i: index($inlays-positions, $inlay);

      $position: $fret-regular-width * ($inlay - 1);

      &[data-octave-index="#{$inlay}"] {
        left: $position;

        .fretboard--left-handed & {
          left: initial;
          right: $position;
        }

        .fretboard--vertical & {
          top: $position;
          left: initial;
          right: initial;
        }

      }
    }
  }
}
</style>
