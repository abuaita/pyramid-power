import Link from 'next/link';
import cowsay from 'cowsay-browser';

export default () => (
  <div style={{width:'560px', margin:'auto'}}>
    <h1>404</h1>
    <pre>{cowsay.say({ text: 'Sorry couldnt find what you were looking for 🥺.' })}</pre>
    <Link href="/">
      <a>Go home</a>
    </Link>
  </div>
);