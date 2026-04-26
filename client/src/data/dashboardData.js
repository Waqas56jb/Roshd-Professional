// Central data store — mirrors the original HTML demo logic
export const BASE_DRIVERS = {
  'All Branches|All Genders|All Services': {
    score: 3.8, explanatory: 72, top: 'Quality', risk: 'Speed',
    drivers: [
      { name: 'Quality',         avg: 3.6, path: 0.68, impact: 0.32, decision: 'Invest',             cls: 'dark'  },
      { name: 'Communication',   avg: 3.1, path: 0.41, impact: 0.17, decision: 'Optimize',           cls: 'amber' },
      { name: 'Price Fairness',  avg: 2.9, path: 0.29, impact: 0.13, decision: 'Selective',          cls: ''      },
      { name: 'Advisor Behavior',avg: 3.8, path: 0.36, impact: 0.10, decision: 'Maintain',           cls: ''      },
      { name: 'Speed',           avg: 1.4, path: 0.04, impact: 0.01, decision: 'Do not overinvest',  cls: 'red'   },
    ],
    invest:    ['Fund quality consistency improvements.', 'Audit first-time-right and rework patterns.', 'Make quality the main CX improvement program.'],
    optimize:  ['Improve customer communication discipline.', 'Use advisor scripts for explanation and updates.', 'Target price fairness only where complaints cluster.'],
    avoid:     ['Do not invest in speed just because its average is low.', 'Do not build one action plan for all branches.', 'Do not use averages as decision authority.'],
  },
  'Riyadh|All Genders|All Services': {
    score: 3.7, explanatory: 74, top: 'Quality', risk: 'Speed',
    drivers: [
      { name: 'Quality',         avg: 3.5, path: 0.71, impact: 0.34, decision: 'Invest',            cls: 'dark'  },
      { name: 'Advisor Behavior',avg: 3.9, path: 0.39, impact: 0.15, decision: 'Optimize',          cls: 'amber' },
      { name: 'Communication',   avg: 3.2, path: 0.31, impact: 0.11, decision: 'Selective',         cls: ''      },
      { name: 'Price Fairness',  avg: 3.0, path: 0.20, impact: 0.07, decision: 'Monitor',           cls: ''      },
      { name: 'Speed',           avg: 1.5, path: 0.03, impact: 0.01, decision: 'Do not overinvest', cls: 'red'   },
    ],
    invest:    ['Riyadh: invest in repair quality consistency.', 'Introduce quality gate before delivery.', 'Tie rework reduction to branch KPIs.'],
    optimize:  ['Coach advisors on expectation setting.', 'Improve explanation during handover.', 'Track advisor-level complaints.'],
    avoid:     ['Do not add capacity only to improve speed.', 'Avoid generic campaigns not linked to quality.', 'Do not treat Riyadh like other branches.'],
  },
  'Jeddah|All Genders|All Services': {
    score: 3.4, explanatory: 69, top: 'Communication', risk: 'Speed',
    drivers: [
      { name: 'Communication',   avg: 2.8, path: 0.62, impact: 0.26, decision: 'Invest',            cls: 'dark'  },
      { name: 'Quality',         avg: 3.4, path: 0.44, impact: 0.18, decision: 'Optimize',          cls: 'amber' },
      { name: 'Price Fairness',  avg: 2.7, path: 0.33, impact: 0.12, decision: 'Selective',         cls: ''      },
      { name: 'Advisor Behavior',avg: 3.5, path: 0.25, impact: 0.08, decision: 'Monitor',           cls: ''      },
      { name: 'Speed',           avg: 1.3, path: 0.05, impact: 0.01, decision: 'Do not overinvest', cls: 'red'   },
    ],
    invest:    ['Jeddah: invest in communication discipline.', 'Mandatory customer update checkpoints.', 'Daily advisor update compliance tracking.'],
    optimize:  ['Target quality issues in repeat complaints.', 'Use selective quality audit.', 'Improve repair explanation to customer.'],
    avoid:     ['Do not assume speed is the root cause.', 'Avoid staffing increases without driver evidence.', 'Do not overreact to low averages.'],
  },
  'Dammam|All Genders|All Services': {
    score: 3.2, explanatory: 63, top: 'Price Fairness', risk: 'Speed',
    drivers: [
      { name: 'Price Fairness',  avg: 2.5, path: 0.51, impact: 0.22, decision: 'Invest',            cls: 'dark'  },
      { name: 'Communication',   avg: 3.0, path: 0.37, impact: 0.15, decision: 'Optimize',          cls: 'amber' },
      { name: 'Quality',         avg: 3.3, path: 0.30, impact: 0.10, decision: 'Selective',         cls: ''      },
      { name: 'Advisor Behavior',avg: 3.4, path: 0.21, impact: 0.06, decision: 'Monitor',           cls: ''      },
      { name: 'Speed',           avg: 1.2, path: 0.04, impact: 0.01, decision: 'Do not overinvest', cls: 'red'   },
    ],
    invest:    ['Dammam: invest in price fairness explanation.', 'Improve estimate transparency.', 'Train advisors on value explanation.'],
    optimize:  ['Support price fairness with better communication.', 'Send clear estimates before approval.', 'Track price-related objections.'],
    avoid:     ['Do not discount blindly.', 'Do not prioritize speed.', 'Avoid across-the-board fixes.'],
  },
}

export const DEMO_CUSTOMERS = [
  { id: 'C-001', branch: 'Riyadh',  gender: 'Male',   service: 'Mechanical', quality: 4, communication: 2, price: 3, speed: 1, risk: 'Medium' },
  { id: 'C-002', branch: 'Jeddah',  gender: 'Female', service: 'Bodyshop',   quality: 2, communication: 5, price: 2, speed: 1, risk: 'High'   },
  { id: 'C-003', branch: 'Riyadh',  gender: 'Male',   service: 'Bodyshop',   quality: 5, communication: 4, price: 3, speed: 1, risk: 'Low'    },
  { id: 'C-004', branch: 'Dammam',  gender: 'Female', service: 'Mechanical', quality: 1, communication: 2, price: 5, speed: 1, risk: 'High'   },
  { id: 'C-005', branch: 'Jeddah',  gender: 'Male',   service: 'Mechanical', quality: 3, communication: 2, price: 2, speed: 1, risk: 'Medium' },
  { id: 'C-006', branch: 'Riyadh',  gender: 'Female', service: 'Bodyshop',   quality: 2, communication: 3, price: 3, speed: 1, risk: 'High'   },
  { id: 'C-007', branch: 'Dammam',  gender: 'Male',   service: 'Mechanical', quality: 3, communication: 3, price: 2, speed: 1, risk: 'Medium' },
]

export const SEGMENT_DATA = [
  { branch: 'Riyadh', top: 'Quality',       exp: '74%', impact: 'Impact .34', action: 'Improve repair consistency'     },
  { branch: 'Jeddah', top: 'Communication', exp: '69%', impact: 'Impact .26', action: 'Fix update discipline'          },
  { branch: 'Dammam', top: 'Price Fairness',exp: '63%', impact: 'Impact .22', action: 'Improve estimate explanation'   },
]

export function getData(branch, gender, service) {
  // Check if admin has saved a custom config
  try {
    const saved = localStorage.getItem('roshd_dashboard_config')
    if (saved) {
      const cfg = JSON.parse(saved)
      // Build a data object from admin config
      const adminData = {
        score: cfg.overallScore ?? 3.8,
        explanatory: cfg.explanatoryPower ?? 72,
        top: cfg.topDriver ?? 'Quality',
        risk: cfg.wasteRisk ?? 'Speed',
        drivers: (cfg.drivers || []).map(d => ({
          ...d,
          cls: d.decision === 'Invest' ? 'dark' : d.decision === 'Avoid' ? 'red' : 'amber'
        })),
        invest: cfg.invest ?? [],
        optimize: cfg.optimize ?? [],
        avoid: cfg.avoid ?? [],
        segments: cfg.segments ?? [],
        modelAlpha: cfg.modelAlpha ?? 0.88,
        modelCR: cfg.modelCR ?? 0.91,
        modelAVE: cfg.modelAVE ?? 0.64,
      }
      return adminData
    }
  } catch {}

  let d = BASE_DRIVERS[`${branch}|${gender}|${service}`]
       || BASE_DRIVERS[`${branch}|All Genders|All Services`]
       || BASE_DRIVERS['All Branches|All Genders|All Services']

  d = JSON.parse(JSON.stringify(d)) // deep clone

  if (gender === 'Female' && branch === 'All Branches') {
    d.score = 3.5; d.explanatory = 73; d.top = 'Communication'
    d.drivers = [
      { name: 'Communication',   avg: 2.9, path: 0.59, impact: 0.25, decision: 'Invest',            cls: 'dark'  },
      { name: 'Quality',         avg: 3.4, path: 0.46, impact: 0.19, decision: 'Optimize',          cls: 'amber' },
      { name: 'Advisor Behavior',avg: 3.5, path: 0.34, impact: 0.13, decision: 'Selective',         cls: ''      },
      { name: 'Price Fairness',  avg: 2.8, path: 0.25, impact: 0.08, decision: 'Monitor',           cls: ''      },
      { name: 'Speed',           avg: 1.3, path: 0.05, impact: 0.01, decision: 'Do not overinvest', cls: 'red'   },
    ]
    d.invest = ['Female segment: communication is the strongest driver.', 'Improve proactive updates and clarity.', 'Standardize advisor explanation before and after service.']
  }
  if (gender === 'Male' && branch === 'All Branches') {
    d.score = 3.9; d.explanatory = 70; d.top = 'Quality'
    d.drivers = [
      { name: 'Quality',         avg: 3.7, path: 0.64, impact: 0.29, decision: 'Invest',            cls: 'dark'  },
      { name: 'Price Fairness',  avg: 3.0, path: 0.38, impact: 0.16, decision: 'Optimize',          cls: 'amber' },
      { name: 'Communication',   avg: 3.3, path: 0.32, impact: 0.11, decision: 'Selective',         cls: ''      },
      { name: 'Advisor Behavior',avg: 3.9, path: 0.28, impact: 0.08, decision: 'Monitor',           cls: ''      },
      { name: 'Speed',           avg: 1.5, path: 0.03, impact: 0.01, decision: 'Do not overinvest', cls: 'red'   },
    ]
  }
  if (service === 'Bodyshop') {
    d.score        = Math.max(1, d.score - 0.2)
    d.explanatory  = Math.max(55, d.explanatory - 3)
    d.drivers[0].impact = Math.min(0.38, d.drivers[0].impact + 0.03)
  }
  return d
}
