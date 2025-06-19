type Project = {
    title: string;
    description: string;
    link: string;
};


export default function ProjectCard({title, description, link}: Project){
    return (
        <a
            href={link}
            target="_blank"
            className="block rounded-2xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 dark:text-white"
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </a>
    )
}