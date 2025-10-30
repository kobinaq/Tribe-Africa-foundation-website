import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// This API route stores contact form submissions
// For production, consider using:
// - Vercel KV: https://vercel.com/docs/storage/vercel-kv
// - Airtable API: https://airtable.com/api
// - Google Sheets API: https://developers.google.com/sheets/api

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message, timestamp } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data', 'submissions');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Read existing submissions or create new array
    const submissionsFile = path.join(dataDir, 'contact-submissions.json');
    let submissions = [];

    if (existsSync(submissionsFile)) {
      const fileContent = await readFile(submissionsFile, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    // Add new submission
    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: timestamp || new Date().toISOString(),
    };

    submissions.push(newSubmission);

    // Write back to file
    await writeFile(submissionsFile, JSON.stringify(submissions, null, 2));

    // In production, you might want to:
    // 1. Send an email notification to the foundation
    // 2. Store in a database
    // 3. Send to a CRM system
    // 4. Integrate with Vercel KV or similar service

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
