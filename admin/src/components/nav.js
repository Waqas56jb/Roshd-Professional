import {
  LayoutDashboard, Map, GitBranch, Briefcase, Upload, Filter,
  SlidersHorizontal, LineChart, ClipboardList, FlaskConical, Workflow,
  BadgeCheck, Users, ScrollText, Settings,
} from 'lucide-react';

/** Sidebar navigation, grouped. Each item maps to a route. */
export const NAV_GROUPS = [
  {
    title: 'Overview',
    items: [{ to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true }],
  },
  {
    title: 'Masters',
    items: [
      { to: '/regions', label: 'Regions', icon: Map },
      { to: '/branches', label: 'Branches', icon: GitBranch },
      { to: '/services', label: 'Services', icon: Briefcase },
    ],
  },
  {
    title: 'Survey Data',
    items: [{ to: '/survey', label: 'Survey Upload', icon: Upload }],
  },
  {
    title: 'Dashboard Content',
    items: [
      { to: '/filters', label: 'Filter Manager', icon: Filter },
      { to: '/model-values', label: 'Model Values', icon: SlidersHorizontal },
      { to: '/executive', label: 'Executive Text', icon: LineChart },
      { to: '/questionnaire', label: 'Questionnaire', icon: ClipboardList },
      { to: '/pilot', label: 'Pilot Test', icon: FlaskConical },
      { to: '/measurement', label: 'Measurement Model', icon: Workflow },
      { to: '/model-quality', label: 'Model Quality', icon: BadgeCheck },
    ],
  },
  {
    title: 'System',
    items: [
      { to: '/users', label: 'Users', icon: Users },
      { to: '/audit', label: 'Audit Log', icon: ScrollText },
      { to: '/settings', label: 'Settings', icon: Settings },
    ],
  },
];

/** Flat lookup for page titles. */
export const ROUTE_TITLES = NAV_GROUPS.flatMap((g) => g.items).reduce((m, i) => {
  m[i.to] = i.label;
  return m;
}, {});
