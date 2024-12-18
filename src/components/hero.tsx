import React from 'react'

interface IProps {
    content: string
    className?: string
}

export default function Hero(props: IProps) {
  return (
    <div className={props.className}>
    <h1>{props.content}</h1>
    </div>
  )
}
