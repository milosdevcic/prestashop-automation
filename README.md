# Zadatak
## Automatizacija REGISTER i LOGIN funkcionalnosti
Testovi za registraciju i login na demo PrestaShop sajtu koriste Playwright.

1. Registracija mora ići prva: 'npx playwright test tests/register.spec.js'
2. Zatim Login: npx playwright test tests/login.spec.js

Napomena: Testovi su povezani, podaci iz registracije se koriste za login. Ponekad, iz nekog razloga, login test ne prolazi jer ne prepoznaje podatke koji se generisu. U tom slucaju, molim vas, pokrenite test za registraciju jos jednom, pa zatim ponove test za login. Ne znam zbog cega se ovo desava,ali taj proces je potrebno ponoviti sve dok login test ne uspe.
