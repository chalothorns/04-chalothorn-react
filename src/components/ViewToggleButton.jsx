 export default function ViewToggleButton({onClick, children}){
    return (
        <>

        <button 
        onClick={onClick}
        className="shadow-xl/30 px-15 py-5 mr-20 mt-15 border border-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition duration-300"
        >
            {children}

        </button>
            
</>
    );
 };
 