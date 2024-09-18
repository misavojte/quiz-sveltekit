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
 * @property {string} color - The color of the heart emoji.
 * @property {string} description - The description of the result.
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
      text: 'Human Resources',
      color: '#d6509e',
        description: 'Vhodné pro lidi, které zajímá community management, starost o členy a teambuildingování.'
    },
    212: {
      type: 'end',
      text: 'Partnerships',
      color: '#ff5757',
        description: 'Vhodné pro lidi, kteří chtějí řešit navazování spoluprací a získávání partnerů pro spolek a jeho aktivity.'
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
        text: 'University Affairs',
        color: '#5ce1e6',
        description: "Vhodná pro ty, kteří chtějí řešit univerzitní spolupráci a jednat s katedrami, děkanátem a rektorátem."
    },
    312: {
        type: 'end',
        text: 'Finance',
        description: "Vhodná pro lidi, které zajímají granty, fundraising a vnitřní chod spolku.",
        color: '#cb6ce6'
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
        text: 'Social Media',
        description: "Vhodná pro lidi, které zajímá tvorba pro sociální sítě, grafika, content marketing, natáčení, focení apod.",
        color: '#38b6ff'
    },
    322: {
        type: 'end',
        text: 'Events Management',
        description: "Vhodná pro lidi které baví pomáhat organizovat a vymýšlet spolkové akce.",
        color: '#7ed957'
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