import { Poem } from '@/utils/poems';

export const PoemStructure = ({ title, stanzas, date }: Poem) => {
  return (
    <article className="p-4 text-gray-800 bg-white shadow-lg rounded-md h-[50vh] max-h-[750px] min-h-[350px] overflow-y-scroll">
      <div className='mb-4'>
        <h3 className="text-lg font-bold ">{title}</h3>
        {date && <span className='text-sm'>{date}</span>}
      </div>

      {stanzas.map((stanza: string[], i: number) => (
        <div key={i} className="mb-4">
          {stanza.map((verse: string, j: number) => <p key={j} className="">{verse}</p>)}
        </div>
      ))}
    </article>
  );
};
