import React from 'react';

const BottomFooter: React.FC = () => {
    return (
        <footer style={{position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0', padding: '10px'}}>
            <div style={{marginBottom: '5px', textAlign: 'center'}}>
                <p>&copy; 2024 Our Library</p>
            </div>
            <div style={{marginBottom: '5px', textAlign: 'center'}}>
                <p>123 Library St, City, Country</p>
            </div>
            <div style={{marginBottom: '5px', textAlign: 'center'}}>
                <p>Phone: 123-456-789, Email: contact@ourlibrary.com</p>
            </div>
        </footer>
    );
};

export default BottomFooter;

