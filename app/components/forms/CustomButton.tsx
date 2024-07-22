interface CustomButtonProps {
    label: string;
    onClick: ()=> void;
    className?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    onClick,
    className
}) =>{
    return(
        <div onClick={onClick} className={`cursor-pointer flex justify-center w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton