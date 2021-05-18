import { MenuItem } from "../interfaces/flatListMenuItem-Interface";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'Switch'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'Alert'
    },
    {
        name: 'Text Input',
        icon: 'document-text-outline',
        component: 'TextInput'
    },
    {
        name: 'Pull to Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefresh'
    }
]