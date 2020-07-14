export const Notes = [
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
];

const intervals = [
  'r',
  [
    '1#',
    '1b'
  ],
  '2',
  [
    '2#',
    '3b'
  ],
  '3',
  '4',
  [
    '4#',
    '5b'
  ],
  '5',
  [
    '5#',
    '6b'
  ],
  '6',
  [
    '6#',
    '7b'
  ],
  '7'
];

// const chords = {
//   major: 'r 3 5',
//   minor: 'r 3b 5',
//   diminished: 'r 3b 5b',
//   augmented: 'r 3 5#'
// };

const scales = {
  blues: 'r 3b 4 5b 5 7b',
  major: 'r 2 3 4 5 6 7'
};

function _intervalsToIndexes(progression) {
  const scaleArr = progression.split(' ');
  const indexes = [];

  scaleArr.forEach(interval => {
    const startsWithAccidental = interval.length === 2;
    indexes.push(intervals.findIndex(i => startsWithAccidental ? String(i).includes(interval) : i === interval));
  });

  return indexes;
}

export const getChromaticScale = (root) => {
  const startsWithAccidental = root.length === 2;

  const index = Notes.findIndex(n => startsWithAccidental ? String(n).includes(root) : n === root);

  return [...Notes.slice(index), ...Notes.slice(0, index)]
};

export const getIntervalFromRoot = (root, __note) => {
  const chromatic = getChromaticScale(root);
  const note = Array.isArray(__note) ? __note[0] : __note;
  const isAccidental = note.length === 2;

  const index = chromatic.findIndex(n => isAccidental ? Array.isArray(n) && n.includes(note) : n === note);

  return intervals[index];
};

export const Scale = (root) => {
  return {
    get chromatic() {
      const startsWithAccidental = root.length === 2;
    
      const index = Notes.findIndex(n => startsWithAccidental ? String(n).includes(root) : n === root);
    
      return [...Notes.slice(index), ...Notes.slice(0, index)];
    },
    get blues() {
      return _intervalsToIndexes(scales.blues).map(i => this.chromatic[i]);
    },
    get major() {
      return _intervalsToIndexes(scales.major).map(i => this.chromatic[i]);
    }
  }
};

const _resolveNote = (_note, _accidental) => {
  if (Array.isArray(_note)) {
    const accidental = _accidental === 'sharp' || _accidental === '#' ? 0 : 1;

    return _note[accidental];
  }

  return _note;
};

function Note(_note) {
  if (this instanceof Note) {
    const note = _note.toLowerCase(),
          isAccidental = note.length === 2,
          noteIndex =  Notes.findIndex(n => isAccidental ? String(n).includes(note) : n === note);

    this.note = Notes[noteIndex] || null;

    this.__ = {
      input: _note,
      chromatic: Scale(note).chromatic
    };
  } else {
    return new Note(_note);
  }
}

Note.prototype.sharpen = function(_steps = 0) {
  const octaves = Math.floor(_steps / Notes.length + 1);
  const octaveIndex = _steps - (Notes.length * (octaves - 1));

  this.note = _resolveNote(this.__.chromatic[octaveIndex], '#');

  return this;
}

Note.prototype.flatten = function(_steps = 0) {
  const octaves = Math.ceil(_steps / Notes.length);
  const octaveIndex = Notes.length - (_steps - (Notes.length * (octaves - 1)));

  this.note = _resolveNote(this.__.chromatic[octaveIndex], 'b');

  return this;
}

Note.prototype.derive = function() {
  return {
    get triad() {
      return this.flatten();
    }
  }
}

Note.prototype.test = {
  get triad() {
    return 'teste';
  },
  get ya() {
    return this.note;
  }
}

export const Notex = (_note) => {
  const note = _note.toLowerCase();
  const chromatic = Scale(note).chromatic;

  return {
    sharpen(_steps = 0) {
      const octaves = Math.floor(_steps / Notes.length + 1);
      const octaveIndex = _steps - (Notes.length * (octaves - 1));

      return _resolveNote(chromatic[octaveIndex], '#');
    },
    flatten(_steps = 0) {
      const octaves = Math.ceil(_steps / Notes.length);
      const octaveIndex = Notes.length - (_steps - (Notes.length * (octaves - 1)));

      return _resolveNote(chromatic[octaveIndex], 'b');
    },
    get sharp() {
      return this.sharpen(1);
    },
    get flat() {
      return this.flatten(1);
    },
    get scales() {
      return Scale(note);
    },
    get triad() {
      return {
        major: 'yes',
        minor: 'no'
      }
    },
    get chord() {
      return {
        major: 'yes',
        minor: 'no'
      }
    }
  }
};