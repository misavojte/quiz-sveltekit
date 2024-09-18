/**
 * @typedef {Object} StartScreen
 * @property {'start'} type - The type of the screen (start).
 * @property {string} text - The text to display.
 * @property {number} next - The index of the next screen to navigate to.
 */

/**
 * @typedef {Object} DecisionScreen
 * @property {'decision'} type - The type of the screen (decision).
 * @property {string} text - The decision question.
 * @property {Array<{text: string, next: number}>} options - The options to choose from, each with its corresponding next screen index.
 */

/**
 * @typedef {Object} EndScreen
 * @property {'end'} type - The type of the screen (end).
 * @property {string} text - The text to display as the final result.
 */

/**
 * @typedef {StartScreen | DecisionScreen | EndScreen} QuizScreen
 */

/** @type {Record<number, QuizScreen>} */
export const screens = {
    0: {
      type: 'start',
      text: 'Do jakého oddělení Faktorů patříš?',
      next: 1
    },
    1: {
      type: 'decision',
      text: 'Chci raději pracovat...',
      options: [
        { text: 'S lidmi', next: 2 },
        { text: 'Na projektech', next: 3 }
      ]
    },
    2: {
      type: 'decision',
      text: 'Považuješ se za extrovertní osobu?',
      options: [
        { text: 'Ano', next: 21 },
        { text: 'Ne', next: 22 }
      ]
    },
    21: {
      type: 'decision',
      text: 'Vadí ti komunikace s cizími lidmi?',
      options: [
        { text: 'Ano', next: 211 },
        { text: 'Ne', next: 212 }
      ]
    },
    211: {
      type: 'end',
      text: 'Budeš super v Human Resources!'
    },
    212: {
      type: 'end',
      text: 'Budeš super v Partnerships!'
    },
    3: {
      type: 'decision',
      text: 'Baví mě více',
        options: [
            { text: 'Office práce', next: 31 },
            { text: 'Kreativní práce', next: 32 }
        ]
    },
    31: {
        type: 'decision',
        text: 'Jsem spíše...',
        options: [
            { text: 'Diplomat', next: 311 },
            { text: 'Stratég', next: 312 }
        ]
    },
    311: {
        type: 'end',
        text: 'Budeš super v University Affairs!'
    },
    312: {
        type: 'end',
        text: 'Budeš super ve Financích!'
    },
    32: {
        type: 'decision',
        text: 'Vystupuješ rád/a před kamerou?',
        options: [
            { text: 'Ano', next: 321 },
            { text: 'Ne', next: 322 }
        ]
    },
    321: {
        type: 'end',
        text: 'Budeš super v Social Media!'
    },
    322: {
        type: 'end',
        text: 'Budeš super v Events & PR!'
    },
    22: {
        type: 'decision',
        text: 'Sleduješ rád/a trendy?',
        options: [
            { text: 'Ano', next: 321 },
            { text: 'Ne', next: 322 }
        ]
    },
};