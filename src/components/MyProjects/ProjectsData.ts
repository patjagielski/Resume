export interface Project {
    title: string;
    description: string;
    link: string;
}

export const FinishedProj: Project[] = [
    {
        title: 'Fractal Plant Generator',
        description: "Basic python script meant to generate different images based on a string input",
        link: 'https://github.com/patjagielski/Fractal-Plant-Generator'
    },
    {
        title: 'Recipe Search Engine',
        description: "React App meant to find some tasty treats to cook/bake up",
        link: 'https://github.com/patjagielski/Recipe_SearchEngine'
    },
    {
        title: 'React Course',
        description: "Udemy Course which taught me the basics of React which I have grown from",
        link: 'https://github.com/patjagielski/React-Course-Budget-App'
    }
]

export const InProgressProj: Project[] = [
    {
        title: 'Vue Course',
        description: 'Udemy Vue Course meant to teach me Vue.js for personal/professional use',
        link: 'https://github.com/patjagielski/VueCourse'
    },
    {
        title: 'Game Development',
        description: 'Private project where I am developing my own game with some friends ',
        link: 'https://timelesstalesinteractive.com/'
    },
     {
        title: 'ThreeJs Course',
        description: 'Learning and understanding how ThreeJs works on a higher level alone with GraphQL by Bruno Simon',
         link: 'https://github.com/patjagielski/three-js'
    }
]
