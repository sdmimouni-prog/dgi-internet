# DGI Internet Snapshot

Snapshot statique du portail public français de la Direction Générale des Impôts du Maroc.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsdmimouni-prog%2Fdgi-internet&project-name=dgi-internet&repository-name=dgi-internet)

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
