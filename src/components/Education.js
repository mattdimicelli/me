import School from './School';

const Education = () => {
    return (
        <section id="education" className="flex flex-col justify-center py-16 
        px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
            <h2 className="uppercase text-5xl font-bold">Education</h2>
            <ul>
                <School name='The Odin Project'
                degree='Full Stack Web Development'
                years="2021-2022"
                details={
                <>An open-source coding curriculum that provides structured learning for 
                self-starters who don’t need a boot camp to get motivated.  The curriculum guides 
                you through HTML, CSS, Javascript, Git, NodeJS, Express, MongoDB, and much more.  A 
                core belief is that you learn best by building many projects.  The&nbsp;
                <span class="uppercase font-bold">many</span> projects which aren't shown here can 
                be seen in my&nbsp;
                <a className="underline" href="https://github.com/mattdimicelli">
                    Github repository
                </a>.</>
                }
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