const shows = require('@/shows.json');

export async function GET() {
	return Response.json(shows);
}
