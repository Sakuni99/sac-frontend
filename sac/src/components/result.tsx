import React from 'react'

interface ResultProps {
    result: string;
}

function Result(props: ResultProps) {
  return (
    <div>{props.result}</div>
  )
}

export default Result