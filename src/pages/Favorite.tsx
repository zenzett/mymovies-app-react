import { useState, useEffect } from "react";
import moment from "moment";

import { TextLoading } from "../components/Loading";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
}

const Favorite = () => {
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  });

  function fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      setDatas(JSON.parse(getFavorite));
    }
    setLoading(false);
  }

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert("Removed.");
  }

  return (
    <Layout>
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <TextLoading />
        </div>
      ) : (
        <div>
          <p className="m-10 flex justify-center font-semibold text-xl sm:text-3xl">
            Favorite
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
            {datas.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                image={data.poster_path}
                release_date={moment(data.release_date).format("YYYY")}
                labelButton="Remove"
                onClickFav={() => removeFavorite(data)}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Favorite;
