export default function About() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-3/5 justify-center">
                <h1 className="text-3xl font-bold justify-center">About Page</h1>
                <h2 className="text-xl justify-center font-bold"><br/>YieldEstate</h2>
                <h2 className="text-xl justify-center font-bold"><br/>Project Description</h2>
                <p>This project is created to be similar to the app "Zillow". Its a simple website but holds powerful features. 
                My goal is to expand on what is possible for myself in terms of mixing business/housing analytics into fullstack development.<br/><br/>
                The site will contain:
                </p>
                <ul className="list-disc list-inside">
                    <li>An analyzer which takes in data and immediately renders results upon submission.</li>
                    <li>Interactive Property search within a map</li>
                    <li>An ML Model which attempts to predict property prices</li>
                    <li>An integrated summary assitant with additional helping capabilities </li>
                    <li>Ability to be deployed for live demonstrations</li>
                </ul>
                <h2 className="text-xl justify-center font-bold"><br/>Technologies Used</h2>
                <p>
                    Project Programming languages:
                </p>
                <ul className="list-disc list-inside">
                    <li>JavaScript</li>
                    <li>CSS</li>
                </ul>
                <p>
                    Project Libraries
                </p>
                <ul className="list-disc list-inside">
                    <li>React</li>
                    <li>React Router</li>
                </ul>
                <p>
                    Project Frameworks
                </p>
                <ul className="list-disc list-inside">
                    <li>Tailwind CSS</li>
                </ul>
                <h2 className="text-xl justify-center font-bold"><br/>Installation Instructions</h2>
                <h2 className="text-xl justify-center font-bold"><br/>Usage Instructions</h2>
                <h2 className="text-xl justify-center font-bold"><br/>Project Status</h2>
                <h2 className="text-xl justify-center font-bold"><br/>Project Walk Through</h2>
            </div>
        </div>
    );
  }