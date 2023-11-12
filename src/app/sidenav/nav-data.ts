import { INavbarData } from "./helper";

  export const navbarData: INavbarData[] = [
    {
      routeLink: 'control',
      icon: 'fa-solid fa-gauge-high',
      label: 'Control System',
      expanded: false,
    },
    {
      routeLink: 'dashboard',
      icon: 'ri-dashboard-fill',
      label: 'Dashboard',
      expanded: false,
    },

    {
      routeLink: 'machines',
      icon: 'fa-solid fa-layer-group',
      label: 'Machines',
      expanded: false,
    },
    {
      routeLink: 'planning',
      icon: 'fa-solid fa-bell',
      label: 'Planning',
      expanded: false,
    },

    {
      routeLink: 'logout',
      icon: 'fa fa-right-from-bracket',
      label: 'Logout',
      expanded: false,


    },

  ];
