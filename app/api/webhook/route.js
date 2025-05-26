// // app/api/webhook/route.js
// import { NextResponse } from 'next/server';

// const VERIFY_TOKEN = 'check123';

// // Handle GET = Webhook verification
// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const mode = searchParams.get('hub.mode');
//     const token = searchParams.get('hub.verify_token');
//     const challenge = searchParams.get('hub.challenge');
//     console.log('challenge:', challenge);

//     if (mode === 'subscribe' && token === VERIFY_TOKEN) {
//       return new Response(challenge, { status: 200 });
//     } else {
//       return new Response('Forbidden', { status: 403 });
//     }
//   } catch (error) {
//     console.error('GET error:', error);
//     return new Response('Server Error', { status: 500 });
//   }
// }

// // Handle POST = Webhook messages
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log('Incoming message:', JSON.stringify(body, null, 2));

//     // Add your logic here (save to DB, etc.)

//     return NextResponse.json({ status: 'received' });
//   } catch (error) {
//     console.error('POST error:', error);
//     return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
//   }
// }

export async function GET() {
    return new Response('API Works!', { status: 200 });
  }
  