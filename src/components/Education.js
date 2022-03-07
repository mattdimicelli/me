import School from './School';

const Education = () => {
    return (
        <section id="education" className="flex flex-col justify-center py-16 
        px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
            <h2 className="uppercase text-5xl font-bold">Education</h2>
            <ul>
                <School name='The Odin Project'
                degree='Full Stack Web Development'
                years='2021-2022'
                details={`
                A free, open-source coding curriculum that is taken entirely online at one’s own 
                pace.  Designed for those who don’t need a bootcamp (or a drill instructor!) to get 
                motivated but still want a high quality education.  The content is meticulously 
                curated by over 5000 volunteer contributors.  A core belief of the project is that 
                you learn best by building.  Some of the technologies that are taught in the 
                curriculum can be seen in the above “Skills” section`}
                />
                <School name='Interamerican University of Puerto Rico'
                degree='Bachelor of Science in Nursing'
                years='2013 - 2015'
                details='Graduated Magna Cum Laude with 3.8 GPA' 
                />
                <School name='SUNY College at Geneseo'
                degree='Bachelor of Arts in Spanish'
                years='2007 - 2011'
                details='Pre-Medicine Concentration with 3.1 GPA' 
                />
            </ul>
        </section>
    )
}

export default Education;