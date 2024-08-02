export interface Project {
    title: string;
    description: string;
    link: string;
    images: string[]
}

export const FinishedProj: Project[] = [
    {
        title: 'Fractal Plant Generator',
        description: "Basic python script meant to generate different images based on a string input",
        link: 'https://github.com/patjagielski/Fractal-Plant-Generator',
        images: [
            '/projectImages/FractalPlant/FPG1.png', 
            '/projectImages/FractalPlant/FPG2.png', 
            '/projectImages/FractalPlant/FPG3.png', 
            '/projectImages/FractalPlant/FPG4.png', 
            '/projectImages/FractalPlant/FPG5.png'
        ]
    },
    {
        title: 'Recipe Search Engine',
        description: "React App meant to find some tasty treats to cook/bake up",
        link: 'https://github.com/patjagielski/Recipe_SearchEngine',
        images: [
            '/projectImages/RecipeSearch/RSE1.png',
            '/projectImages/RecipeSearch/RSE2.png',
            '/projectImages/RecipeSearch/RSE3.png'
        ]
    },
    {
        title: 'React Course',
        description: "Udemy Course which taught me the basics of React which I have grown from",
        link: 'https://www.udemy.com/certificate/UC-1b5276b8-c12b-4724-b501-6358d698d6f2/p',
        images: [
            '/projectImages/ReactCourse/RC.png'
        ]
    }
]

export const InProgressProj: Project[] = [
    {
        title: 'Vue Course',
        description: 'Udemy Vue Course meant to teach me Vue.js for personal/professional use',
        link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/?couponCode=KEEPLEARNING',
        images: ['/projectImages/VueCourse/VC.png']
    },
    {
        title: 'Game Development',
        description: 'Private project where I am developing my own game with some friends ',
        link: 'https://timelesstalesinteractive.com/',
        images: ['/projectImages/TTI/TTI.png']
    },
     {
        title: 'ThreeJs Course',
        description: 'Learning and understanding how ThreeJs works on a higher level alone with GraphQL by Bruno Simon',
         link: 'https://threejs-journey.com/',
         images: [
            '/projectImages/ThreeJSCourse/TJSC1.png',
            '/projectImages/ThreeJSCourse/TJSC2.png',
            '/projectImages/ThreeJSCourse/TJSC3.png',
            '/projectImages/ThreeJSCourse/TJSC4.png',
            '/projectImages/ThreeJSCourse/TJSC5.png'
        ]
    }
]
