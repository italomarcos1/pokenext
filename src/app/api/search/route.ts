import { NextRequest, NextResponse } from 'next/server'

import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { OpenAIEmbeddings } from "@langchain/openai";

const client = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!);
const embeddings = new OpenAIEmbeddings();

export async function POST(req: NextRequest) {
  const { query } = await req.json()
  
  const vectorStore = await SupabaseVectorStore.fromExistingIndex(embeddings, {
    client,
    tableName: "documents",
    queryName: "match_documents"
  })

  const data = await vectorStore.similaritySearch(query, 10);
  const results = data.map(r => r.metadata.id)
  
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: { results }
  });
}