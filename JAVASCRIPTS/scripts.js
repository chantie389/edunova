// ==========================================
// ENQUIRY FORM VALIDATION
// ==========================================
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('enq_name').value.trim();
    const email = document.getElementById('enq_email').value.trim();
    const type = document.getElementById('enq_type').value;
    const message = document.getElementById('enq_message').value.trim();
    const msgDiv = document.getElementById('enquiry_msg');

    if (name.length < 2) {
      msgDiv.textContent = 'Please enter a valid name (at least 2 characters).';
      msgDiv.className = 'form-message error';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      msgDiv.textContent = 'Please enter a valid email address.';
      msgDiv.className = 'form-message error';
      return;
    }
    if (!type) {
      msgDiv.textContent = 'Please select what your enquiry is about.';
      msgDiv.className = 'form-message error';
      return;
    }
    if (message.length < 10) {
      msgDiv.textContent = 'Please write a message (at least 10 characters).';
      msgDiv.className = 'form-message error';
      return;
    }

    let responseText = '';
    if (type === 'service') {
      responseText = 'Thank you for your interest in our tutoring services! We will send you course details and pricing within 24–48 hours.';
    } else if (type === 'volunteer') {
      responseText = 'Thank you for wanting to volunteer! We will contact you with available tutor positions and requirements.';
    } else if (type === 'sponsor') {
      responseText = 'Thank you for your interest in sponsoring us! We will share our sponsorship proposal and impact report shortly.';
    }

    msgDiv.textContent = responseText;
    msgDiv.className = 'form-message success';
    enquiryForm.reset();
  });
}

// ==========================================
// CONTACT FORM VALIDATION
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('con_name').value.trim();
    const email = document.getElementById('con_email').value.trim();
    const subject = document.getElementById('con_subject').value.trim();
    const message = document.getElementById('con_message').value.trim();
    const msgDiv = document.getElementById('contact_msg');

    if (name.length < 2) {
      msgDiv.textContent = 'Please enter your full name.';
      msgDiv.className = 'form-message error';
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      msgDiv.textContent = 'Please enter a valid email address.';
      msgDiv.className = 'form-message error';
      return;
    }
    if (subject.length < 3) {
      msgDiv.textContent = 'Please enter a subject.';
      msgDiv.className = 'form-message error';
      return;
    }
    if (message.length < 15) {
      msgDiv.textContent = 'Please write a detailed message (at least 15 characters).';
      msgDiv.className = 'form-message error';
      return;
    }

    msgDiv.textContent = 'Message sent successfully! We will get back to you soon.';
    msgDiv.className = 'form-message success';
    contactForm.reset();
  });
}
// ===== FAQ ACCORDION =====
const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
  button.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle('open');
    
    const isOpen = answer.classList.contains('open');
    this.textContent = isOpen 
      ? this.textContent.replace('▾', '▴') 
      : this.textContent.replace('▴', '▾');
  });
});