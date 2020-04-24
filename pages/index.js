console.log('MY_STEP', process.env.STEP);

export default function Home() {
  return (
    <div>MY_STEP: {process.env.STEP}</div>
  )
}
