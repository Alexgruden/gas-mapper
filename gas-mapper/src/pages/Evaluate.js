import EvaluateForm from "../components/PropertyForm";

export default function Evaluate() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Evaluate Page</h1>
            <Form />
        </div>
    );
  }
  function Form() {
    return (
        <EvaluateForm />
    );
  }