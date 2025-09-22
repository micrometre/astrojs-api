export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";
import { writeFile } from 'node:fs/promises';
import { join as pathJoin } from "node:path";







export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const message = data.get("message");
    const filePath = pathJoin(process.cwd(), 'src', 'content', 'example.txt2');
    // Validate the data - you'll probably want to do more than this
    if (!message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }
    // Do something with the data, then return a success response
    await writeFile(filePath, 'Hello, World!' + message);
    return new Response(
        JSON.stringify({
            message: "Success! " + message
        }),
        { status: 200 }
    );
};
