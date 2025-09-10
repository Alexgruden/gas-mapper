import { Link } from "react-router-dom"
import NavigateButton from '../components/NavButton'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-3/5 justify-center">
                <h1 className="text-6xl font-bold">Home Page</h1>
                <Button />
            </div>
        </div>
        );
  }

  function Button() {
    return (
        <div className="mt-4 flex justify-between">
            <NavigateButton to="/evaluate" className="border-black rounded-md border-2 text-4xl bg-gray-900 hover:bg-gray-700 text-gray-200 p-4">
            Use the Application
            </NavigateButton>
            <NavigateButton to="/about" className="border-black rounded-md border-2 text-4xl bg-gray-900 hover:bg-gray-700 text-gray-200 p-4">
            Project Information Page
            </NavigateButton>
            <NavigateButton to="/history" className="border-black rounded-md border-2 text-4xl bg-gray-900 hover:bg-gray-700 text-gray-200 p-4">
            Previous Evaluations
            </NavigateButton>
        </div>  
    );
  }