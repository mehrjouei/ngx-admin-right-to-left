import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'داشبورد',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
     {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  }
];
