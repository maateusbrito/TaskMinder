export async function registerUser(nome, sobrenome, dataNascimento, email, senha) {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        sobrenome,
        dataNascimento,
        email,
        senha,
      }),
    });
  
    const data = await response.json();
    return data;
  }
  