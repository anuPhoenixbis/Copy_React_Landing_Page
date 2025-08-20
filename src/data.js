import tour_1 from './images/tour-1.jpeg';
import tour_2 from './images/tour-2.jpeg';
import tour_3 from './images/tour-3.jpeg';
import tour_4 from './images/tour-4.jpeg';
import tour_5 from './images/tour-5.jpeg';
import tour_6 from './images/tour-6.jpeg';

export const pageLinks = [
    { id: 1, href: '#home' , text: 'home' },
    { id: 2, href: '#about' , text: 'about' },
    { id: 3, href: '#services' , text: 'services' },
    { id: 4, href: '#tours' , text: 'tours' }

]
//here we are storing the elements that will change the page links ,i.e., we will setup a common component
//and the data here will be used to render the links dynamically using that singular component
export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' } // changed to a valid icon
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    }
]

export const tours = [
    {
        id: 1,
        image: tour_1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: '6 days',
        price: '$2100'
    },
    {
        id: 2,
        image: tour_2,
        date: 'october 1th, 2020',
        title: 'Best of Java',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Indonesia',
        duration: '11 days',
        price: '$1400'
    },
    {
        id: 3,
        image: tour_3,
        date: 'september 15th, 2020',
        title: 'Explore Hong Kong',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Hong Kong',
        duration: '8 days',
        price: '$5000'
    },
    {
        id: 4,
        image: tour_4,
        date: 'december 5th, 2019',
        title: 'Kenya Highlights',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Kenya',
        duration: '20 days',
        price: '$3300'
    },
    {
        id: 5,
        image: tour_5,
        date: 'january 15th, 2021',
        title: 'Alaskan Cruise',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Alaska',
        duration: '14 days',
        price: '$2800'
    },
    {
        id: 6,
        image: tour_6,
        date: 'march 10th, 2021',
        title: 'Grand Canyon Adventure',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'USA',
        duration: '7 days',
        price: '$1900'
    }
]