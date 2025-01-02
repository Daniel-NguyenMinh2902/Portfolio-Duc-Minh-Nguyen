/* 1. Premier partie: Menu hamburger */ 
// Menu hamburger
const menuHamburger = document.querySelector(".menu-hamburger"); // sélectionner tous les éléments HTML 
const navLinks = document.querySelector("nav ul"); // représenter la liste des liens de navigation 

// Réinitialiser l'affichage du menu sur grand écran
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('show'); // Supprimer la classe "show" pour rendre le menu toujours visible
    }
}); 

// ajouter d'un écouteur d'événement au clic 
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
}); 

const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleResize(e) {
    if (e.matches) {
        // Petit écran : laissez le menu contrôlé par le JS
        navLinks.classList.remove('show');
        navLinks.style.display = ''; // Réinitialise la propriété 'display' 
    } else {
        // Grand écran : menu toujours visible
        navLinks.classList.add('show'); 
        navLinks.style.display = 'flex';
    }
}

// Écouter les changements de largeur
mediaQuery.addEventListener('change', handleResize);

// Appeler au chargement pour initialiser correctement l'état
handleResize(mediaQuery);


/* 2. Deuxieme partie: Projet & Modal */ 
// Projets 
const projects = [
    {
        id: 1,
        desc: "Description détaillée du projet 1.",
        link: "https://github.com/Daniel-NguyenMinh2902/Product-List" 
    },
    {
        id: 2,
        desc: "Description détaillée du projet 2.",
        link: "https://github.com/Daniel-NguyenMinh2902/Ann-e-Bissextile-Verification-Formulaire-Client"  
    },
    {
        id: 3, 
        desc: "Description détaillée du projet 3.",
        link: "https://github.com/Daniel-NguyenMinh2902/Ecosysteme" 
    },
    {
        id: 4, 
        desc: "Description détaillée du projet 4.",
        link: "https://github.com/Daniel-NguyenMinh2902/Automate-Mathematiques-Discretes" 
    }
];

// afficher un modal (fenêtre superposée) contenant des détails sur un projet 
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeModal = document.querySelector('.modal .close');

// sélectionner tous les éléments HTML représentant des projets 
document.querySelectorAll('.projet').forEach(projet => {
    projet.addEventListener('click', () => {  
        const id = projet.dataset.id; // accéder à data-id de HTML 
        const project = projects.find(p => p.id == id); // rechercher l'objet correspondant à id récupéré. 

        // dans le modal 
        modalTitle.textContent = project.title;  
        modalDesc.textContent = project.desc;  
        modalLink.href = project.link; 

        modal.style.display = 'flex'; // afficher le modal en utilisant CSS 
    });
});

// fermer la modal en cliquant sur le modal ou à l'exterieur du modal 
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}); 


/* 3.Troisieme partie: Valider la formulaire  
// Valider les données du formulaire
function validateForm(){
    // Références aux champs
    var nom = document.getElementById('nom').value; 
    var prenom = document.getElementById('prenom').value;  
    var email = document.getElementById('email').value; 
    var telephone = document.getElementById('telephone').value;     
    
    // creer l'objet client avec la methode: presentation
    const client = {
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,   

        presentation: function () {
            alert(`Bonjour, je suis ${this.prenom} ${this.nom}, vous pouvez me contacter sur ${this.email} ou au ${this.telephone}`);
        }
    };
    
    client.presentation();
}

// Ajouter l'événement de soumission au formulaire
const form = document.getElementById('form-contact');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    validateForm(); // Appeler la fonction de validation  
});  
*/ 

const form = document.getElementById('form-contact'); 

const nomInput = document.getElementById('nom'); 
const prenomInput = document.getElementById('prenom'); 
const emailInput = document.getElementById('email'); 
const telephoneInput = document.getElementById('telephone');  

const errorNom = document.getElementById('error-nom'); 
const errorPrenom = document.getElementById('error-prenom');
const errorEmail = document.getElementById('error-email');
const errorTelephone = document.getElementById('error-telephone'); 

const successMessage = document.getElementById('success-message'); 

form.addEventListener('submit', function (event){ 
    event.preventDefault(); 

    const nomValue = nomInput.value.trim(); 
    const prenomValue = prenomInput.value.trim(); 
    const emailValue = emailInput.value.trim(); 
    const telephoneValue = telephoneInput.value.trim(); 
    
    /* verifier nom */ 
    if(!nomValue){ 
        errorNom.textContent = 'Name cannot be empty!'; 
    }else if(nomValue.length < 3){ 
        errorNom.textContent = 'Name must be at least 3 characters long!'; 
    }else{
        //errorNom.textContent = '';   
        successMessage.textContent = 'Submitted succesfully!'; 
        document.getElementById("result").innerText = "Submitted succesfully!"; 
        form.reset(); 
    } 

    /* verifier prenom */ 
    if(!prenomValue){ 
        errorPrenom.textContent = 'SurName cannot be empty!'; 
    }else if(prenomValue.length < 3){ 
        errorPrenom.textContent = 'SurName must be at least 3 characters long!'; 
    }else{
        //errorPrenom.textContent = '';   
        successMessage.textContent = 'Submitted succesfully!';
        document.getElementById("result").innerText = "Submitted succesfully!"; 
        form.reset(); 
    } 

    /* verifier email */ 
    if(!emailValue){ 
        errorEmail.textContent = 'Email cannot be empty!'; 
    }else if(!emailValue.includes('@') && !emailValue.includes('.')){ 
        errorEmail.textContent = 'Email must includes @ and a dot (.)'; 
    }else{
        //errorEmail.textContent = '';   
        successMessage.textContent = 'Submitted succesfully!';
        document.getElementById("result").innerText = "Submitted succesfully!"; 
        form.reset(); 
    }  

    /* verifier numero telephone */ 
    if(!telephoneValue){  
        errorTelephone.textContent = 'Telephone number cannot be empty!'; 
    }else if(nomValue.length < 10){ 
        errorTelephone.textContent = 'Telephone number must be at least 10 characters long!'; 
    }else{
        //errorTelephone.textContent = '';   
        successMessage.textContent = 'Submitted succesfully!';
        document.getElementById("result").innerText = "Submitted succesfully!"; 
        form.reset(); 
    } 

    //successMessage.textContent = 'Submitted succesfully!';  
    form.reset(); 
      
}); 
 

/* 4. Quatrieme partie: Dark mode */ 
// Dark mode 
// activer/désactiver le mode sombre 
const darkModeButton = document.getElementById('toggle-dark-mode');
 
darkModeButton.addEventListener('click', () => {
    // appliquer la classe "dark-mode" sur l'élément <body> 
    document.body.classList.toggle('dark-mode'); 
}); 


