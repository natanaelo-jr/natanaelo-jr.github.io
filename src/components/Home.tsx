const Home: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full flex justify-center gap-8 items-center">
        <div className="flex flex-col h-full justify-between p-2">
          <span>a</span>
          <span>a</span>
          <span>a</span>
        </div>
        <div className="max-w-72 px-10 inline-block py-4 text-left hover:animate-pulse bg-zinc-900 rounded-sm shadow">
          <h1 className="text-2xl text-zinc-100 font-bold">Natanael Júnior,</h1>
          <h2 className="text-2xl text-zinc-400 font-medium">
            Fullstack Developer
          </h2>
          <div className="py-5 w-full">
            <p className="text-sm font-sans text-zinc-500 flex-wrap flex w-fit break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga nostrum libero culpa qui, eligendi reprehenderit voluptates,
              illum minus voluptas vero quae! Iste doloribus in fugiat error
              nulla repellendus id?
            </p>
          </div>
        </div>
        <div className="max-w-72 overflow-hidden max-h-80">
          <img src="https://picsum.photos/1000/1500" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
