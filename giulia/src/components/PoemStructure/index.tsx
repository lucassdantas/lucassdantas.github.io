import { Poem } from '@/utils/poems';

export const PoemStructure = ({ title, stanzas }: Poem) => {
  return (
    <article className="p-4 bg-white shadow-lg rounded-md h-[50vh] max-h-[750px] min-h-[350px] overflow-y-scroll">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {stanzas.map((stanza: string[], i: number) => (
        <div key={i} className="mb-4">
          {stanza.map((verse: string, j: number) => <p key={j} className="text-gray-700">{verse}</p>)}
        </div>
      ))}
    </article>
  );
};
