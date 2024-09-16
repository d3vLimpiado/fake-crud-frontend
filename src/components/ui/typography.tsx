import { FC, HTMLProps, PropsWithChildren } from "react"

type Typo<T> = HTMLProps<T>

const H1 = ({children}: Typo<HTMLHeadingElement>) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

const H2 = ({children}: Typo<HTMLHeadingElement>) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

const H3 = ({children}: Typo<HTMLHeadingElement>) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

const Paragraph = ({children}: Typo<HTMLParagraphElement>) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}

export default {
  H1,
  H2,
  H3,
  Paragraph,
}