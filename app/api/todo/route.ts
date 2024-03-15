import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ message: "Post Success",body});
  } catch (error) {
    return NextResponse.json({ message: "Error to post", error });
  }
}
