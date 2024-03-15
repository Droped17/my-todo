import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Get success" });
  } catch (error) {
    return NextResponse.json({ message: "Error to get post", error });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ message: "Post Success", body });
  } catch (error) {
    return NextResponse.json({ message: "Error to post", error });
  }
}

export async function PATCH(req: NextRequest) {
  // use params (postId)
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ message: "Edit Success", body });
  } catch (error) {
    return NextResponse.json({ message: "Error to Edit post", error });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    // use params (postId)
    const searchParams = req.nextUrl.searchParams;
    const params = searchParams.get("posts"); //name of params

    console.log(params);

    return NextResponse.json({ message: "delete Success" });
  } catch (error) {
    return NextResponse.json({ message: "Error to delete post", error });
  }
}
