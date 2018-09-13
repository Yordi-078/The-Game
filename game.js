alert('Welkom bij mijn zombie keuze game!!(12+)');

name = prompt('Vul je naam in');

alert('Welkom ' + name + ', leuk dat je deze game speelt');
answer = prompt('Hoe oud ben je?');
if(answer >= 12) {
    alert('Je bent oud genoeg om deze game te spelen!')    
    answer = prompt('Kies de goede keuze Keuze \n Type (1) Ga naar de stad waar weinig zombies zijn \n Type (2) Ga het bos is waar heel veel zombies zijn ');
    if(answer == 2) 
    {
        alert('Je werd omsingeld door zombies \n Je bent dood!!'); 
        location.reload();
    }
    else{
        answer = prompt('Je bent in de stad en wordt gevolgd door een paar zombies \n Type (1) Klim over een hoog hek \n Type (2) Ren naar binnen in een gebouw');
        if (answer == 1)
        {
            alert('Je probeerde te klimmen maar werd gegrepen door de zombies \n Je bent dood!!');
            location.reload();
        }
        else {
            answer = prompt('Je bent in het gebouw en doet de deur dicht en opslot en het is heel donker \n Type (1) roep om hulp \n Type (2) blijf stil en neem de achterdeur')
            if (answer == 1)
            {
                alert('Je maakte te veel geluid de zombie kwamen af op het geluid er waren er te veel!! \n Je bent dood!!');
                location.reload();
            }
            else{
                answer = prompt('Je kon veilig door de achterdeur en komt Koen en Jasper tegen die jou willen helpen omdat je heel zwak bent. \nType (1) om mee te gaan \nType (2) om weg te gaan');
                if (answer == 2)
                {
                    alert('Je ging weg en vond geen eten je was te zwak!! \n Je bent dood!!')  
                    location.reload();
                }

                else{ 
                    answer = prompt('Je ging mee en Koen en Jasper die je tegenkwam hebben je eten en drinken gegeven een wapen en een mes. \n Je gaat met ze mee op missie \n De missie houd in dat je in een gebouw vol met zombies moet zoeken naar eten.\n Tijdens de missie wordt je gegrepen door een zombie je licht op de grond en hij ligt boven op je. \n Typ (1) om je wapen te pakken en te schieten!(Moeilijk) \n Type (2) om je mes te pakken en de zombie te steken! (Makkelijk) ');
                    if (answer == 1)
                    {
                        alert('Je was te laat!! \n Je bent dood!!');
                        location.reload();
                    }
                    else{
                        alert('Je doodde de zombie met je mes je werd omhoog geholpen door je Koen. \n Jullie gaan terug naar de basis onderweg komen jullie honderde zombies tegen.\n Jullie vluchten maar Jasper wordt gegrepen door een zombie Koen rent terug om hem te helpen maar het is te laat Jasper is dood! ');
                        alert('Jullie laten Jasper achter en gaan terug met het voedsel naar de basis')
                        answer = prompt('Na dat jullie in de basis zijn geweest gaan jullie opzoek naar mensen. \n Er komt iemand naar buiten vanuit een huis en hij begint te schieten op jullie.\n Jullie gaan terug vechten. \n Typ (1) om te schieten Typ (2) om er op af te gaan met je mes');
                        if (answer ==2)
                        {
                           alert('Je werd doodgeschoten toen je erop af liep!! \n Je bent dood!!')
                           location.reload();
                        }
                           else{
                               alert('Je schoot terug de kogel ging recht door zijn hoofd heen \n Jullie pakken zijn spullen en nemen het mee \n Jullie gaan het huis in waar de man vandaan kwam. ');
                               alert('In het huis zien jullie een vrouw aan een touw vastgebonden. \n Jullie bevrijden haar en vragen aan haar naam. \n Ze zegt dat ze Romy heet. ');
                               alert('Ze gaat met jullie mee. \n Jullie gaan terug naar jullie basis.');
                               alert('Na 3 maanden jullie basis uitbreiden zijn er meer mensen bijgekomen en hebben jullie een laatste missie. \n de missie houd in dat jullie de laatste zombies in het gebied moeten verwijderen zodat jullie rustig kunnen bouwen aan de muren');
                               alert('Er is nog maar 1 grote groep zombies die jullie met 6 man moeten vermoorden. \n Jullie komen de groep tegen die richting jullie dorp komt. \n Jullie maken je klaar voor de aanval en waarschuwen iedereen in de basis.  ');
                               answer = prompt('In de tussentijd (3 maanden) hebben jullie een val gemaakt waar de zombies in kunnen vallen. \n De zombies staan op de val \n Typ (1) om De val te activeren \n Typ (2) om de val niet te activeren');
                               if (answer == 2)
                               {
                                alert('De zombies liepen door naar de basis! \n Iedereen in het dorp ging dood!');
                                location.reload();
                               }

                                    else{
                                         answer = prompt('De zombies vallen in de val er lopen nog zombies richting het dorp \n Bepaal jouw einde!! \n Typ (1) Dood de laatste zombies \n Type (2) Laat ze naar de stad gaan');
                                         if (answer ==2)
                                         { 
                                         alert('Je liet de zombies doorlopen naar de basis. \n Iedereen werd gedood door de zombies!! ');
                                         }      
                                
                                             else{
                                                alert('Je hebt iedereen gered door de zombies te vermoorden. \n Jullie hebben de basis versterkt met muren en hebben een veilige plek voor iedereen!');
                                  


                                                 } 
                                        }
                                }
                        }
                    }
                }
            }
       } 
                          }      
else{
    alert('je bent te jong om deze game te spelen!');
}
 
 
    
    