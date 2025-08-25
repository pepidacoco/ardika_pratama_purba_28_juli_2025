 document.getElementByID("LoginForm").addEventListener("submit",function(event)) {event.preventDefault(); //Mencegah form untuk submit secara
        
        // Mendapat nilai username dan password
        var Username = document.getElementByID('username').value;
        var Password = document.getElementByID('password').value;
        var errorMessage = document.getElementByID ('error-message');
        
        // Validasi username dan password
        if(username === '' || password === ''){
            errorMessage.textContent = 'gaboleh kosong woi !!';
         } else if (username !== 'Ardika' || password !== '123')
         errorMessage.TextContent = 'username atau password salah';
         } else (
             errorMessage.TextContent = ''
             alert('sukses login!!');
        }
    });