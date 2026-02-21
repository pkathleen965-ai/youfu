import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { name, phone, service, message } = data;
    
    if (!name || !phone) {
      return NextResponse.json(
        { error: "姓名和电话为必填项" },
        { status: 400 }
      );
    }
    
    const submission = {
      id: Date.now(),
      name,
      phone,
      service: service || "未选择",
      message: message || "无",
      createdAt: new Date().toISOString(),
      status: "new"
    };
    
    const dataDir = join(process.cwd(), "data");
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    
    const filePath = join(dataDir, "submissions.json");
    let existingData: any[] = [];
    
    if (existsSync(filePath)) {
      try {
        const fileContent = require("fs").readFileSync(filePath, "utf-8");
        existingData = JSON.parse(fileContent);
      } catch (e) {
        existingData = [];
      }
    }
    
    existingData.unshift(submission);
    writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    
    return NextResponse.json({
      success: true,
      message: "提交成功",
      id: submission.id
    });
  } catch (error) {
    console.error("提交错误:", error);
    return NextResponse.json(
      { error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = join(process.cwd(), "data", "submissions.json");
    
    if (!existsSync(filePath)) {
      return NextResponse.json({ submissions: [] });
    }
    
    const fileContent = require("fs").readFileSync(filePath, "utf-8");
    const submissions = JSON.parse(fileContent);
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error("读取错误:", error);
    return NextResponse.json(
      { error: "无法读取数据" },
      { status: 500 }
    );
  }
}
