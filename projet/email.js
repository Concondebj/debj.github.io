// Remplace ces valeurs par les tiennes depuis le tableau de bord EmailJS
const SERVICE_ID = 'service_kfarr5k';
const TEMPLATE_ID = 'template_cf27n0l';
const USER_ID = 'Nxey3E6eXzYiXGcx6';

// Initialisation de EmailJS
emailjs.init(USER_ID);

// Fonction pour envoyer l'e-mail
function sendEmail() {
    // Récupère les informations du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envoie l'e-mail via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        reply_to: email,
        message: message
    })
    .then((response) => {
        // Gère la réponse en cas de succès
        console.log('E-mail envoyé avec succès !', response);
        alert('Votre e-mail a bien été envoyé !');
    }, (error) => {
        // Gère les erreurs en cas d'échec
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        alert('Une erreur est survenue lors de l\'envoi de l\'e-mail. Veuillez réessayer plus tard.');
    });
}
