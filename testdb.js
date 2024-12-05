import mysql from 'mysql2/promise';

async function testDB() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Neneba1234@',
            database: 'projet_nodeJs'
        });
        console.log('Connexion réussie!');
        await connection.end();
    } catch (err) {
        console.error('Erreur de connexion:', err);
    }
}

testDB();