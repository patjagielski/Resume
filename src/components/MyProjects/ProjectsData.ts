export interface Project {
    title: string;
    description: string;
    link: string;
}

export const FinishedProj: Project[] = [
    {
        title: 'Fractal Plant Generator',
        description: "Basic python script meant to generate different images based on a string input",
        link: ''
    },
    {
        title: 'Recipe Search Engine',
        description: "React App meant to find some tasty treats to cook/bake up",
        link: ''
    },
    {
        title: 'React Course',
        description: "Udemy Course which taught me the basics of React which I have grown from",
        link: ''
    }
]

export const InProgressProj: Project[] = [
    {
        title: 'Vue Course',
        description: 'Udemy Vue Course meant to teach me Vue.js for personal/professional use',
        link: ''
    },
    {
        title: 'Game Development',
        description: 'Private project where I am developing my own game with some friends ',
        link: ''
    },
     {
        title: 'ThreeJs Course',
        description: 'Learning and understanding how ThreeJs works on a higher level alone with GraphQL',
        link: ''
    }
]
