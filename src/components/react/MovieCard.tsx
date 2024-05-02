import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface MovieCardProps {
  id: number;
  title: string;
  realeaseDate: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  realeaseDate,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="sm:w-[30rem] md:w-[20rem] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-200 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`/movies/movie_${id}.webp`}
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt="movie"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-black bg-gray-200"
          >
            {realeaseDate}
          </CardItem>
          <a href={`/movies/${id}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Ver
            </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
};
