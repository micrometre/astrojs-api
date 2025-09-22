// Outputs: /builtwith.json
export function GET({ params, request }) {
  const responseData = {
    name: "Astro",
    url: "https://astro.build/",
  };

  console.log('Request URL:', request.url);
  console.log('Request method:', request.method);
  console.log('Params:', params);

  console.log('Returning response:', responseData);

  return new Response(JSON.stringify(responseData));
}