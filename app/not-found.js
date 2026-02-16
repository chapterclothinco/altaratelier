export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 500,
          color: 'var(--rose-gold)',
          marginBottom: '16px',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '18px',
          color: 'var(--gray-500)',
          marginBottom: '32px',
          maxWidth: '400px',
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="btn btn-primary"
      >
        Back to Home
      </a>
    </section>
  );
}
