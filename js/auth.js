const form = document.querySelector('#loginForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    const res = await fetch('https://apps-pt-api.kas9uk.easypanel.host/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    console.log(data.token, 'token, data');
    localStorage.setItem('token', data.token);
    console.log(data.token);
  
        window.location = '/dashboard';
   
});


