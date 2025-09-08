import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-3/5 justify-center">
                <h1 className="text-2xl font-bold">Home Page</h1>
                <Button />
                <Link to="/evaluate">Evaluate</Link>
                <Link to="/history">History</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
        );
  }

  function Button() {
    return (
        <Link t>
        </Link>
    );
  }