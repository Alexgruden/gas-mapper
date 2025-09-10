import EvaluateForm from "../components/PropertyForm";
import Map from "../components/Map";

export default function Evaluate() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Evaluate Page</h1>
            <Form />
            <Map />
        </div>
    );
  }
  function Form() {
    return (
        <EvaluateForm />
    );
  }