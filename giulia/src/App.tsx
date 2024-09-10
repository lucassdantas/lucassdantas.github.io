import { Card } from '@/components/Card';
import { Carousel } from '@/components/Carousel';
import { Poem, poems } from '@/utils/poems';
import { PoemStructure } from '@/components/PoemStructure';
import { Limiter } from '@/components/Limiter';
import './App.css';

function App() {
  return (
    <main className="min-h-screen h-fit bg-gradient-to-br from-pink-300 to-pink-400 text-black">
      <Limiter>
        <Card />
        <Carousel>
          {poems.map((poem: Poem, i: number) => <PoemStructure title={poem.title} stanzas={poem.stanzas} key={i} />)}
        </Carousel>
      </Limiter>
    </main>
  );
}

export default App;
