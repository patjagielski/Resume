const Resume = () => {

    const Mailto = () => {
        const email = 'jagielskipat@gmail.com'
        const subject = 'From Portfolio Website'
        const body = 'Hello...'
        return (
            <a className="lg:px-4 px-2 text-pink-500 shadow-white shadow-side-line text-blue-500" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>Contact me</a>
        );
    };

    return (
        <div className="m-10">
            <div className="flex items-center justify-between shadow-line shadow-white my-5 lg:pb-4">
                <h1 className="text-xl lg:text-4xl">About me</h1>
                <button className="lg:text-xl py-2 px-4 bg-slate-700 hover:bg-slate-500 rounded-lg hover:text-pink-300">
                    <a href="/Resume.pdf" download="/Resume.pdf">
                        Download CV
                    </a>
                </button>
            </div>

            
            <div className="flex gap-4 mb-20">
                <p className="flex self-center lg:text-2xl w-4/5"> Born and raised in America, I finished my engineering degree in Poland, with over 4 years experience. Adept in TypeScript, React, and Angular with a solid understanding of cloud solutions and CI/CD pipelines. Passionate about enhancing UX/UI and improving web application performance. </p>
                <img className="w-1/4 rounded-lg hidden md:block" src="/pic.jpg" />
            </div>
            <div className="mb-12">
                <h1 className="flex text-2xl lg:text-3xl lg:pb-5 my-5 shadow-line shadow-white">Experience</h1>
                <div className="flex flex-grow flex-col w-full">
                    <h2 className="lg:text-2xl">CDPR</h2>
                    <h3 className="lg:text-lg">2022 - 2024</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li className="lg:text-lg"> Specialized in Typescript and Javascript using React and Angular </li>
                        <li className="lg:text-lg"> Improved launcher download speed by 20% </li>
                        <li className="lg:text-lg"> Reduced latency 30% enhancing user interactions </li>
                        <li className="lg:text-lg"> 15% reduction in user-reported issues post-release. </li>
                    </ul>
                </div>
                <div className="flex flex-grow flex-col py-5 w-full">
                    <h2 className="lg:text-2xl"> SenseVr</h2>
                    <h3 className="lg:text-l">2020 - 2022</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li className="lg:text-lg">Created reusable components, created and implemented custom filtering, worked and styled AR components.  </li>
                        <li className="lg:text-lg">Developed and tested responsive web applications, increasing load speeds by 25% through optimization of large file downloads. </li>
                    </ul>
                </div>
                <div className="flex flex-grow flex-col py-5 w-full">
                    <h2 className="lg:text-2xl">AstraZeneca </h2>
                    <h3 className="lg:text-l">2020 - 2021</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li className="lg:text-lg"> Streamlined data collection and reporting processes, contributing to more efficient decision-making.  </li>
                    </ul>
                </div>
            </div>
            <div className="flex mb-12 flex-grow flex-col py-5 w-full">
                <h1 className="flex text-2xl lg:text-4xl lg:pb-5 my-5 shadow-line shadow-white">Education</h1>
                <ul className="flex flex-col mx-10 list-disc">
                    <li className="lg:text-lg">
                        Polish Japanese Academy of Information Technology in Warsaw
                    </li>
                    <li className="lg:text-lg">
                        Studied from 2019-2022
                    </li>
                    <li className="lg:text-lg">
                        Finished with a Bachelor of engineering in Comuter Science with a Concentration in Databases
                    </li>
                    <li className="lg:text-lg">
                        Thesis Topic: Cloud Based Password Manager
                    </li>
                </ul>
            </div>
            <div className="mb-16">
                <h1 className="flex text-2xl lg:text-4xl lg:pb-5 my-5 shadow-line shadow-white">Fun Facts</h1>
                <ul className="flex flex-col mx-10 list-disc">
                    <li className="lg:text-lg">
                        Organizer for <b>Google Developers Group</b> Warsaw 2019 & 2020
                    </li>
                    <li className="lg:text-lg">
                        Passion for learning Game Development - Unity Game Development
                    </li>
                    <li className="lg:text-lg">
                        Learning Vue.js
                    </li>
                </ul>
            </div>
            <h1 className="flex text-2xl lg:text-4xl lg:pb-5 my-5 shadow-line shadow-white">Contact Me</h1>
            <div className="flex mb-4 flex-grow w-full">
                <Mailto />
                <a className="px-2 lg:px-4 shadow-side-line shadow-white text-pink-500" href="https://github.com/patjagielski">Github</a>
                <a className="px-2 lg:px-4 text-pink-500" href="https://www.linkedin.com/in/jagielskipatrik/">LinkedIn</a>
            </div>
        </div>
    );
}

export default Resume;