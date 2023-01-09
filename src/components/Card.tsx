import { useNavigate } from "react-router-dom";
import { FC } from "react";

import { FavoriteButton } from "./Button";

interface CardProps {
  id?: number;
  title?: string;
  image?: string;
  release_date?: string;
  labelButton?: string;
  onClickFav?: () => void;
}

const Card: FC<CardProps> = (props) => {
  const navigate = useNavigate();
  function onClickDetail() {
    navigate(`/detail/${props.id}`);
  }

  return (
    <div className="card card-compact bg-black shadow-xl glass duration-300 hover:scale-105">
      <figure onClick={() => onClickDetail()}>
        <button>
          <img
            className="duration-300 hover:scale-105 hover:blur-sm"
            src={`https://image.tmdb.org/t/p/w500${props.image}`}
            alt="Image not found."
          />
        </button>
      </figure>
      <div className="card-body gap-0">
        <span
          className="m:0 p:0 flex font-bold text-xs sm:text-base"
          onClick={() => onClickDetail()}
        >
          <button>{props.title}</button>
        </span>
        <p className="text-xs font-light sm:text-base m:0 p:0">
          {props.release_date}
        </p>
        <div className="card-actions flex justify-center mt-5">
          <FavoriteButton
            label={props.labelButton}
            onClick={props.onClickFav}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
