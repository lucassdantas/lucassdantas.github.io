import { Card } from '@/components/Card';
import { Carousel } from '@/components/Carousel';
import { Poem, poems } from '@/utils/poems';
import { PoemStructure } from '@/components/PoemStructure';
import { Limiter } from '@/components/Limiter';
import './App.css';

function App() {
  return (
    <main className="min-h-screen h-fit bg-gradient-to-br from-pink-300 to-pink-400 text-black py-8">
      <Limiter>
        <Card />
        <Carousel>
          {poems.map((poem: Poem, i: number) => <PoemStructure date={poem.date} title={poem.title} stanzas={poem.stanzas} key={i} />)}
        </Carousel>
      </Limiter>
    </main>
  );
}

export default App;
