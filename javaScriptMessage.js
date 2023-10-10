
        // ************************Fonctions pour afficher/masquer les sections*******************************

        // Fonctions pour afficher/masquer les sections
        function showSection(sectionId) {
            // Masquer toutes les sections
            document.querySelectorAll('.content').forEach(function (el) {
                el.classList.add('hidden');
            });

            // Afficher la section sélectionnée
            document.getElementById(sectionId).classList.remove('hidden');
        }

        // Gestionnaires d'événements pour les liens de navigation
        document.getElementById("Messages").addEventListener("click", function () {
            showSection('messagesSection');
        });

        document.getElementById("Appels").addEventListener("click", function () {
            showSection('appelsSection');
        });

        document.getElementById("Reglages").addEventListener("click", function () {
            showSection('reglagesSection');
        });

        document.getElementById("Publish").addEventListener("click", function () {
            showSection('publishSection');
        });

        document.getElementById("Actus").addEventListener("click", function () {
            showSection('actusSection');
        });

        // Afficher la section Messages par défaut
        showSection('messagesSection');


    

    
        // *******************************la barre de recherche et la liste des utilisateurs************************

        // Récupérez la barre de recherche et la liste des utilisateurs
        var inputRecherche = document.getElementById("inputSearchMessages");
        var listeUtilisateurs = document.querySelectorAll("#discussion");

        // Créez une copie de la liste des utilisateurs pour réinitialiser l'affichage
        var listeUtilisateursOriginale = Array.from(listeUtilisateurs);

        // Créez un tableau de données pour Fuse.js à partir des noms d'utilisateurs
        var donneesUtilisateurs = [];
        listeUtilisateurs.forEach(function (utilisateur) {
            var nomUtilisateur = utilisateur.querySelector("#userName").innerText;
            donneesUtilisateurs.push({
                nom: nomUtilisateur,
                element: utilisateur
            });
        });

        // Configurez Fuse.js pour la recherche flexible
        var options = {
            keys: ['nom'], // Les clés sur lesquelles vous souhaitez effectuer la recherche
            threshold: 0.3, // Ajustez ce seuil selon vos besoins pour la recherche approximative
            distance: 100 // Ajustez la distance pour la correspondance de caractères
        };
        var fuse = new Fuse(donneesUtilisateurs, options);

        // Ajoutez un événement de saisie à la barre de recherche
        inputRecherche.addEventListener("input", function () {
            var termeRecherche = inputRecherche.value.toLowerCase();

            // Utilisez Fuse.js pour effectuer la recherche flexible
            var resultats = fuse.search(termeRecherche);

            // Affichez ou masquez les utilisateurs en fonction des résultats
            listeUtilisateurs.forEach(function (utilisateur) {
                var estDansLesResultats = resultats.some(function (resultat) {
                    return resultat.item.element === utilisateur;
                });

                utilisateur.style.display = estDansLesResultats ? "block" : "none";
            });

            // Réinitialisez l'affichage si la barre de recherche est vide
            if (termeRecherche === "") {
                listeUtilisateursOriginale.forEach(function (utilisateur) {
                    utilisateur.style.display = "block"; // Affiche tous les utilisateurs
                });
            }
        });

    // **********************************************Script pour entrer et retour message*****************************
    

        document.addEventListener('DOMContentLoaded', function () {
            const destinateurElements = document.querySelectorAll('.user');
            const messagesZone = document.querySelector('.messagesZone');
            const retourButton = document.querySelector('.retourButton');

            const hautMessages = document.querySelector('.hautMessages');
            const discussion = document.querySelector('#discussion');
            const navigation = document.getElementById('navigation');


            function writeMessages() {
                messagesZone.classList.add('yes');
                hautMessages.classList.add('no');
                discussion.classList.add('no');
                navigation.classList.add('no');
                destinateurElements.style.display = 'none';

                // Sélectionnez et manipulez les autres sections ici
            }

            function closeMessages() {
                messagesZone.classList.remove('yes');
                hautMessages.classList.remove('no');
                discussion.classList.remove('no');
                navigation.classList.remove('no');
                // Sélectionnez et manipulez les autres sections ici
            }

            // Attachez des gestionnaires d'événements à chaque élément .user
            destinateurElements.forEach(function (destinateurElement) {
                destinateurElement.addEventListener('click', writeMessages);
            });

            retourButton.addEventListener('click', closeMessages);
        });


//  ************************************************************Gestion de message **********************************
    
        // Fonction pour ajouter un message à la liste des messages
        function ajouterMessage(message) {
            const messagesContainer = document.querySelector('.messagesContainer');
            const messageElement = document.createElement('div');
            messageElement.className = 'message sending';
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
        }

        // Écouter le clic sur le bouton "Envoyer"
        const submitButton = document.querySelector('.submitSend');
        submitButton.addEventListener('click', function () {
            const messageInput = document.querySelector('.inputText');
            const message = messageInput.value;

            if (message.trim() !== '') { // Vérifie que le message n'est pas vide
                ajouterMessage(message);
                messageInput.value = ''; // Effacer le champ de texte après l'envoi
            }
        });

        // Écouter la pression de la touche "Entrée" dans le champ de texte
        const messageInput = document.querySelector('.inputText');
        messageInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                submitButton.click(); // Simuler un clic sur le bouton "Envoyer" lorsque la touche "Entrée" est pressée
            }
        });
        
        // ************************************* Script pour entrer et retour Reglage de Compte*****************************
        
        const sectionOfCompte = document.getElementById('sectionOfReglage');
        const sectionCompte = document.querySelector('.CompteProfile');
        const Compte = document.querySelector('.Compte');
        const retourButtonCompte = document.getElementById('retourButtonCompte');
        sectionCompte.style.display = 'none';
        sectionOfCompte.style.display = 'block';

        function AffCompte() {
            sectionCompte.style.display = 'block';
            sectionOfCompte.style.display = 'none';
        }

        function CloseCompte() {
            sectionCompte.style.display = 'none';
            sectionOfCompte.style.display = 'block';
        }
        Compte.addEventListener('click', AffCompte);
        retourButtonCompte.addEventListener('click', CloseCompte);


        // **************************************** Script pour entrer et retour Reglage Edition***********************

        const sectionOfReglage = document.getElementById('sectionOfReglage');
        const sectionModifier = document.querySelector('.EditProfile');
        const modifier = document.querySelector('.Editer');
        const retourButtonEdit = document.getElementById('retourButtonEdit');
        sectionModifier.style.display = 'none';
        sectionOfReglage.style.display = 'block';

        function Edit() {
            sectionModifier.style.display = 'block';
            sectionOfReglage.style.display = 'none';
        }

        function CloseEdit() {
            sectionModifier.style.display = 'none';
            sectionOfReglage.style.display = 'block';
        }
        modifier.addEventListener('click', Edit);
        retourButtonEdit.addEventListener('click', CloseEdit);

    