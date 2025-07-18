const Home = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1 style={{ color: '#000', fontSize: '3rem', marginBottom: '1rem' }}>
                Welcome to Praise Rota
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Your comprehensive solution for managing rotations and schedules efficiently.
            </p>
            <button
                style={{
                    background: '#FFD700',
                    color: '#000',
                    padding: '1rem 2rem',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginTop: '2rem',
                    cursor: 'pointer'
                }}
            >
                Get Started
            </button>
        </div>
    );
};

export default Home;