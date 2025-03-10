import { ButtonProps } from "@/Interfaces/interface";

const Button:  React.FC<ButtonProps> = ({className, onClick, text, type = "button"}) => {
  return (
    <div>
      <button className={`lg:px-4 md:px-2 px-4 rounded transition duration-500 ease-in-out text-sm ${className}`} onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  )
}

export default Button