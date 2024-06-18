import { draftMode } from 'next/headers'

export default function RootLayout({ children }) {
  const isDraftMode = draftMode().isEnabled
  return (
    <html>
      <head />
      <body>
        {children}
        {isDraftMode ? (
          <h2 style={{ background: 'red', color: 'white' }}>IS DRAFT MODE</h2>
        ) : null}
      </body>
    </html>
  );
}
