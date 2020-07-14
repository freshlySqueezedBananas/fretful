import { action } from '@storybook/addon-actions'
import { withKnobs, number, array, boolean, select, text } from '@storybook/addon-knobs'

import Fretboard from '../components/Fretboard.vue'
import Meta from '../components/Meta.vue'

const decoratorVueTemplate = () => ({ template: `<div style="text-align:center; margin-top: 25px;"><story/></div>` })

export default {
  component: Fretboard,
  title: 'Scales',
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
      default: number('Length', 12, {
        range: true,
        min: 1,
        max: 24,
        step: 1,
     }, 'Layout')
    },
    startingFret: {
      default: number('Starting fret', 1, {
        range: true,
        min: 1,
        max: 24,
        step: 1,
     }, 'Layout')
    },
    inlays: {
      default: select('Inlays', ['', 'circles', 'trapezoids', 'rectangles'], 'circles', 'Layout')
    },
    tuning: {
      default: text('Tuning', 'e a d g', 'Settings')
    },
    plot: {
      default: text('Plot', 'c c# d d# e f f# g g# a a# b', 'Settings')
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

export const MetaWrapper = () => ({
  components: { Meta, Fretboard },
  template: `
    <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
      <Meta title="C<sup>△</sup>">
        <Fretboard
          tuning="e a d g"
          :length="12"
          :plot="['c', 'e g', 'c']"
          thumb
        />
      </Meta>
      <Meta title="E<em>m</em><sup>7</sup>">
        <Fretboard
          tuning="e a d g"
          :length="12"
          :plot="['', 'e', 'g b', 'd e']"
          thumb
        />
      </Meta>
      <Meta title="F<sup>△</sup>">
        <Fretboard
          tuning="e a d g"
          :length="12"
          :plot="['', 'f', 'a c', 'f']"
          thumb
        />
      </Meta>
      <Meta title="G<sup>7</sup>">
        <Fretboard
          tuning="e a d g"
          :length="12"
          :plot="['g', 'b d', 'f g']"
          thumb
        />
      </Meta>
    </div>
  `
});
