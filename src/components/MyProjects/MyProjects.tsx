import ImagePreview from "../ImagePreview/ImagePreview";

const MyProjects = ({ title, projectList }) => {
    return (
        <div>
            <p className="flex text-xl lg:text-4xl lg:pb-5 my-5 shadow-line shadow-white"> {title}</p>
            <div className="grid lg:grid-cols-3 gap-8 p-5 lg:p-20">
                {projectList.map((project, index) => (
                    <ImagePreview key={project.title+index} project={project}/>
                ))}
            </div>
        </div>
    );
}

export default MyProjects;