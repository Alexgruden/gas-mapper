import { useNavigate } from 'react-router-dom';


function NavigateButton({to, children, className}) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(to);
    };

    return (
        <button type="button" onClick={handleNavigation} className={className}>
        {children}
        </button>
    );
}

export default NavigateButton;