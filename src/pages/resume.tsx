const Resume = () => {

    const Mailto = () => {
        const email = 'jagielskipat@gmail.com'
        const subject = 'From Portfolio Website'
        const body = 'Hello...'
        return (
            <a className="px-4 text-pink-500 shadow-white shadow-side-line text-blue-500" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>Contact me</a>
        );
    };

    return (
        <div className="m-10">
            <div className="flex justify-between shadow-line shadow-white my-5 pb-4">
                <h1 className="text-4xl">About me</h1>
                <button className="p-3 bg-slate-700 hover:bg-slate-500 rounded-lg hover:text-pink-300">Download CV</button>
            </div>
            
            <div className="flex gap-4 mb-20">
                <p className="flex self-center text-2xl w-4/5"> Born and raised in America, I finished my engineering degree in Poland, with over 4 years experience. Adept in TypeScript, React, and Angular with a solid understanding of cloud solutions and CI/CD pipelines. Passionate about enhancing UX/UI and improving web application performance. </p>
                <img className="w-1/4 rounded-lg" src="/pic.jpg" />
            </div>
            <div className="mb-12">
                <h1 className="flex text-4xl pb-5 my-5 shadow-line shadow-white">Experience</h1>
                <div className="flex flex-grow flex-col w-full">
                    <h2 className="text-2xl">CDPR</h2>
                    <h3 className="text-l">2022 - 2024</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li> Specialized in Typescript and Javascript using React and Angular </li>
                        <li> Improved launcher download speed bby 20% </li>
                        <li> Reduced latency 30% enhancing user interactions </li>
                        <li> 15% reduction in user-reported issues post-release. </li>
                    </ul>
                </div>
                <div className="flex flex-grow flex-col py-5 w-full">
                    <h2 className="text-2xl"> SenseVr</h2>
                    <h3 className="text-l">2020 - 2022</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li>Created reusable components, created and implemented custom filtering, worked and styled AR components.  </li>
                        <li>Developed and tested responsive web applications, increasing load speeds by 25% through optimization of large file downloads. </li>
                    </ul>
                </div>
                <div className="flex flex-grow flex-col py-5 w-full">
                    <h2 className="text-2xl">AstraZeneca </h2>
                    <h3 className="text-l">2020 - 2021</h3>
                    <ul className="flex flex-col mx-10 list-disc">
                        <li> Streamlined data collection and reporting processes, contributing to more efficient decision-making.  </li>
                    </ul>
                </div>
            </div>
            <div className="flex mb-12 flex-grow flex-col py-5 w-full">
                <h1 className="flex text-4xl pb-5 my-5 shadow-line shadow-white">Education</h1>
                <ul className="flex flex-col mx-10 list-disc">
                    <li>
                        Polish Japanese Academy of Information Technology in Warsaw
                    </li>
                    <li>
                        Studied from 2019-2022
                    </li>
                    <li>
                        Finished with a Bachelor of engineering in Comuter Science with a Concentration in Databases
                    </li>
                    <li>
                        Thesis Topic: Cloud Based Password Manager
                    </li>
                </ul>
            </div>
            <div className="mb-16">
                <h1 className="flex text-4xl pb-5 my-5 shadow-line shadow-white">Fun Facts</h1>
                <ul className="flex flex-col mx-10 list-disc">
                    <li>
                        Organizer for <b>Google Developers Group</b> Warsaw 2019 & 2020
                    </li>
                    <li>
                        Passion for learning Game Development - Unity Game Development
                    </li>
                    <li>
                        Learning Vue.js
                    </li>
                </ul>
            </div>
            <h1 className="flex text-3xl pb-5 my-5 shadow-line shadow-white">Contact Me</h1>
            <div className="flex mb-4 flex-grow w-full">
                <Mailto />
                <a className="px-4 shadow-side-line shadow-white text-pink-500" href="https://github.com/patjagielski">Github</a>
                <a className="px-4 text-pink-500" href="https://www.linkedin.com/in/jagielskipatrik/">LinkedIn</a>
            </div>
        </div>
    );
}

export default Resume;