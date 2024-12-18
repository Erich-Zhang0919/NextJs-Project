"use client"
import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { editSnippet } from '@/actions';

export default function Edit({ snippet }: { snippet: Snippet }) {
    const [code, setCode] = useState(snippet.code);
    const snnippetWithOthers = editSnippet.bind(null, snippet.id, code);
    const handleChange = (newValue: string = '') => {
      // 你需要在此处实现代码片段的更新
      // 请在 actions 目录下创建 updateSnippet.ts 文件，并在此函数中编写代码
      setCode(newValue)
    }
  return (
    <div>
      <Editor height="50vh" theme='vs-dark' language='javascript' options={{
        minimap: {
          enabled: false
        }
      }}
      defaultValue={snippet.code}
      onChange={handleChange}
      />
      <form action={snnippetWithOthers as any}>
        <button className='border p-2 rounded border-teal-500'>Save</button>
      </form>
    </div>
  )
}
