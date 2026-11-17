export interface NavDataItem {
    title: string,
    href: string,
}


export const NAV_LINKS: NavDataItem[] = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title:'Markets',
        href:'/markets'
    },
    {
        title: 'Converter',
        href: '/converter'
    },
    {
        title:'About',
        href: '/about'
    }
]