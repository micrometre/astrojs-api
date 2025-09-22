import type { APIRoute } from 'astro'
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';



async function writeExample() {
  try {
    // Write text to a file
    await writeFile('example.txt', 'Hello, World!');
    console.log('File written successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

writeExample();


export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    }),
  )
}