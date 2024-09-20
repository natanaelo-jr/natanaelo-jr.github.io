interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center px-4 rounded-md transition relative"
    >
      <span className="font-semibold transition duration-500 group-hover:text-violet-400">
        {children}
      </span>
      <span className="absolute bottom-0 group-hover:w-[90%] duration-500 transition-[width] w-0 h-px bg-violet-600"></span>
    </button>
  );
};

export default Button;
