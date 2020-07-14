import { action } from '@storybook/addon-actions'
import { withKnobs, number, array, boolean, select, text } from '@storybook/addon-knobs'

import Fretboard from '../components/Fretboard.vue'
import Meta from '../components/Meta.vue'

const decoratorVueTemplate = () => ({ template: `<div style="text-align:center; margin-top: 25px;"><story/></div>` })

export default {
  component: Fretboard,
  title: 'Neighbours',
  decorators: [withKnobs, decoratorVueTemplate]
}

export const Default = () => ({
  components: { Fretboard },
  props: {
    thumb: {
      default: boolean('Thumb version', false, 'Layout')
    },
    leftHanded: {
      default: boolean('Left handed', false, 'Layout')
    },
    orientation: {
      default: select('Orientation', ['horizontal', 'vertical'], 'horizontal', 'Layout')
    },
    length: {
      default: 3
    },
    startingFret: {
      default: 6
    },
    inlays: {
      default: select('Inlays', ['', 'circles', 'trapezoids', 'rectangles'], 'circles', 'Layout')
    },
    tuning: {
      default: text('Tuning', 'e a d g', 'Settings')
    },
    plot: {
      default: ['e a b', 'd# e f', 'a']
    },
    display: {
      default: select('Display', ['notes', 'intervals'], 'notes', 'Notes')
    },
    highlightRoot: {
      default: boolean('Highlight root note', true, 'Notes')
    },
    groupedByColor: {
      default: boolean('Notes grouped by color', true, 'Notes')
    },
    linkAccidentals: {
      default: boolean('Link accidentals with a gradient', false, 'Notes')
    }
  },
  template: `<Fretboard @click.native="action" v-bind="{ display, thumb, leftHanded, orientation, length, startingFret, tuning, groupedByColor, highlightRoot, linkAccidentals, inlays, plot }"></Fretboard>`,
  methods: { action: action('clicked') }
})
