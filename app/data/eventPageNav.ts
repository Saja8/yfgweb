export interface EventPageNavItem {
  href: string;
  label: string;
}

export const YFG_PAGE_NAV_ITEMS: EventPageNavItem[] = [
  { href: '/yfg', label: 'Overview' },
  { href: '/yfg/registration', label: 'Registration' },
];

export const HMDS_PAGE_NAV_ITEMS: EventPageNavItem[] = [
  { href: '/hmds', label: 'Overview' },
  { href: '/hmds/registration', label: 'Registration' },
];
