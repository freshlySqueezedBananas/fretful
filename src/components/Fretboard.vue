<template>
  <div :class="['fretboard', { 
    'fretboard--left-handed' : leftHanded,
    'fretboard--thumb' : thumb,
    'fretboard--vertical' : orientation === 'vertical' 
    }]">
    <div class="board">
      <div class="board-wrapper">
        <Inlays v-bind="{ inlays, octaves }" v-if="!thumb"/>
        <Cord
          v-for="(string, index) in strings"
          :key="index"
          :plot="Array.isArray(plot) ? plotPerString[index] : plot"
          v-bind="{ instance, display, string, length, startingFret, root: plotRoot, groupedByColor, highlight, highlightRoot, linkAccidentals }"
        />
      </div>
      <ul class="fret-numbers">
        <template>
          <li data-octave-index="0"><span>0</span></li>
          <li v-for="index in length" :key="index" :data-octave-index="getOctaveIndex(index + (startingFret - 1))"><span>{{ index + (startingFret - 1) }}</span></li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import Inlays from './Inlays';
import Cord from './Cord';

export default {
  name: 'board',
  props: {
    leftHanded: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'horizontal'
    },
    display: {
      type: String,
      default: 'notes'
    },
    length: {
      type: Number,
      default: 12
    },
    startingFret: {
      type: Number,
      default: 1
    },
    tuning: {
      type: String,
      default: 'e a d g'
    },
    highlight: {
      type: Boolean,
      default: false
    },
    highlightRoot: {
      type: Boolean,
      default: true
    },
    groupedByColor: {
      type: Boolean,
      default: false
    },
    linkAccidentals: {
      type: Boolean,
      default: false
    },
    inlays: {
      type: String,
      default: 'circles'
    },
    plot: {
      type: [ Array, String ],
      default: 'c d e f g a b'
    },
    thumb: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    instance() {
      return this._uid;
    },
    octaves() {
      return Math.ceil(this.length / 12);
    },
    strings() {
      if (!this.tuning) {
        return [];
      }

      return this.tuning.split(' ').reverse();
    },
    plotPerString() {
      if (Array.isArray(this.plot)) {
        return [...this.plot, ...Array(this.strings.length - this.plot.length).fill('')].reverse();
      }

      return this.plot;
    },
    plotRoot() {
      if (Array.isArray(this.plot)) {
        return this.plot.find(p => p).split(' ')[0].split(':')[0];
      }

      return this.plot.split(' ')[0].split(':')[0];
    }
  },
  methods: {
    getOctaveIndex(fretNumber) {
      return fretNumber - 12 * Math.floor((fretNumber - 1)/12);
    }
  },
  components: {
    Inlays,
    Cord
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.board {
  position: relative;
  display: inline-flex;
  flex-direction: column;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: content-box;

  z-index: 0;

  .fretboard--vertical & {
    flex-direction: row-reverse;
  }
}

.board-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .fretboard--vertical & {
    flex-direction: row-reverse;
  }

  .fretboard--vertical.fretboard--left-handed & {
    flex-direction: row;
  }
}

.fret-numbers {
  display: flex;
  list-style: none;
  padding: 0;
  margin: $fret-numbers-margin 0 0 0;
  font-size: $fret-numbers-font-size;
  box-sizing: content-box;

  .fretboard--left-handed & {
    flex-direction: row-reverse;
  }

  .fretboard--vertical & {
    flex-direction: column;
    margin: 0 $fret-numbers-margin 0 0;
  }

  .fretboard--thumb & {
    margin: $thumb-fret-numbers-margin 0 0 0;
  }

  .fretboard--thumb.fretboard--vertical & {
    margin: 0 $thumb-fret-numbers-margin 0 0;
  }

  > li {
    display: inline-flex;
    width: $fret-regular-width + $fret-regular-border-width;
    align-items: center;
    justify-content: flex-end;
    box-sizing: content-box;

    color: $color-gray-lighter;
    font-size: $fret-numbers-font-size;

    &:first-of-type {
      width: $fret-initial-width + $fret-initial-border-width;
      opacity: 1;

      .fretboard--thumb & {
        width: $thumb-fret-initial-width + $thumb-fret-initial-border-width;
      }

      .fretboard--vertical & {
        width: initial;
        height: $fret-initial-width + $fret-initial-border-width;
      }

      .fretboard--vertical.fretboard--thumb & {
        height: $thumb-fret-initial-width + $thumb-fret-initial-border-width;
      }
    }

    &[data-octave-index='0'],
    &[data-octave-index='5'],
    &[data-octave-index='7'],
    &[data-octave-index='9'],
    &[data-octave-index='12'] {
      color: $color-gray-light;
    }

    .fretboard--thumb & {
      width: $thumb-fret-regular-width + $thumb-fret-regular-border-width;
      opacity: 0;
      font-size: $thumb-fret-numbers-font-size;

      &:nth-of-type(2) {
        color: $color-gray-light;
        opacity: 1;
      }
    }

    .fretboard--left-handed & {
      justify-content: flex-start;
    }

    .fretboard--vertical & {
      width: initial;
      height: $fret-regular-width + $fret-regular-border-width;
      align-items: flex-end;
      justify-content: center;
    }

    .fretboard--vertical.fretboard--thumb & {
      height: $thumb-fret-regular-width + $thumb-fret-regular-border-width;
    }
  }
}
</style>
