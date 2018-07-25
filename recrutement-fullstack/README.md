# Tests recrutement pour CDI fullstack

ATTENTION pour chaque exercice de la phase 1 et 2, merci de faire un répertoire par exo. Pour rappel, nous n'imposons pas de langage de programmation. Google est autorisé.

## Phase -1
_A faire en 5 min max_
Notre gitlab vous a envoyé un mail, il faut donc cloner vos repos pour être pret.
Ne pas oublier de commiter apres chaque exo.

## Phase 0
_A faire en 30 min max_   
Objectif : aller le plus loin possible dans le jeu, pendant 30 min

## Phase 1
_A faire en 30 min max_   

### Exo 1
Objectif : Sais tu faire une BD ?   
Livrable : .sql  

Faire un schema de db pour le cas suivant:
Dans une entreprise on a des salaries qui ont chacun un nom - prenom - date de naissance.    
chaque employee dispose d'un ou plusieurs contrats qui contienne la date de signature - la duree - le salaire.   
chaque employee a des membres de la famille qui ont eux aussi un nom - prenom - ddn.  
L'entreprise possedes plusieurs service, qui sont diriger par un employee et qui en contiennent plusieurs autres.  
Chaque employee peut avoir plusieurs services


### Exo 2
Objectif : Sais-tu faire du code propre ?    
Livrable : .java | .py | .js | .php  

Faire une boucle de 1 a 100  
quand on rencontre un multiple de 3 imprimer "Chausettes"  
quand on rencontre un multiple de 5 imprimer "Sales"  
quand on recontre un multi de 3 et de 5 imprimer "ChausettesSales"  
sinon imprimer le nombre  

### Exo Bonus 1 
Objectif : Sais-tu faire du code propre (v2) ?    
Livrable : .java | .py | .js | .php  

Write a program that prints out, in reverse order, every multiple of 3 between 1 and 200.


_Tu connais une bonne blague?_


## Phase 2 
_A faire en 1h et 30 min max_  
Pour cette phase, merci d'utiliser le .sql fournit

### Exo 3
Objectif : Sais tu vivre sans un ORM ?   
Livrable : .sql  

Merci de fournir les requetes SQL suivantes : 
   - faire une requete affichant le prenom de toutes les peronnes nes en 1987 trie par ordre alphabetique
   - faire une requete affichant affichant le nombre d'employee par mois de l'annee (E.G
   - faire une requete pour compter le salaire moyen des personnes qui ont 3 enfants ou plus
   - faire une requete pour extraire le salaire median des tranches d'age 20-29 30-39 40-49  others (19- et 50+)
   - faire une requete pour afficher le nombre d'employee par services trie du plus rempli au moins rempli
   - chercher le salaire maximal d'un celibataire sans enfant
   - compter le nombre d'enfant moyen dans l'entreprise

### EXO 4
Objectif : Sais-tu faire un webservice ?    
Livrable : .java | .py | .js | .php  

Merci de créer une API avec ces routes :

    - GET sur /employee/last_name=paolo
        - [{'last_name': paolo, 'employee_id': 1}]
    - GET sur /employee/last_name=paul
        - [{'last_name': paul, 'employee_id': 3}, {'last_name':'paul', 'employee_id':4}]
    - GET sur /employee/last_name=slip_de_bain
        - []
    - PUT sur /employee/employee_id=1 -> header={'key': 'Magic_Key'} - payload={'first_name':'hector'}
         - update
    - PUT sur /employee/employee_id=1 -> header={} - payload={'first_name': 'hector'}
        - fonctionne pas

### Exo Bonus 2 (suite de l'exo 4)
Faire des tests pour l'api  
docker et expose le 80 derriere un proxy

## Phase 3
On déjeune, on débrief et tu te casses 