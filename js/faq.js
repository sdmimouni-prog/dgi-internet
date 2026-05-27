const faqItems = [
  {
    "question": "Quels sont les avantages fiscaux accordés en matière d'IS aux centres de gestion de comptabilité ?",
    "answer": "<p>Les sociétés exploitant les centres de gestion de comptabilité agréés sont exonérées de l'IS pendant une période de quatre ans suivant la date de leur agrément.</p>",
    "tags": [
      "IS",
      "avantages"
    ]
  },
  {
    "question": "La TVA sur la location longue durée de véhicules et le carburant est-elle déductible ?",
    "answer": "<p>Conformément à l'article 106 du CGI, seule la TVA ayant grevé les véhicules de transport collectif du personnel des entreprises est déductible. La TVA liée à la location des véhicules concernés n'est donc pas déductible.</p><p>La TVA grevant les produits pétroliers non utilisés comme combustibles, matières premières ou agents de fabrication n'est pas déductible non plus, sauf pour le gasoil utilisé pour les besoins d'exploitation des véhicules de transport collectif du personnel.</p>",
    "tags": [
      "TVA",
      "déduction"
    ]
  },
  {
    "question": "Quelle est la valeur juridique du référentiel des prix de l'immobilier publié par la DGI ?",
    "answer": "<p>Le formulaire ADP020F renvoie à l'article 83 du CGI. Il s'agit d'une annexe à la déclaration des profits immobiliers à servir en cas d'acceptation du paiement des droits sur la base du référentiel des prix.</p><p>Il ne s'agit pas d'une obligation légale, mais d'une procédure administrative permettant d'éviter la révision du prix de cession.</p>",
    "tags": [
      "immobilier",
      "IR"
    ]
  },
  {
    "question": "Comment payer les droits de timbre de quittance lorsque le chiffre d'affaires ne dépasse pas 2 millions de dirhams ?",
    "answer": "<p>Les entreprises dont le chiffre d'affaires ne dépasse pas 2 000 000 DH ne sont pas concernées par les dispositions de l'article 6 de la Loi de finances 2015.</p><p>Dans ce cas, les droits de timbre de quittance sont payables, sur option, soit par apposition de timbres mobiles sur les titres, soit par déclaration pour les entreprises utilisant un grand nombre de timbres.</p><p>L'option pour le paiement sur déclaration peut être exercée par demande auprès du service d'assiette dont dépend le domicile fiscal, le siège social ou le principal établissement.</p>",
    "tags": [
      "timbre"
    ]
  },
  {
    "question": "Comment déposer une dispense de versement d'un acompte ?",
    "answer": "<p>L'article 170-IV du CGI permet à l'entreprise qui estime que le montant d'un ou plusieurs acomptes versés est égal ou supérieur à l'impôt finalement dû d'être dispensée d'effectuer de nouveaux versements.</p><p>L'entreprise doit remettre à l'inspecteur des impôts du lieu de son siège social ou de son principal établissement au Maroc, quinze jours avant la date d'exigibilité du prochain versement, une déclaration datée et signée conforme au modèle ADM090F.</p>",
    "tags": [
      "IS",
      "acompte"
    ]
  },
  {
    "question": "Un particulier qui vend sa voiture à une société doit-il émettre une facture avec TVA ?",
    "answer": "<p>Lorsqu'il s'agit d'une opération occasionnelle réalisée par un contribuable particulier ne disposant pas d'identifiant fiscal, aucune facture n'est exigible. La société peut toutefois signer avec l'intéressé un acte de cession comme pièce justificative.</p>",
    "tags": [
      "TVA",
      "cession"
    ]
  },
  {
    "question": "Quelles sont les pièces demandées suite à une cession de parts sociales ?",
    "answer": "<p>La société concernée doit informer l'inspecteur des impôts dont relève son siège social en déposant un dossier comprenant :</p><ul><li>l'acte de cession des parts sociales légalisé et enregistré ;</li><li>le procès-verbal de l'assemblée générale constatant la cession ;</li><li>une copie des statuts mis à jour.</li></ul>",
    "tags": [
      "enregistrement",
      "société"
    ]
  },
  {
    "question": "Quel est le taux d'enregistrement d'un acte de donation relatif à une cession d'actions entre époux ?",
    "answer": "<p>Les cessions à titre gratuit portant sur les parts et actions de sociétés non cotées, lorsqu'elles interviennent en ligne directe et entre époux, frères et sœurs, sont soumises au taux de 1,5% en matière de droits d'enregistrement.</p>",
    "tags": [
      "enregistrement"
    ]
  },
  {
    "question": "La vente d'un terrain nu entre sociétés installées dans la même zone franche bénéficie-t-elle de l'exonération de l'IS ?",
    "answer": "<p>Les opérations réalisées entre entreprises installées dans la même zone franche d'exportation bénéficient des avantages fiscaux prévus par le CGI lorsque le produit final est destiné à l'exportation et que le transfert de marchandises est effectué conformément à la législation douanière.</p><p>La cession d'un terrain nu par une société installée dans la zone franche de Tanger à une autre société installée dans la même zone ne bénéficie donc pas de ces avantages.</p>",
    "tags": [
      "IS",
      "zone franche"
    ]
  },
  {
    "question": "Une société doit-elle facturer la TVA sur la cession d'un bien d'occasion à une société installée dans une zone franche d'exportation ?",
    "answer": "<p>Les produits livrés aux sociétés installées dans les zones franches d'exportation et provenant du territoire assujetti sont exonérés de TVA avec droit à déduction, à condition que le paiement soit effectué en devises. Cette exonération n'est soumise à aucune formalité.</p>",
    "tags": [
      "TVA",
      "zone franche"
    ]
  },
  {
    "question": "La TVA acquittée à la douane sur des articles en céramique ouvre-t-elle droit à déduction ?",
    "answer": "<p>Conformément aux articles 101 et 106 du CGI, la TVA grevant les éléments du prix d'une opération assujettie à la TVA et liée à l'exploitation est déductible de la TVA applicable à cette opération.</p>",
    "tags": [
      "TVA",
      "douane"
    ]
  },
  {
    "question": "Quel est le traitement fiscal de la plus-value lors de la transformation d'une personne physique en sociétés personnes morales ?",
    "answer": "<p>Les avantages fiscaux de l'article 247 du CGI sont accordés à une nouvelle société créée suite à l'apport de l'ensemble des éléments de l'actif et du passif d'une entreprise professionnelle relevant de l'IR à une seule société personne morale passible de l'IS.</p>",
    "tags": [
      "IS",
      "IR"
    ]
  },
  {
    "question": "Pour les sociétés de leasing, la TSC est-elle comprise dans la base de TVA ?",
    "answer": "<p>L'article 96 stipule que le chiffre d'affaires imposable à la TVA comprend le prix des services, les recettes accessoires, ainsi que les frais, droits et taxes y afférents, à l'exception de la TVA.</p>",
    "tags": [
      "TVA",
      "TSC"
    ]
  },
  {
    "question": "Les formations et cours dispensés via internet sont-ils exonérés de TVA ?",
    "answer": "<p>Ces cours sont passibles de la TVA au taux de 20%.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Une société de distribution de papier peut-elle établir une facture sans TVA à une université ?",
    "answer": "<p>Les universités marocaines ne sont pas exonérées de la TVA. Le papier exonéré sans droit à déduction est le papier destiné à imprimer les journaux lorsqu'il est dirigé vers une imprimerie, conformément à l'article 91-I-E-2° du CGI.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Les obligations déclaratives demeurent-elles en vigueur pour une société mise en veilleuse ?",
    "answer": "<p>Une entreprise en veilleuse doit déposer ses déclarations fiscales et effectuer les paiements correspondants en matière d'IS, d'IR et de TVA. La taxe professionnelle continue à être émise sur la base d'une valeur locative de principe.</p>",
    "tags": [
      "déclaration",
      "société"
    ]
  },
  {
    "question": "Quelle démarche accomplir auprès de l'administration fiscale après une mise à jour des statuts ?",
    "answer": "<p>La société doit informer l'inspecteur des impôts du lieu de son siège social des modifications apportées aux statuts. Elle doit déposer les copies des procès-verbaux relatifs aux modifications ainsi qu'une copie des statuts modifiés auprès du bureau d'accueil de la Direction régionale des impôts. Ces copies doivent être légalisées et enregistrées.</p>",
    "tags": [
      "société"
    ]
  },
  {
    "question": "Quelle est la procédure pour une ambassade lors de l'achat en exonération de TVA d'un véhicule ?",
    "answer": "<p>Les missions diplomatiques, consulaires et organisations internationales ayant le statut diplomatique peuvent bénéficier de l'exonération de TVA sous réserve de réciprocité.</p><p>La demande de restitution est adressée à la Direction régionale des impôts dont relève le siège de l'ambassade, accompagnée des factures d'achat. Le dossier comprend notamment les formulaires AAC141F et AAC142F, ainsi que les factures ou pièces justificatives.</p>",
    "tags": [
      "TVA",
      "exonération"
    ]
  },
  {
    "question": "Comment déclarer la TVA grevant les prestations des non-résidents ?",
    "answer": "<p>Il s'agit du mécanisme d'auto-liquidation. Le client marocain déclare la taxe due par la personne non résidente à la ligne 129 de sa déclaration du chiffre d'affaires du mois ou du trimestre suivant le paiement, puis opère la déduction de la taxe dans la même déclaration.</p><p>En cas de situation créditrice, la ligne 204 « crédit accompagné de paiement » doit être servie. La récupération de TVA est renseignée selon la nature de la prestation et le taux applicable, notamment aux lignes 145, 147, 149 ou 151.</p>",
    "tags": [
      "TVA",
      "non-résident"
    ]
  },
  {
    "question": "L'exonération de TVA sur les biens d'équipement destinés à l'enseignement privé concerne-t-elle aussi les biens importés ?",
    "answer": "<p>Conformément à l'article 123-24° du CGI, les biens d'équipement à inscrire dans un compte d'immobilisation destinés à l'enseignement privé, importés de l'étranger ou acquis localement, bénéficient de l'exonération de TVA.</p>",
    "tags": [
      "TVA",
      "exonération"
    ]
  },
  {
    "question": "Un client exportateur peut-il demander une vente sans TVA de sacs d'emballage ?",
    "answer": "<p>Le client doit fournir un exemplaire de l'attestation d'achat en exonération de TVA délivrée par l'administration fiscale régionale. Cette attestation doit comporter les références du fournisseur et les opérations bénéficiant de l'achat en exonération.</p>",
    "tags": [
      "TVA",
      "export"
    ]
  },
  {
    "question": "Le délai d'exonération de TVA pour l'achat de biens d'investissement est-il de 24 ou 36 mois ?",
    "answer": "<p>La prorogation du délai d'exonération de TVA sur les achats de biens d'investissement à inscrire dans un compte d'immobilisations, de 24 à 36 mois, concerne aussi les entreprises qui n'avaient pas épuisé le délai de 24 mois au 31 décembre 2014.</p>",
    "tags": [
      "TVA",
      "investissement"
    ]
  },
  {
    "question": "Quel est le délai pour demander le remboursement d'un crédit de TVA ?",
    "answer": "<p>La demande doit être déposée auprès du service local des impôts dont relève la société à la fin de chaque trimestre de l'année civile pour les opérations réalisées au cours du ou des trimestres écoulés. Le dépôt doit intervenir dans un délai n'excédant pas l'année suivant le trimestre concerné.</p>",
    "tags": [
      "TVA",
      "remboursement"
    ]
  },
  {
    "question": "L'indemnité d'assurance reçue pour la réparation d'un véhicule de location est-elle passible de TVA ?",
    "answer": "<p>Le remboursement des frais de réparation du véhicule de location par une compagnie d'assurances est un acte civil qui n'est pas passible de la TVA.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Une association qui forme gratuitement des jeunes est-elle assujettie à l'IS ?",
    "answer": "<p>Les associations à but non lucratif sont exonérées en matière d'IS pour les seules opérations conformes à leur objet défini dans leurs statuts.</p>",
    "tags": [
      "IS",
      "association"
    ]
  },
  {
    "question": "Quel est le traitement TVA de la vente de tickets de visite de monuments historiques ?",
    "answer": "<p>Cette opération est traitée comme une vente de services passible de la TVA au taux de 20%.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Comment obtenir un document attestant l'identification auprès de l'Administration fiscale ?",
    "answer": "<p>Il faut déposer une demande modèle AAC139, téléchargeable sur le portail de la DGI dans la rubrique « formulaires fiscaux », auprès de la Direction régionale des impôts dont vous relevez afin d'obtenir un bulletin d'identification fiscale.</p>",
    "tags": [
      "identification"
    ]
  },
  {
    "question": "Quelle sanction appliquer pour une déclaration hors délai comportant un crédit de TVA ?",
    "answer": "<p>Selon l'article 204 du CGI, le crédit de la période est réduit de 15%.</p>",
    "tags": [
      "TVA",
      "sanction"
    ]
  },
  {
    "question": "Une construction non achevée destinée à la vente est-elle passible de la contribution sociale de solidarité ?",
    "answer": "<p>Une construction non achevée destinée à la vente n'est pas passible de la contribution sociale de solidarité en matière de livraison à soi-même, car l'intéressé n'a pas encore obtenu le permis d'habiter qui constitue le fait générateur.</p>",
    "tags": [
      "CSS",
      "immobilier"
    ]
  },
  {
    "question": "L'abonnement à un site web marocain de documentation juridique est-il passible de TVA ?",
    "answer": "<p>L'abonnement à une base de données électronique contenant des ouvrages et revues à caractère culturel ou éducatif est exonéré de TVA, conformément à l'article 91-I-E-1° du CGI.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Dans la procédure de remboursement du crédit de TVA cumulé, peut-on demander seulement une partie du crédit ?",
    "answer": "<p>L'intéressé peut demander le remboursement de la totalité ou d'une partie de son crédit cumulé dans les seuils et délais fixés par voie réglementaire.</p>",
    "tags": [
      "TVA",
      "remboursement"
    ]
  },
  {
    "question": "Quel taux de TVA appliquer sur la vente d'une partie d'un stock de gasoil ?",
    "answer": "<p>Le taux de TVA à appliquer est de 10%.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "La base de calcul des droits de timbre est-elle HT ou TTC ?",
    "answer": "<p>Les droits de timbre sont calculés sur le montant global TTC.</p>",
    "tags": [
      "timbre"
    ]
  },
  {
    "question": "Quelle procédure suivre pour informer l'administration fiscale de la cessation d'activité d'une SARL ?",
    "answer": "<p>Les documents à fournir comprennent :</p><ul><li>le procès-verbal de dissolution ;</li><li>le procès-verbal de clôture de liquidation ;</li><li>l'attestation de radiation du registre du commerce ;</li><li>l'extrait de rôle délivré par le percepteur ;</li><li>la déclaration du résultat fiscal de la dernière période d'activité et, le cas échéant, celle de l'exercice précédent ;</li><li>une déclaration TVA dans les trente jours suivant la cessation.</li></ul>",
    "tags": [
      "société",
      "cessation"
    ]
  },
  {
    "question": "Une activité de conseil en cosmétique et de négoce sans local est-elle soumise à la TVA ?",
    "answer": "<p>L'intéressé est assujetti à la TVA au taux de 20% lorsque son chiffre d'affaires de l'année N-1 dépasse deux millions de dirhams.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "Les succursales installées au Maroc dans le cadre d'une activité de négoce sont-elles passibles de l'IS ?",
    "answer": "<p>Les succursales établies au Maroc sont passibles de l'IS dans les conditions de droit marocain.</p>",
    "tags": [
      "IS"
    ]
  },
  {
    "question": "Quel est le taux de l'impôt retenu à la source sur les produits des actions, parts sociales et revenus assimilés ?",
    "answer": "<p>Le taux est fixé à 15%.</p>",
    "tags": [
      "retenue à la source"
    ]
  },
  {
    "question": "Une société domiciliataire est-elle solidaire en matière fiscale ?",
    "answer": "<p>Les sociétés domiciliataires restent solidaires et responsables en matière fiscale, conformément à l'article 93 du Code de recouvrement des créances publiques.</p>",
    "tags": [
      "société"
    ]
  },
  {
    "question": "Quelles sanctions appliquer pour un dépôt tardif de la déclaration du résultat fiscal relative à la cessation ?",
    "answer": "<p>En cas de cessation, la déclaration du résultat fiscal doit être souscrite dans les quarante-cinq jours à compter de la date de cessation. Passé ce délai, une majoration de 5% est appliquée lorsque le dépôt ne dépasse pas trente jours de retard, et de 15% lorsque le dépôt intervient au-delà de trente jours.</p>",
    "tags": [
      "sanction",
      "cessation"
    ]
  },
  {
    "question": "Quels documents fournir pour informer l'administration fiscale du transfert de siège d'une SA ou d'une SARL ?",
    "answer": "<p>Le dossier comprend notamment le procès-verbal enregistré de l'assemblée générale décidant le transfert, le contrat de bail enregistré ou l'acte de propriété du nouveau siège, la déclaration ADC140F et l'attestation de réinscription à la taxe professionnelle délivrée par l'inspecteur dont relève le nouveau siège.</p>",
    "tags": [
      "société",
      "siège social"
    ]
  },
  {
    "question": "Comment renseigner le montant de TVA remboursé sur la déclaration TVA ?",
    "answer": "<p>Le montant de TVA remboursé doit être imputé ou annulé à la ligne 170 « crédit de la période précédente » de la déclaration TVA du mois ou du trimestre au cours duquel le remboursement a été encaissé.</p>",
    "tags": [
      "TVA",
      "remboursement"
    ]
  },
  {
    "question": "Quel est le délai de dépôt de la déclaration de contribution sociale de solidarité sur les livraisons à soi-même de construction ?",
    "answer": "<p>Conformément à l'article 277 du CGI, cette déclaration doit être déposée dans les quatre-vingt-dix jours suivant la date de délivrance du permis d'habiter.</p>",
    "tags": [
      "CSS",
      "immobilier"
    ]
  },
  {
    "question": "Quel régime fiscal appliquer à une construction d'habitation personnelle avec local commercial ?",
    "answer": "<p>La livraison à soi-même de construction est soumise à la contribution sociale de solidarité lorsqu'il s'agit d'une opération occasionnelle à usage d'habitation, y compris les locaux commerciaux rattachés à l'unité.</p><table><thead><tr><th>Superficie couverte</th><th>Tarif</th></tr></thead><tbody><tr><td>0 à 300 m²</td><td>Exonérée</td></tr><tr><td>301 à 400 m²</td><td>60 DH/m²</td></tr><tr><td>401 à 500 m²</td><td>100 DH/m²</td></tr><tr><td>Supérieure à 500 m²</td><td>150 DH/m²</td></tr></tbody></table>",
    "tags": [
      "CSS",
      "immobilier"
    ]
  },
  {
    "question": "Les associations sont-elles dans l'obligation de s'inscrire auprès de l'Administration fiscale ?",
    "answer": "<p>Les associations, coopératives et organismes assimilés doivent s'identifier auprès de la Direction régionale des impôts dont ils relèvent. Le dossier comprend notamment une copie de la décision d'agrément, les statuts enregistrés, la liste des adhérents, le bail ou titre de propriété et la déclaration d'existence ADM050F.</p>",
    "tags": [
      "association",
      "identification"
    ]
  },
  {
    "question": "Y a-t-il une retenue à la source sur les dividendes versés à des personnes physiques par une entreprise exportatrice exonérée d'IS ?",
    "answer": "<p>Le CGI ne prévoit pas d'exonération de retenue à la source sur les dividendes versés par des sociétés, soumises ou exonérées de l'IS, à des personnes physiques.</p>",
    "tags": [
      "retenue à la source",
      "IS"
    ]
  },
  {
    "question": "Une société nouvellement créée d'import-export peut-elle bénéficier de l'exonération de TVA pour ses biens d'investissement ?",
    "answer": "<p>Les entreprises assujetties à la TVA qui acquièrent des biens d'investissement à inscrire dans un compte d'immobilisation et ouvrant droit à déduction bénéficient de l'exonération de TVA pendant trente-six mois à compter du début d'activité.</p>",
    "tags": [
      "TVA",
      "investissement"
    ]
  },
  {
    "question": "Quel taux de TVA est appliqué à l'importation d'articles électroménagers ?",
    "answer": "<p>Les articles électroménagers sont passibles de la TVA au taux normal de 20%.</p>",
    "tags": [
      "TVA",
      "importation"
    ]
  },
  {
    "question": "Quel traitement TVA appliquer à l'importation de pots destinés à la culture de plantes ?",
    "answer": "<p>Les pots destinés à la culture de plantes sont soumis au taux normal de TVA de 20% et ne répondent pas aux critères d'éligibilité à l'exonération.</p>",
    "tags": [
      "TVA",
      "importation"
    ]
  },
  {
    "question": "Quel taux de TVA appliquer au transport de personnes ?",
    "answer": "<p>Le transport de voyageurs et de marchandises est passible de la TVA au taux de 14%, à l'exclusion des opérations de transport ferroviaire.</p>",
    "tags": [
      "TVA",
      "transport"
    ]
  },
  {
    "question": "Quelles formalités pour l'attestation d'achat en exonération de TVA sur le matériel médical pour handicapés ?",
    "answer": "<p>Les ventes d'appareillages spécialisés destinés exclusivement aux handicapés bénéficient de l'exonération de TVA sans droit à déduction. Cette exonération est accordée de plein droit, sans formalité administrative.</p>",
    "tags": [
      "TVA",
      "exonération"
    ]
  },
  {
    "question": "La TVA sur un dîner d'inauguration facturé par un traiteur ouvre-t-elle droit à déduction ?",
    "answer": "<p>La TVA sur les frais de réception n'ouvre pas droit à déduction. Les frais de mission, réception, représentation, hébergement, restauration, organisation de spectacles ou dépenses similaires sont exclus du droit à déduction.</p>",
    "tags": [
      "TVA",
      "déduction"
    ]
  },
  {
    "question": "Quel régime TVA appliquer à une exportation réalisée par l'intermédiaire d'un commissionnaire ?",
    "answer": "<p>L'opération d'exportation réalisée par l'intermédiaire d'un commissionnaire est exonérée de TVA avec droit à déduction. Le vendeur doit délivrer au commissionnaire une facture détaillant les marchandises et leur prix, et le commissionnaire doit remettre une attestation valable pendant l'année de sa délivrance.</p>",
    "tags": [
      "TVA",
      "export"
    ]
  },
  {
    "question": "Un médecin peut-il bénéficier de l'achat en exonération de TVA pour des biens d'investissement ?",
    "answer": "<p>L'activité de médecin est exonérée sans droit à déduction de la TVA. L'intéressé ne peut donc pas bénéficier de l'achat en exonération de TVA sur ses biens d'investissement.</p>",
    "tags": [
      "TVA",
      "exonération"
    ]
  },
  {
    "question": "Y a-t-il des changements concernant la contribution sociale de solidarité dans la Loi de finances 2016 ?",
    "answer": "<p>Depuis le 1er janvier 2016, le tarif fixe de 60 DH/m² a été remplacé par un barème proportionnel tenant compte des superficies couvertes, tout en conservant l'exonération pour les superficies n'excédant pas 300 m². Le tarif fixe demeure applicable aux constructions dont le permis d'habiter a été délivré avant le 1er janvier 2016.</p>",
    "tags": [
      "CSS"
    ]
  },
  {
    "question": "Une subvention reçue par une entreprise installée en zone franche est-elle soumise à la TVA ?",
    "answer": "<p>Le chiffre d'affaires réalisé à l'intérieur de la zone franche est situé en dehors du champ d'application de la TVA. La subvention n'est donc pas soumise à la TVA dès lors que le chiffre d'affaires réalisé est hors champ.</p>",
    "tags": [
      "TVA",
      "zone franche"
    ]
  },
  {
    "question": "Quelles sont les nouvelles dispositions concernant le crédit de la cotisation minimale ?",
    "answer": "<p>L'imputation du crédit de la cotisation minimale a été supprimée suite aux dispositions de la Loi de finances n° 70-15, pour les exercices ouverts à partir de janvier 2016.</p>",
    "tags": [
      "cotisation minimale"
    ]
  },
  {
    "question": "Quelle exonération est prévue pour la cotisation minimale ?",
    "answer": "<p>L'article 144 du CGI prévoit l'exonération de la cotisation minimale pour les sociétés, autres que les concessionnaires de services publics, pendant trente-six mois à partir du début d'exploitation. Cette exonération cesse à l'expiration des soixante premiers mois suivant la constitution.</p>",
    "tags": [
      "cotisation minimale",
      "IS"
    ]
  },
  {
    "question": "Quelles mesures fiscales concernent l'augmentation de capital ?",
    "answer": "<p>Les dispositions de la Loi de finances 2009, prorogées jusqu'au 31 décembre 2013, prévoyaient une réduction d'IS égale à 20% du montant de l'augmentation de capital pour les sociétés remplissant les conditions prévues, notamment un chiffre d'affaires inférieur à 50 millions de dirhams HT sur les quatre derniers exercices.</p>",
    "tags": [
      "IS",
      "capital"
    ]
  },
  {
    "question": "Comment imputer les excédents de versement de l'IS ?",
    "answer": "<p>L'excédent d'impôt versé par la société est imputé d'office sur les acomptes provisionnels dus au titre des exercices suivants et, éventuellement, sur l'impôt dû au titre de ces exercices.</p>",
    "tags": [
      "IS"
    ]
  },
  {
    "question": "Comment opérer la retenue à la source sur les rémunérations versées aux personnes non résidentes ?",
    "answer": "<p>La retenue à la source doit être opérée par les contribuables payant ou intervenant dans le paiement des produits prévus à l'article 15 du CGI. Le taux est de 10% sur le montant hors taxe des rémunérations brutes, avec versement dans le mois suivant celui de la retenue.</p>",
    "tags": [
      "retenue à la source",
      "non-résident"
    ]
  },
  {
    "question": "Quel régime TVA appliquer aux opérations réalisées dans les zones franches et en dehors ?",
    "answer": "<p>Les produits livrés et prestations rendues dans les zones franches d'exportation, provenant du territoire assujetti, sont exonérés de TVA avec droit à déduction. Les opérations effectuées avec des entreprises établies en dehors de ces zones sont passibles de la TVA dans les conditions de droit commun.</p>",
    "tags": [
      "TVA",
      "zone franche"
    ]
  },
  {
    "question": "Quels avantages en matière d'IS sont prévus pour l'activité d'export ?",
    "answer": "<p>Les entreprises exportatrices de produits ou de services, hors métaux de récupération, bénéficient pour leur chiffre d'affaires à l'exportation de l'exonération totale pendant cinq ans à compter de la première exportation, puis de l'imposition au taux de 17,5% au-delà.</p>",
    "tags": [
      "IS",
      "export"
    ]
  },
  {
    "question": "Pourquoi la valeur locative sur l'avis TH-TSC diffère-t-elle du contrat de loyer ?",
    "answer": "<p>La valeur locative est déterminée soit au moyen des baux et actes de location, soit par comparaison, soit par appréciation directe. L'administration peut actualiser le loyer figurant au contrat lorsqu'il est sous-estimé par rapport au marché.</p>",
    "tags": [
      "TH",
      "TSC"
    ]
  },
  {
    "question": "Comment calculer l'IR sur profit foncier suite à la cession d'un terrain ?",
    "answer": "<p>Le profit foncier taxable est la différence entre le prix de cession diminué, le cas échéant, des frais de cession, et le prix d'acquisition augmenté des frais y afférents. Le taux de l'IR est de 20%, 25% ou 30% selon la durée d'obtention, avec un minimum de 3% du prix de cession.</p>",
    "tags": [
      "IR",
      "immobilier"
    ]
  },
  {
    "question": "Quelles pièces fournir pour demander une attestation de revenu ?",
    "answer": "<p>Les pièces comprennent notamment un état d'engagement récent ou une attestation de salaire homologuée, une attestation de non-emploi le cas échéant, une copie de la CIN, la déclaration du revenu global, un avis d'imposition à la taxe d'habitation ou bail, et une déclaration sur l'honneur modèle AJP030F-11.</p>",
    "tags": [
      "attestation",
      "IR"
    ]
  },
  {
    "question": "Comment obtenir l'attestation de radiation d'une société en cessation d'activité ?",
    "answer": "<p>L'intéressée doit déposer au bureau d'accueil un dossier comprenant notamment le procès-verbal de dissolution, la résiliation du bail éventuel, les déclarations du résultat fiscal concernées, le rapport du liquidateur et la demande de radiation du registre de commerce.</p>",
    "tags": [
      "société",
      "cessation"
    ]
  },
  {
    "question": "Quel est le taux appliqué en matière d'IS pour un établissement hôtelier réalisant son chiffre d'affaires en devises ?",
    "answer": "<p>Les entreprises hôtelières bénéficient de l'exonération totale de l'IS pendant cinq ans pour la partie du chiffre d'affaires réalisée en devises dûment rapatriées, puis de l'imposition au taux réduit de 17,5% au-delà.</p>",
    "tags": [
      "IS",
      "hôtellerie"
    ]
  },
  {
    "question": "Quelles pièces fournir pour l'exonération de TVA sur l'achat d'un véhicule à usage de taxi ?",
    "answer": "<p>Les pièces à fournir sont un engagement modèle AAP111F/07I, la facture pro forma ou le devis en trois exemplaires, une copie de la CIN et une copie de l'agrément.</p>",
    "tags": [
      "TVA",
      "taxi"
    ]
  },
  {
    "question": "L'élevage d'autruches bénéficie-t-il de l'exonération IS agricole ?",
    "answer": "<p>L'élevage d'autruches est exclu de l'activité agricole par le législateur. Il est donc passible de l'IS dans les conditions de droit commun.</p>",
    "tags": [
      "IS"
    ]
  },
  {
    "question": "Le remboursement ANAPEC de frais de formation professionnelle est-il imposable à la TVA ?",
    "answer": "<p>Il s'agit d'une subvention accordée par l'Etat pour prendre en charge une partie des dépenses de formation professionnelle au profit du personnel de la société. Le montant de cette subvention est taxable en matière de TVA.</p>",
    "tags": [
      "TVA",
      "subvention"
    ]
  },
  {
    "question": "Comment obtenir un justificatif des retenues à la source opérées pour une société non résidente ?",
    "answer": "<p>L'administration fiscale délivre une attestation des retenues à la source effectuées pour le compte du fournisseur étranger sur demande formulée par la société cliente établie au Maroc.</p>",
    "tags": [
      "retenue à la source",
      "non-résident"
    ]
  },
  {
    "question": "Quel est le délai de versement de la retenue à la source sur les produits de placements à revenu fixe ?",
    "answer": "<p>L'impôt retenu à la source doit être versé dans le mois suivant celui du paiement, de la mise à disposition ou de l'inscription en compte des bénéficiaires.</p>",
    "tags": [
      "retenue à la source"
    ]
  },
  {
    "question": "Quelles pièces fournir pour la création d'une SARL ?",
    "answer": "<p>Le dossier comprend une déclaration d'existence modèle ADC061F, une copie de la CIN du gérant, le contrat de bail ou certificat de propriété ou attestation de domiciliation, les statuts enregistrés et le certificat négatif.</p>",
    "tags": [
      "SARL",
      "société"
    ]
  },
  {
    "question": "Une association reconnue d'utilité publique peut-elle récupérer la TVA sur ses achats d'exploitation ?",
    "answer": "<p>Les prestations fournies par une association reconnue d'utilité publique sont exonérées de TVA sans droit à déduction. L'association doit donc payer la TVA grevant ses achats auprès de ses fournisseurs.</p>",
    "tags": [
      "TVA",
      "association"
    ]
  },
  {
    "question": "Comment déposer une dispense de versement du troisième acompte ?",
    "answer": "<p>La dispense est effectuée sur l'imprimé modèle de l'administration quinze jours avant la date d'exigibilité de l'acompte.</p>",
    "tags": [
      "IS",
      "acompte"
    ]
  },
  {
    "question": "Un service de préparation de dossiers de visa payé en devises est-il passible de TVA ?",
    "answer": "<p>L'opération est passible de la TVA au taux de 20% lorsque le service rendu est utilisé au Maroc.</p>",
    "tags": [
      "TVA"
    ]
  },
  {
    "question": "La location d'un local par une association reconnue d'utilité publique est-elle passible de TVA ?",
    "answer": "<p>L'opération de location du local appartenant à l'association est passible de la TVA au taux de 20%.</p>",
    "tags": [
      "TVA",
      "association"
    ]
  },
  {
    "question": "La revente de terrains nus est-elle taxable en matière de TVA ?",
    "answer": "<p>La vente de terrains nus est située hors du champ d'application de la TVA. En revanche, l'opération de lotissement est passible de la TVA au taux de 20%.</p>",
    "tags": [
      "TVA",
      "immobilier"
    ]
  },
  {
    "question": "Quels documents fournir en cas de transfert du siège social d'une société ?",
    "answer": "<p>Le dossier doit être déposé en double exemplaire auprès des services régionaux concernés. Il comprend notamment le procès-verbal de l'assemblée générale décidant le transfert, le bail ou acte de propriété du nouveau siège, la déclaration ADC140F-12I et l'attestation d'inscription à la taxe professionnelle.</p>",
    "tags": [
      "société",
      "siège social"
    ]
  },
  {
    "question": "Quelle procédure d'achat d'une voiture en exonération de TVA pour un diplomate ?",
    "answer": "<p>Le CGI prévoit l'exonération avec droit à déduction sous réserve de réciprocité pour les achats des missions diplomatiques et de leurs membres ayant le statut diplomatique. La restitution est faite sur demande accompagnée des factures d'achat établies à leur nom.</p>",
    "tags": [
      "TVA",
      "exonération"
    ]
  }
];

const faqList = document.querySelector("[data-faq-list]");
const faqFilterForm = document.querySelector("[data-faq-filter-form]");
const faqFilterSelects = document.querySelectorAll("[data-faq-filter]");
const faqResultCount = document.querySelector("[data-faq-result-count]");
const faqTotalCount = document.querySelector("[data-faq-count]");
const faqCurrentPage = document.querySelector("[data-faq-current-page]");
const faqPageSize = document.querySelector("[data-faq-page-size]");
const faqPageRange = document.querySelector("[data-faq-page-range]");
const faqPagination = document.querySelector("[data-faq-pagination]");
const faqEmpty = document.querySelector("[data-faq-empty]");
const faqQuickButtons = document.querySelectorAll("[data-faq-sidebar-filter]");

const faqItemsPerPage = 10;
let faqState = {
  currentPage: 1,
  filteredItems: faqItems,
};

const filterKeywordMap = {
  impot: {
    "Contribution sociale de solidarite": ["contribution sociale", "solidarite", "css"],
    "Droits denregistrement": ["droits d enregistrement", "droit d enregistrement", "enregistrement"],
    "Impot sur le revenu": ["impot sur le revenu", "revenu", "profit foncier", "ir "],
    "Impot sur les societes": ["impot sur les societes", "societes", "societe", "entreprise", "is "],
    "Taxe dhabitation": ["taxe d habitation", "taxe habitation", "habitation", "th"],
    "Taxe de services communaux": ["taxe de services communaux", "services communaux", "tsc"],
    TVA: ["tva", "taxe sur la valeur ajoutee"],
  },
  theme: {
    Abattement: ["abattement"],
    Attestation: ["attestation"],
    "Base imposable": ["base imposable", "chiffre d affaires imposable"],
    "Champ dapplication": ["champ d application", "hors champ", "passible", "non soumis"],
    Declarations: ["declaration", "declarer", "declaratives"],
    Deduction: ["deduction", "deductible", "droit a deduction", "recuperer"],
    Exoneration: ["exoneration", "exonere", "exoneree", "sans tva"],
    Paiement: ["paiement", "payer", "versement"],
    Restitution: ["restitution", "remboursement", "rembourse"],
    "Retenue a la source": ["retenue a la source", "retenues a la source"],
    Sanction: ["sanction", "penalite", "majoration", "hors delai", "tardif"],
    Taux: ["taux", "20%", "15%", "14%", "10%", "17,5%", "1,5%"],
    Taxation: ["taxation", "taxable", "imposable", "passible"],
  },
  concerned_person: {
    Association: ["association", "associations", "utilite publique"],
    "Personnes Etrangeres": ["etranger", "etrangeres", "non resident", "non-resident", "ambassade", "diplomate"],
    "Personnes morales": ["societe", "societes", "entreprise", "sarl", "sa", "succursale", "personne morale"],
    "Personnes physiques": ["particulier", "personne physique", "personnes physiques", "medecin", "contribuable"],
  },
  activite_ou_operation: {
    Achat: ["achat", "achats", "acheter"],
    Aquisition: ["acquisition", "aquisition", "acquerent"],
    "Cessation d activite": ["cessation", "radiation", "dissolution", "liquidation"],
    Cession: ["cession", "vente", "ceder", "vendu"],
    "Creation de societe": ["creation", "creee", "nouvellement creee", "sarl"],
    Demarche: ["demarche", "procedure", "deposer", "documents", "pieces"],
    "Elevage autruches": ["autruches", "elevage"],
    Habitation: ["habitation", "logement", "habiter", "villa"],
    Hotellerie: ["hotel", "hotelier", "hotellerie"],
    Importation: ["importation", "importe", "douane"],
    "Livraison a soi meme": ["livraison a soi meme", "construction"],
    Location: ["location", "louer", "bail"],
    "Prestation de service": ["prestation", "service", "services"],
    "Transfert de siege social": ["transfert", "siege social"],
  },
};

const quickFilterMap = {
  TVA: { name: "impot", value: "TVA" },
  "Taxe sur la valeur ajoutée": { name: "impot", value: "TVA" },
  "Impôt sur les sociétés": { name: "impot", value: "Impot sur les societes" },
  Exonération: { name: "theme", value: "Exoneration" },
  "Retenue à la source": { name: "theme", value: "Retenue a la source" },
  "Cession": { name: "activite_ou_operation", value: "Cession" },
  "Cessation d'activité": { name: "activite_ou_operation", value: "Cessation d activite" },
  "Personnes morales": { name: "concerned_person", value: "Personnes morales" },
};

const normalizeFaqText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/<[^>]*>/g, " ");

const getItemHaystack = (item) => {
  if (!item.normalizedHaystack) {
    item.normalizedHaystack = normalizeFaqText([item.question, item.answer, ...(item.tags || [])].join(" "));
  }
  return item.normalizedHaystack;
};

const getSelectedFilters = () =>
  [...faqFilterSelects].reduce((filters, select) => {
    if (select.value) filters[select.dataset.faqFilter] = select.value;
    return filters;
  }, {});

const matchesFilterValue = (item, filterName, filterValue) => {
  if (!filterValue) return true;
  const haystack = getItemHaystack(item);
  const keywords = filterKeywordMap[filterName]?.[filterValue] || [filterValue];
  return keywords.some((keyword) => haystack.includes(normalizeFaqText(keyword)));
};

const getFilteredItems = () => {
  const selectedFilters = getSelectedFilters();

  return faqItems.filter((item) => {
    const matchesSelects = Object.entries(selectedFilters).every(([name, value]) =>
      matchesFilterValue(item, name, value)
    );

    return matchesSelects;
  });
};

const getPageCount = (items) => Math.max(1, Math.ceil(items.length / faqItemsPerPage));

const getPaginationPages = (currentPage, pageCount) => {
  const pages = new Set([1, pageCount, currentPage - 1, currentPage, currentPage + 1]);
  return [...pages]
    .filter((page) => page >= 1 && page <= pageCount)
    .sort((a, b) => a - b);
};

const renderPagination = (items) => {
  if (!faqPagination) return;

  const pageCount = getPageCount(items);
  faqPagination.replaceChildren();
  if (items.length <= faqItemsPerPage) return;

  const createButton = (label, page, options = {}) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.faqPage = String(page);
    if (options.current) button.setAttribute("aria-current", "page");
    if (options.disabled) button.disabled = true;
    if (options.label) button.setAttribute("aria-label", options.label);
    return button;
  };

  faqPagination.append(
    createButton("Précédent", faqState.currentPage - 1, {
      disabled: faqState.currentPage === 1,
      label: "Page précédente",
    })
  );

  let lastPage = 0;
  getPaginationPages(faqState.currentPage, pageCount).forEach((page) => {
    if (page - lastPage > 1) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      faqPagination.append(ellipsis);
    }
    faqPagination.append(
      createButton(String(page), page, {
        current: page === faqState.currentPage,
        label: `Page ${page}`,
      })
    );
    lastPage = page;
  });

  faqPagination.append(
    createButton("Suivant", faqState.currentPage + 1, {
      disabled: faqState.currentPage === pageCount,
      label: "Page suivante",
    })
  );
};

const renderFaqItems = (items) => {
  if (!faqList) return;

  const pageCount = getPageCount(items);
  faqState.currentPage = Math.min(Math.max(1, faqState.currentPage), pageCount);
  const startIndex = (faqState.currentPage - 1) * faqItemsPerPage;
  const pageItems = items.slice(startIndex, startIndex + faqItemsPerPage);

  faqList.replaceChildren(
    ...pageItems.map((item, index) => {
      const details = document.createElement("details");
      details.className = "faq-item";
      if (index === 0) details.open = true;

      const summary = document.createElement("summary");
      summary.textContent = item.question;

      const answer = document.createElement("div");
      answer.className = "faq-answer";
      answer.innerHTML = item.answer;

      details.append(summary, answer);
      return details;
    })
  );

  if (faqResultCount) faqResultCount.textContent = String(items.length);
  if (faqCurrentPage) faqCurrentPage.textContent = String(faqState.currentPage);
  if (faqPageSize) faqPageSize.textContent = String(faqItemsPerPage);
  if (faqPageRange) {
    const firstItem = items.length ? startIndex + 1 : 0;
    const lastItem = Math.min(startIndex + faqItemsPerPage, items.length);
    faqPageRange.textContent = items.length
      ? `Affichage des questions ${firstItem} à ${lastItem} sur ${items.length}.`
      : "Aucune question ne correspond aux critères sélectionnés.";
  }
  if (faqEmpty) faqEmpty.hidden = items.length > 0;
  renderPagination(items);
};

const updateFaqResults = ({ resetPage = true } = {}) => {
  faqState.filteredItems = getFilteredItems();
  if (resetPage) faqState.currentPage = 1;
  renderFaqItems(faqState.filteredItems);
};

const applyQuickFilter = (value) => {
  const config = quickFilterMap[value];
  faqFilterForm?.reset();

  if (config) {
    const select = document.querySelector(`[data-faq-filter="${config.name}"]`);
    if (select) select.value = config.value;
  }

  updateFaqResults();
};

if (faqTotalCount) faqTotalCount.textContent = String(faqItems.length);
if (faqPageSize) faqPageSize.textContent = String(faqItemsPerPage);

renderFaqItems(faqItems);

faqFilterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  updateFaqResults();
});

faqFilterForm?.addEventListener("reset", () => {
  window.setTimeout(() => {
    updateFaqResults();
  }, 0);
});

faqFilterSelects.forEach((select) => {
  select.addEventListener("change", () => updateFaqResults());
});

faqQuickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyQuickFilter(button.dataset.faqQuick || button.dataset.faqSidebarFilter || "");
  });
});

faqPagination?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-faq-page]");
  if (!button || button.disabled) return;

  faqState.currentPage = Number(button.dataset.faqPage) || 1;
  renderFaqItems(faqState.filteredItems);
  document.querySelector(".faq-filter-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
