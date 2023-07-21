import Link from 'next/link';
import React from 'react';

const PATH = '/exercises/01-screensaver';

function ScreenSaverIndexPage() {
  return (
    <main>
      <h1>Choose your color:</h1>
      <ul>
        <li>
          <Link href={`${PATH}/hotpink`}>hotpink</Link>
        </li>
        <li>
          <Link href={`${PATH}/lavender`}>lavender</Link>
        </li>
        <li>
          <Link href={`${PATH}/white`}>white</Link>
        </li>
        <li>
          <Link href={`${PATH}/red`}>red</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
