import libraryScreenshot from '../images/library_screenshot.png';
import battleshipScreenshot from '../images/battleship_screenshot.png';
import memoryScreenshot from '../images/memory_screenshot.png';
import calculatorScreenshot from '../images/calculator_screenshot.png';
import characterHuntScreenshot from '../images/character_hunt_screenshot.png';
import todoScreenshot from '../images/todo_screenshot.png';

import Project from './Project';
const Projects = () => {
    return (
        <section id="projects" className="flex flex-col justify-center py-16 
        px-4 border-b-1 border-slate-500 text-slate-800 lg:min-h-screen">
            <h2 className="uppercase text-5xl font-bold">Sample Projects</h2>
            <ul>
                <Project title="React Character Hunt"
                description={`A Where's Waldo type game in which you must find only a few select 
                characters out of hundreds of your favorites from TV, movies, video games, comic 
                books, and pop-culture . The player can choose from three stunning illustrations
                (which I refer to as "maps"): Ultimate Space Battle, Universe 113, and The Loc 
                Nar. All which were drawn by Egor Klyuchnyk, an illustrator and concept artist 
                from Kyiv, Ukraine.`}
                img={characterHuntScreenshot}
                imgAlt="screenshot of Character Hunt app"
                urlRepo="https://github.com/mattdimicelli/Character_Hunt"
                sideOfScreenshot='right'
                urlLiveSite='https://mattdimicelli.github.io/Character_Hunt/'
                />

                <Project title='Book Library Using BaaS (No Framework)'
                    description="A Library app which allows the user to keep track of his or her
                    books. The app allows the user to manage his or her book collection with as 
                    few or as many details as the user desires, such as the book's author, 
                    title, date of publication, etc. It has advanced features such as the 
                    ability to display the books sorted by different orders, as well as 
                    providing the user with some basic stats about their collection. The app has 
                    responsive-design so that it can work on any device. Wanting to enable 
                    access to saved library data from any client, as well as allow multiple 
                    users, I implemented Google Firebase's Realtime (NoSQL) database and 
                    Authentication."
                img={libraryScreenshot}
                imgAlt='screenshot of library app'
                urlRepo='https://github.com/mattdimicelli/No_Framework_Book_Library_Using_BaaS'
                sideOfScreenshot='right'
                urlLiveSite='https://mylibrary-mrd.web.app/'
                />

                <Project title='Battleship Via TDD (No Framework)'
                description="The classic Battleship game, built via Test Driven Development 
                (TDD). Specifically, the game's logic was written separate from the DOM 
                controller, and it was the former which was written with TDD."
                img={battleshipScreenshot}
                imgAlt='screenshot of battleship app'
                urlRepo='https://github.com/mattdimicelli/No_Framework_Battleship_Via_TDD'
                sideOfScreenshot='left'
                urlLiveSite='https://mattdimicelli.github.io/No_Framework_Battleship_Via_TDD/'
                />

                <Project title='React Memory Card Game'
                description="This game puts your memory to the test! You are presented with 
                cards, each with a random country's flag and the name of the country. The cards 
                get shuffled any time one of them is clicked. If you click on any country-card 
                more than once, your score is reset to zero. The idea is to get the highest 
                score possible!"
                img={memoryScreenshot}
                imgAlt='screenshot of memory card game'
                urlRepo='https://github.com/mattdimicelli/React_Memory_Game'
                sideOfScreenshot='right'
                urlLiveSite='https://mattdimicelli.github.io/React_Memory_Game/'
                />

                <Project title='NICE Calculator (No Framework)'
                description={`A basic calculator app. It evaluates a single pair of operands at 
                at time, but allows the user to operate on the result of the previous equation. 
                I decided to do all of the "extra-credit" assignments for this project, so it 
                also handles floats, and it has a backspace button and keyboard support, and I 
                used CSS to craft a replica of an antique Sharp calculator from the 1970s.
                
                P.S.: Try to find the "Easter Egg". Hint: enter an equation that divides a 
                number by something.....`}
                img={calculatorScreenshot}
                imgAlt='screenshot of calculator app'
                urlRepo='https://github.com/mattdimicelli/No_Framework_Calculator'
                sideOfScreenshot='left'
                urlLiveSite='https://mattdimicelli.github.io/No_Framework_Calculator/'
                />

                <Project title='Todo List Using BaaS (No Framework)'
                description={`A ToDo app which allows the user to keep track of his or her 
                "things to do", with advanced features such as optional details, due dates, and 
                separate lists to better organize the tasks. The app has responsive-design so 
                that it can work on any device. It's actually a refactored version of an older 
                ToDo project of mine which utilized the Web Storage API to persist the ToDo data
                through different browser sessions. Wanting to enable access to saved ToDo data 
                from any client, as well as allow multiple users, I implemented Google 
                Firebase's Firestore database and Authentication.`}
                img={todoScreenshot}
                imgAlt='screenshot of Todo app'
                urlRepo='https://github.com/mattdimicelli/No_Framework_Todo_List_Using_BaaS'
                sideOfScreenshot='left'
                urlLiveSite='https://todo-app-e225d.web.app/'
                />
            </ul>
        </section>
    )
}

export default Projects;