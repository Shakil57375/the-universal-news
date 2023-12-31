import Image from "next/image";
import Link from "next/link";

const Games = () => {
  const gameData = [
    {
      id: "1",
      name: "Memory Game",
      image: "https://i.ibb.co/k391vs2/apps-54588-14090654178473619-aa2706f7-9244-4d37-b59f-3f87f7589476.jpg",
      bgColor: "green",
      path: "/playground/games/memory-game",
    },
    {
      id: "2",
      name: "Snake Game",
      image: "https://i.ibb.co/tHJ7NcR/new2.jpg",
      bgColor: "red",
      path: "/playground/games/old-memory-snake-game",
    },
    {
      id: "3",
      name: "Rock Paper Scissors",
      image: "https://i.ibb.co/SdnSd0j/rock-paper-scissors-banner.jpg",
      bgColor: "pink",
      path: "/playground/games/rock-paper-scissor",
    },
    {
      id: "4",
      name: "Word Scramble Game",
      image: "https://i.ibb.co/RTfgrmG/40158.jpg",
      bgColor: "zinc",
      path: "/playground/games/word-scramble",
    },
  ];
  return (
    <div className="min-h-screen c-auto px-3 md:px-0">
      <header className="mt-5 p-4 animate-pulse">
        <h1 className="text-xl md:text-2xl text-center font-bold">
          Play Games
        </h1>
      </header>
      <div className=" py-8">
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {gameData?.map((game) => (
            <div
              key={game?.id}
              className={`border rounded-lg shadow-md hover:scale-105 duration-500 bg-pink-500`}
            >
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-lg"
                  width={400}
                  height={500}
                  src={game?.image}
                  alt="banner"
                />
              </div>
              <div className="text-center space-y-3 text-white my-4">
                <p className="font-bold text-2xl md:text-3xl py-6">
                  {game?.name}
                </p>
                <Link href={game?.path}>
                  <button className="primary-btn">Play Now</button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Games;
