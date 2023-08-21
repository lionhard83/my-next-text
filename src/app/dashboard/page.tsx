type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type RickAndMortyResponse = {
  info: Info;
  results: Character[];
};


export default async function Page() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json() as RickAndMortyResponse;

  
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        
        {data.results.map((item, index) => (<li key={index}>
          <div className="flex items-center gap-x-6">
            <img className="h-16 w-16 rounded-full" src={item.image} alt="" />
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{item.name}</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">{item.species}/{item.status}</p>
            </div>
          </div>
        </li>)
      
        )}
        
      </ul>
    </div>
</div>
  )
}
