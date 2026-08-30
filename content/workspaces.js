/*
  Project workspace registry.
  Only public and unlisted projects belong in this file because it ships to the browser.
  Private client data stays outside the static build and requires protected hosting.
*/
window.workspaces = [
  {
    slug: 'soolabay-growth-system',
    title: 'SOOLABAY',
    subtitle: 'E-COMMERCE GROWTH SYSTEM',
    industry: 'HAIRCARE / E-COMMERCE',
    visibility: 'unlisted',
    period: 'WORKSPACE',
    summary: 'A decision space connecting traffic, website conversion, confirmed orders, cancellation rate, and revenue quality.',
    sections: [
      { label: 'BRIEF', title: 'The question', body: 'Where does the funnel lose quality between the first visit and realised revenue?' },
      { label: 'STRATEGY', title: 'The system', body: 'Treat traffic, website behaviour, ordering, confirmation, and cancellation as one connected acquisition system.' },
      { label: 'DATA ROOM', title: 'What belongs here', body: 'Add verified dashboard screenshots, weekly reports, creative test logs, and order-quality analysis.' },
      { label: 'NEXT ACTIONS', title: 'Working log', body: '[ ADD CURRENT PRIORITIES, OWNER, STATUS, AND NEXT REVIEW DATE ]' }
    ],
    metrics: [
      ['DATA AVAILABLE', 'ON REQUEST'],
      ['VERIFIED METRIC', 'NEEDED'],
      ['FUNNEL', 'TRAFFIC → REVENUE QUALITY']
    ],
    assets: [
      'ADS MANAGER / ADD SCREENSHOT',
      'WEBSITE FUNNEL / ADD SCREENSHOT',
      'ORDER QUALITY / ADD REPORT',
      'CREATIVE TESTING / ADD MATRIX'
    ],
    share: {
      title: 'SOOLABAY — Growth workspace',
      expires: '',
      note: 'Shared workspace. Do not redistribute campaign material without approval.'
    }
  }
];
