import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const FavoriteButton: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn w-full tracking-wider bg-zinc-800 text-[0.6rem] sm:text-sm"
      {...props}
    >
      {label}
    </button>
  );
};

export const PlayButton: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn w-full tracking-widest bg-zinc-800 text-sm sm:text-base"
      {...props}
    >
      {label}
    </button>
  );
};
