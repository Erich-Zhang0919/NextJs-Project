"use client"
import { List, Avatar } from "antd";
import React from 'react'
import { data } from "@/data";
import Link from "next/link";

export default function Page() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`blog/${item.id}`}>{item.title}</Link>}
          description={item.body}
        />
      </List.Item>
    )}
  />
  )
}
