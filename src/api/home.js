import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    alt: "snow",
    description: "Experience the fun of exploring the snow",
    img: "/images/snow.jpg",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    return NextResponse.json(data.find((item) => item.id === Number(id)));
  }
  if (detailProduct) {
    return NextResponse.json({
      status: 200,
      message: "success",
      data: detailProduct,
    });
  }
  return NextResponse.json({
    status: 404,
    message: "not found",
    data: {},
  });

  return NextResponse.json({ status: 200, message: "Success", data });
}
