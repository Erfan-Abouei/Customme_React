//@ts-ignore
const MovieModalProgress = ({ data, onClick }) => {
    return (
        <div onClick={onClick} className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 cursor-pointer">
            {/* Line */}
            <div className="transition-all h-full bg-white" style={{ width: data + '%' }}></div>
        </div>
    );
};

export default MovieModalProgress;
