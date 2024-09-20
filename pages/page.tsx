import Paper from "../src/components/Page";
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../src/components/Feed';

export default function Read() {
  return (
    <div className="max-w-xl mx-auto py-4">
      <Paper
        title="Some Barstool Article" 
        imageUrl="https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg" 
        author={{
          name: 'El Presidente',
          avatar: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
          author_url: 'https://www.instagram.com/stoolpresidente/?hl=en'
        }} 
      />
    </div>
  );
}
