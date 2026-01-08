export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, white 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🏋️ GymPro
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
          AI Powered Gym Management Platform
        </p>
        <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
          <a 
            href="/marketing" 
            style={{
              display: 'block',
              width: '100%',
              background: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              marginBottom: '1rem',
              textDecoration: 'none'
            }}
          >
            View Marketing Website →
          </a>
          <a 
            href="/dashboard" 
            style={{
              display: 'block',
              width: '100%',
              background: '#1f2937',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              marginBottom: '1rem',
              textDecoration: 'none'
            }}
          >
            Go to Dashboard →
          </a>
        </div>
      </div>
    </div>
  );
}