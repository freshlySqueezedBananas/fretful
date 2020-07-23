<template>
  <span
    class="note"
    :class="{
      'note--active' : isActive,
      'note--neck' : isNeck,
      'note--root' : isRoot && highlightRoot,
      'note--unfocused' : isDimmed,
      'note--link-accidentals' : linkAccidentals,
      ['note--finger note--finger--' + this.finger] : this.finger,
      ['note--individual--' + this.$options.filters.toAccidentals(displayNote)] : groupedByColor
    }"
    @mouseenter="emitNoteHover(displayNote)"
    @mouseleave="emitNoteHover(null)"
    @click="emitNoteClick(displayNote)"
    v-if="!isHidden"
  >
    <template v-if="display === 'notes'">
      <span>{{ displayNote | toUpperCase | toAccidentals }}</span>
    </template>
    <template v-else-if="display === 'intervals'">
      <span>{{ displayInterval | toUpperCase | toAccidentals }}</span>
    </template>
  </span>
</template>

<script>
import { Sampler } from 'tone';
import C0 from '../assets/audio/C0.wav';
import C1 from '../assets/audio/C1.wav';
import C2 from '../assets/audio/C2.wav';
import C3 from '../assets/audio/C3.wav';

import { $bus } from '../main';
import { getIntervalFromRoot } from '../entities/intervals';

export default {
  name: 'Note',
  data() {
    return {
      isDimmed: false
    }
  },
  props: {
    instance: {
      type: Number
    },
    finger: {
      type: Number
    },
    display: {
      type: String,
      default: 'notes'
    },
    highlight: {
      type: Boolean,
      default: true
    },
    note: {
      type: [
        Array,
        String
      ],
      default: 'c'
    },
    plotNote: {
      type: String,
      default: 'c'
    },
    root: {
      type: [
        Array,
        String
      ],
      default: 'E'
    },
    isHidden: {
      type: Boolean,
      default: false
    },
    isNeck: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isRoot: {
      type: Boolean,
      default: false
    },
    groupedByColor: {
      type: Boolean,
      default: false
    },
    highlightRoot: {
      type: Boolean,
      default: true
    },
    linkAccidentals: {
      type: Boolean,
      default: false
    },
    octave: {
      type: Number
    }
  },
  filters: {
    toUpperCase(note) {
      if (note === '') {
        return '';
      }

      return note.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    },
    toAccidentals(note) {
      if (note === '' || !note.length) {
        return '';
      }

      if (note.length === 1) {
        return note;
      }

      const flat = note.replace('b', '♭');
      const sharp = flat.replace('#', '♯');

      return sharp;
    }
  },
  methods: {
    emitNoteHover(note) {
      $bus.$emit('mouseenter-note', { instance: this.instance, note: note });
    },
    emitNoteClick(note) {
      $bus.$emit('click-note', { instance: this.instance, note: `${note}${this.octave}` });
    },
    playNote() {
      this.sampler.triggerAttack(`${this.displayNote}${this.octave}`);
    }
  },
  computed: {
    isNatural() {
      return !Array.isArray(this.note);
    },
    displayNote() {
      if (Array.isArray(this.note)) {
        const index = this.plotNote.endsWith('b') ? 1 : 0;

        return this.note[index];
      }

      return this.note;
    },
    interval() {
      return getIntervalFromRoot(this.root, this.note);
    },
    displayInterval() {
      if (Array.isArray(this.interval)) {
        const index = this.plotNote.endsWith('b') ? 1 : 0;

        return this.interval[index];
      }

      return this.interval;
    },
  },
  created() {
    this.sampler = new Sampler({ C0, C1, C2, C3 }).toMaster();

    $bus.$on('mouseenter-note', ({ instance, note }) => {
      if (instance !== this.instance) {
        return;
      }

      if (!this.highlight) {
        if (note) {
          if (note === this.displayNote) {
            this.isDimmed = false;
          } else {
            this.isDimmed = true;
          }
        } else {
          this.isDimmed = false;
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

$note-width: 20px;
$note-height: 20px;
$thumb-note-width: 8px;
$thumb-note-height: 8px;

.note {
  $self: &;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 35%;

  box-sizing: border-box;

  width: $note-width;
  height: $note-height;

  border-radius: 100%;

  background-color: $color-blue;

  transform: translate(50%, -50%);
  transform-origin: center center;

  user-select: none;
  cursor: pointer;

  transition: all 150ms ease-in;

  z-index: 1;

  &:before {
    content: '';
    position: absolute;

    width: 1.5em;
    height: 1.5em;
  }

  /* Highlight on hover
  &:after {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
    border-radius: 100%;

    background-color: rgba($color-gray-lightest, 0.3);

    z-index: -1;

    opacity: 0;
    transition: opacity 100ms ease-out;
  }

  &:active {
    &:after {
      opacity: 1;
    }
  } */

  .fretboard--left-handed & {
    right: initial;
    left: 35%;
    transform: translate(-50%, -50%);
  }

  .fretboard--vertical & {
    top: initial;
    bottom: 35%;
    right: 50%;
    left: initial;
    transform: translate(50%, 50%);
    transform-origin: center center;
  }

  .fretboard--thumb & {
    width: $thumb-note-width;
    height: $thumb-note-height;
  }

  .fretboard--thumb.fretboard--left-handed.fretboard--vertical & {
    left: initial;
    right: 50%;
  }

  span {
    font-size: 10px;
    color: #ffffff;

    transition: none;

    .fretboard--thumb & {
      display: none;
    }
  }

  &--finger {
    &:after {
      position: absolute;
      top: 55%;
      left: 75%;
      width: 11px;
      height: 11px;
      color: $color-gray-lightest;
      background: $color-gray-dark;
      border-radius: 50%;
      font-size: 8px;

      .fretboard--vertical & {
        top: 75%;
        left: 55%;
      }
    }

    &.note--dimmed {
      &:after {
        opacity: 0;
      }
    }
    
    $fingers: 1 2 3 4;
    @each $finger in $fingers {

      &--#{$finger} {
        &:after {
          content: '#{$finger}';
        }
      }
    }
  }

  &--root {
    background-color: $color-red;
  }

  &--neck {
    margin: 0 4px 0 0;
    background-color: transparent;

    .fretboard--left-handed & {
      margin: 0 0 0 4px;
    }

    .fretboard--vertical & {
      margin: 0 0 4px 0;
    }

    .fretboard--thumb & {
      margin: 0;
    }

    span {
      font-size: 12px;
      color: #cccccc;
      font-weight: bolder;
    }

    &#{$self}--active {
      border: 1px solid $color-blue;
    }
  }

  &--individual {
    &--c {
      background-color: $color-red;
      border-color: $color-red;
    }

    &--c♯, &--d♭ {
      background-color: $color-pink;
      border-color: $color-pink;

       &#{$self}--link-accidentals {
        background: linear-gradient(to right, $color-red 0%,$color-pink 50%,$color-grape 100%);

        .fretboard--vertical & {
          background: linear-gradient(to bottom, $color-red 0%,$color-pink 50%,$color-grape 100%);
        }
      }
    }

    &--d {
      background-color: $color-grape;
      border-color: $color-grape;
    }

    &--d♯, &--e♭ {
      background-color: $color-violet;
      border-color: $color-violet;

       &#{$self}--link-accidentals {
        background: linear-gradient(to right, $color-grape 0%,$color-violet 50%,$color-indigo 100%);

        .fretboard--vertical & {
          background: linear-gradient(to bottom, $color-grape 0%,$color-violet 50%,$color-indigo 100%);
        }
      }
    }

    &--e {
      background-color: $color-indigo;
      border-color: $color-indigo;
    }

    &--f {
      background-color: $color-blue;
      border-color: $color-blue;
    }

    &--f♯, &--g♭ {
      background-color: $color-cyan;
      border-color: $color-cyan;

      &#{$self}--link-accidentals {
        background: linear-gradient(to right, $color-blue 0%,$color-cyan 50%,$color-teal 100%);

        .fretboard--vertical & {
          background: linear-gradient(to bottom, $color-blue 0%,$color-cyan 50%,$color-teal 100%);
        }
      }
    }

    &--g {
      background-color: $color-teal;
      border-color: $color-teal;
    }

    &--g♯, &--a♭ {
      background-color: $color-green;
      border-color: $color-green;

       &#{$self}--link-accidentals {
        background: linear-gradient(to right, $color-teal 0%,$color-green 50%,$color-lime 100%);

        .fretboard--vertical & {
          background: linear-gradient(to bottom, $color-teal 0%,$color-green 50%,$color-lime 100%);
        }
      }
    }

    &--a {
      background-color: $color-lime;
      border-color: $color-lime;
    }

    &--a♯, &--b♭ {
      background-color: $color-yellow;
      border-color: $color-yellow;

       &#{$self}--link-accidentals {
        background: linear-gradient(to right, $color-lime 0%,$color-yellow 50%,$color-orange 100%);

        .fretboard--vertical & {
          background: linear-gradient(to bottom, $color-lime 0%,$color-yellow 50%,$color-orange 100%);
        }
      }
    }

    &--b {
      background-color: $color-orange;
      border-color: $color-orange;
    }
  }

  &--unfocused {
    background-color: $color-gray-light;

    span {
      color: $color-gray-lightest;
    }
  }

  &--dimmed {
    background-color: $color-gray-light;

    transform: translate(50%, -50%) scale(0.5);

    .fretboard--left-handed & {
      transform: translate(-50%, -50%) scale(0.5);
    }

    .fretboard--vertical & {
      transform: translate(50%, 50%) scale(0.5);
    }

    span {
      opacity: 0;
    }

    &#{$self}--neck {
      background-color: transparent;

      border: 2px solid $color-gray-light;

      transform: translate(50%, -50%) scale(0.5);

      .fretboard--left-handed & {
        transform: translate(-50%, -50%) scale(0.5);
      }

      .fretboard--vertical & {
        transform: translate(50%, 50%) scale(0.5);
      }
    }
  }
}
</style>
