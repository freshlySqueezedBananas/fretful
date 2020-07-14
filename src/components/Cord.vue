<template>
  <ul class="string">
    <Fret :isMuted="plot.includes('x')">
      <Note
        :note="string"
        :isActive="plot.includes('r')"
        v-bind="{ instance }"
        isNeck
      />
    </Fret>
    <Fret
      v-for="(note, index) of chromaticScale"
      :key="index"
      :number="startingFret + index"
      :isHighlighted="plotContainsNote(note)"
      v-bind="{ note }"
    >
      <Note
        v-bind="{
          instance,
          root,
          note,
          groupedByColor,
          highlightRoot,
          linkAccidentals,
          display
        }"
        :highlight="note === highlight || note.includes(highlight)"
        :isRoot="root === note"
        :plotNote="plotNote(note)"
        :finger="plotFinger(note)"
        v-if="plotContainsNote(note)"
      />
    </Fret>
  </ul>
</template>

<script>
import Fret from './Fret';
import Note from './Note';

export default {
  name: 'String',
  data() {
    return {
      notes: [
        'a',
        [
          'a#',
          'bb'
        ],
        'b',
        'c',
        [
          'c#',
          'db'
        ],
        'd',
        [
          'd#',
          'eb'
        ],
        'e',
        'f',
        [
          'f#',
          'gb'
        ],
        'g',
        [
          'g#',
          'ab'
        ]
      ],
      intervals: [
        'a',
        [
          'a#',
          'bb'
        ],
        'b',
        'c',
        [
          'c#',
          'db'
        ],
        'd',
        [
          'd#',
          'eb'
        ],
        'e',
        'f',
        [
          'f#',
          'gb'
        ],
        'g',
        [
          'g#',
          'ab'
        ]
      ],
      chords: {
        major: 'r 3 5',
        minor: 'r 3b 5',
        diminished: 'r 3b 5b',
        augmented: 'r 3 5#'
      },
      scales: {
        major: 'r 2 3 4 5 6 7'
      }
    }
  },
  props: {
    instance: {
      type: Number
    },
    highlight: {
      type: Boolean,
      default: false
    },
    string: {
      type: String,
      default: 'e'
    },
    root: {
      type: String,
      default: 'c'
    },
    length: {
      type: Number,
      default: 12
    },
    startingFret: {
      type: Number,
      default: 1
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
    plot: {
      type: String,
      default: 'c d e f g a b'
    },
    display: {
      type: String,
      default: 'notes'
    }
  },
  computed: {
    plotNotes() {
      return this.plot.split(' ');
    },
    chromaticScale() {
      const octaves = Math.ceil(this.length / 12);
      const startsWithAccidental = this.string.length === 2;

      const index = this.notes.findIndex(n => startsWithAccidental ? String(n).includes(this.string) : n === this.string);

      const indexDisplaced = index + this.startingFret === this.notes.length ? 0 : index + this.startingFret;

      const base = [...this.notes.slice(indexDisplaced), ...this.notes.slice(0, indexDisplaced)];
      const scale = [...base];

      if (octaves > 1) {
        for (let o = 0; o < octaves; o++) {
          scale.push(...base);
        }
      }

      return scale.splice(0, this.length);
    }
  },
  methods: {
    plotContainsNote(note) {
      const isNoteAccidental = Array.isArray(note);

      return this.plotNotes.some(_n => {
        const n = _n.split(':')[0];
        const isPlottedNoteAccidental = n.length === 2;

        if (isNoteAccidental && isPlottedNoteAccidental) {
          return note.includes(n);
        }

        return n === note;
      });
    },
    plotNoteIndex(note) {
      const isNoteAccidental = Array.isArray(note);

      return this.plotNotes.findIndex(_n => {
        const n = _n.split(':')[0];
        const isPlottedNoteAccidental = n.length === 2;

        if (isNoteAccidental && isPlottedNoteAccidental) {
          return note.includes(n);
        }

        return n === note;
      });
    },
    plotNote(note) {
      const plotNoteIndex = this.plotNoteIndex(note);

      return this.plotNotes[plotNoteIndex].split(':')[0];
    },
    plotFinger(note) {
      const plotNoteIndex = this.plotNoteIndex(note);
      const finger = this.plotNotes[plotNoteIndex].split(':')[1];

      return Number(finger) || null;
    }
  },
  components: {
    Fret,
    Note
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.string {
  display: inline-flex;
  position: relative;

  height: $string-height;

  padding: 0;
  margin: 0;

  list-style-type: none;

  .fretboard--thumb & {
    height: $thumb-string-height;
  }

  .fretboard--left-handed & {
    flex-direction: row-reverse;
  }

  .fretboard--vertical & {
    height: initial;
    width: $string-height;

    flex-direction: column;
  }

  .fretboard--vertical.fretboard--thumb & {
    width: $thumb-string-height;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: $fret-initial-width + $fret-initial-border-width;
    right: $fret-last-border-width;
    height: $string-width;
    background-color: $color-gray-light;

    z-index: 1;

    .fretboard--thumb & {
      left: $thumb-fret-initial-width + $thumb-fret-initial-border-width;
      right: $thumb-fret-last-border-width;
    }

    .fretboard--left-handed & {
      left: $fret-last-border-width;
      right:  $fret-initial-width + $fret-initial-border-width;
    }

    .fretboard--thumb.fretboard--left-handed & {
      left: $thumb-fret-last-border-width;
      right: $thumb-fret-initial-width + $thumb-fret-initial-border-width;
    }

    .fretboard--vertical & {
      top: $fret-initial-width + $fret-initial-border-width;
      left: 50%;
      bottom: $fret-last-border-width;
      right: initial;
      width: $string-width;
      height: auto;
      transform: translateX(-50%);
    }

    .fretboard--vertical.fretboard--thumb & {
      top: $thumb-fret-initial-width + $thumb-fret-initial-border-width;
      left: 50%;
      bottom: $thumb-fret-last-border-width;
      right: initial;
    }
  }
}
</style>
