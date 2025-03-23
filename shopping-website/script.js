document.addEventListener('DOMContentLoaded', function() {
    // Navigation Links - Add a hover effect
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        if (!link.classList.contains('signup-btn')) {
            link.addEventListener('mouseover', function() {
                this.style.color = '#d1b526'; 
            });
            link.addEventListener('mouseout', function() {
                this.style.color = ''; 
            });
        }
    });

    // Sign Up Button - Add a click effect (change background)
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            this.classList.toggle('bg-warning');
            this.classList.toggle('text-black'); 
        });
    }

    

    // Explore Now Links - Underline on hover
    document.querySelectorAll('.explore-now-link').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
            this.style.cursor = 'pointer'; 
        });
        link.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
        });
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.parentNode.querySelector('h4').textContent;
            console.log(`Exploring: ${category}`); 
           
        });
    });



    // Send Email Button - Modified to NOT change text
    const sendBtn = document.querySelector('.send-btn');
    const emailInput = document.querySelector('.email-input');
    if (sendBtn && emailInput) {
        sendBtn.addEventListener('click', function() {
            const email = emailInput.value;
            if (email) {
                console.log(`Sending email: ${email}`);
                emailInput.value = '';
            } else {
                alert('Please enter your email address.'); 
            }
        });
    }


    // Footer Links - Underline on hover and log to console on click
    document.querySelectorAll('.company-link, .quick-link, .legal-link').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.textDecoration = 'underline';
            this.style.cursor = 'pointer';
        });
        link.addEventListener('mouseout', function() {
            this.style.textDecoration = 'none';
        });
        link.addEventListener('click', function(event) {
            event.preventDefault();
            console.log(`Navigating to: ${this.textContent}`); 
            
        });
    });
});
