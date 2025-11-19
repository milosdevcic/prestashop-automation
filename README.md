# Zadatak
## Automatizacija REGISTER i LOGIN funkcionalnosti
Testovi za registraciju i login na demo PrestaShop sajtu koriste Playwright.

### Komande za pokretanje testova
1. Registracija mora ići prva: 'npx playwright test tests/register.spec.js'
2. Zatim Login: 'npx playwright test tests/login.spec.js'

### Vazna napomena:
Testovi su povezani, podaci iz registracije se koriste za login. Ponekad, iz nekog razloga, login test ne prolazi jer ne prepoznaje podatke koji se generisu. U tom slucaju, molim vas, pokrenite test za registraciju jos jednom, pa zatim ponovite test za login. Ne znam zbog cega se ovo desava, ali taj proces je potrebno ponavljati sve dok login test ne uspe. Vecinu vremena login test prolazi iz prve, ali desava se i da situacija bude drugacija. Hvala
