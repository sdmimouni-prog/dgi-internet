# DGI Internet Snapshot

Snapshot statique du portail public français de la Direction Générale des Impôts du Maroc.

- Source officielle: https://www.tax.gov.ma/wps/portal/DGI/Accueil/
- Date de capture: 2026-05-24
- Pages capturées: 103
- Portée: pages publiques internes /wps/portal/DGI, hors téléservices externes, variantes linguistiques et espaces nécessitant une session.

## Contenu

- `snapshot/pages/`: copies HTML des pages publiques récupérées.
- `PAGES.md`: liste groupée des pages avec lien local et lien officiel.
- `data/crawl-manifest.json`: manifeste structuré de la capture.
- `index.html`: index navigable local des pages capturées.

Les copies HTML incluent une balise `base` vers le site officiel afin que les ressources relatives du portail restent résolues correctement lors d'une consultation locale.
