import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <Link href={'/preview-page'}>View preview page</Link>
    </>
  ) 
}
