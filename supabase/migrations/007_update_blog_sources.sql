-- =============================================================================
-- Add scientific sources to June 2026 blog articles
-- Safe to re-run — only appends if source section not already present.
-- =============================================================================

-- ============================================================
-- ARTICLE 1: Earthing & Sleep
-- Source: Advances in Integrative Medicine, Vol. 12, 2025
-- ============================================================
UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Sokal, K. et al. (2025). *Effects of earthing mats on sleep quality: a randomized, double-blind, placebo-controlled trial*. **Advances in Integrative Medicine**, Vol. 12. [Read study](https://www.sciencedirect.com/science/article/pii/S2212958825000059)'
WHERE slug = 'sleep-grounded-earthing-clinical-study' AND locale = 'en'
  AND content NOT LIKE '%## Sources%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Fuentes\n\n- Sokal, K. et al. (2025). *Efectos de los tapetes de earthing sobre la calidad del sueño: ensayo aleatorio, doble ciego, controlado con placebo*. **Advances in Integrative Medicine**, Vol. 12. [Leer estudio](https://www.sciencedirect.com/science/article/pii/S2212958825000059)'
WHERE slug = 'sleep-grounded-earthing-clinical-study' AND locale = 'es'
  AND content NOT LIKE '%## Fuentes%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Sokal, K. et al. (2025). *Effets des tapis de mise à la terre sur la qualité du sommeil : essai randomisé, en double aveugle, contrôlé par placebo*. **Advances in Integrative Medicine**, Vol. 12. [Lire l''étude](https://www.sciencedirect.com/science/article/pii/S2212958825000059)'
WHERE slug = 'sleep-grounded-earthing-clinical-study' AND locale = 'fr-CA'
  AND content NOT LIKE '%## Sources%';

-- ============================================================
-- ARTICLE 2: Schumann Resonance & Brain
-- Sources: NaturalNews 2026 + Electromagnetic Biology and Medicine 2025
-- ============================================================
UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Alabdulgader, A. et al. (2025). *Schumann resonances and human brain activity correlations*. **Electromagnetic Biology and Medicine**. [Read study](https://www.tandfonline.com/doi/full/10.1080/15368378.2025.2508466)\n- Adams, M. (2026, June 4). *Are Schumann Resonance shifts affecting human brains?* NaturalNews. [Read article](https://www.naturalnews.com/2026-06-04-are-schumann-resonance-shifts-affecting-human-brains.html)'
WHERE slug = 'schumann-resonance-brain-june-2026' AND locale = 'en'
  AND content NOT LIKE '%## Sources%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Fuentes\n\n- Alabdulgader, A. et al. (2025). *Correlaciones entre la Resonancia de Schumann y la actividad cerebral humana*. **Electromagnetic Biology and Medicine**. [Leer estudio](https://www.tandfonline.com/doi/full/10.1080/15368378.2025.2508466)\n- Adams, M. (4 junio 2026). *¿Los cambios en la Resonancia de Schumann están afectando el cerebro humano?* NaturalNews. [Leer artículo](https://www.naturalnews.com/2026-06-04-are-schumann-resonance-shifts-affecting-human-brains.html)'
WHERE slug = 'schumann-resonance-brain-june-2026' AND locale = 'es'
  AND content NOT LIKE '%## Fuentes%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Alabdulgader, A. et al. (2025). *Corrélations entre la Résonance de Schumann et l''activité cérébrale humaine*. **Electromagnetic Biology and Medicine**. [Lire l''étude](https://www.tandfonline.com/doi/full/10.1080/15368378.2025.2508466)\n- Adams, M. (4 juin 2026). *Les variations de la Résonance de Schumann affectent-elles le cerveau humain ?* NaturalNews. [Lire l''article](https://www.naturalnews.com/2026-06-04-are-schumann-resonance-shifts-affecting-human-brains.html)'
WHERE slug = 'schumann-resonance-brain-june-2026' AND locale = 'fr-CA'
  AND content NOT LIKE '%## Sources%';

-- ============================================================
-- ARTICLE 3: PEMF & Pain Reduction
-- Sources: Frontiers in Sports 2026 + Pain and Therapy 2025
-- ============================================================
UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Klahan, S. et al. (2026). *Pulsed electromagnetic field therapy for soft-tissue injuries: systematic review of RCTs*. **Frontiers in Sports and Active Living**. [Read study](https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2026.1694944/full)\n- Benaglia, L. et al. (2025). *Non-invasive PEMF for chronic pain: multicenter clinical trial*. **Pain and Therapy**, Springer Nature. [Read study](https://link.springer.com/article/10.1007/s40122-025-00711-z)'
WHERE slug = 'pemf-magnetic-fields-pain-reduction' AND locale = 'en'
  AND content NOT LIKE '%## Sources%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Fuentes\n\n- Klahan, S. et al. (2026). *Terapia PEMF para lesiones de tejidos blandos: revisión sistemática de ensayos clínicos*. **Frontiers in Sports and Active Living**. [Leer estudio](https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2026.1694944/full)\n- Benaglia, L. et al. (2025). *PEMF no invasivo para dolor crónico: ensayo clínico multicéntrico*. **Pain and Therapy**, Springer Nature. [Leer estudio](https://link.springer.com/article/10.1007/s40122-025-00711-z)'
WHERE slug = 'pemf-magnetic-fields-pain-reduction' AND locale = 'es'
  AND content NOT LIKE '%## Fuentes%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Klahan, S. et al. (2026). *Thérapie PEMF pour les lésions des tissus mous : revue systématique des essais cliniques*. **Frontiers in Sports and Active Living**. [Lire l''étude](https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2026.1694944/full)\n- Benaglia, L. et al. (2025). *PEMF non invasif pour la douleur chronique : essai clinique multicentrique*. **Pain and Therapy**, Springer Nature. [Lire l''étude](https://link.springer.com/article/10.1007/s40122-025-00711-z)'
WHERE slug = 'pemf-magnetic-fields-pain-reduction' AND locale = 'fr-CA'
  AND content NOT LIKE '%## Sources%';

-- ============================================================
-- ARTICLE 4: Electroculture & AI Study
-- Source: ScienceDirect 2025
-- ============================================================
UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Zhang, Y. et al. (2025). *Electric field treatment effects on crop yield and pathogen elimination: an AI-validated study*. **ScienceDirect**. [Read study](https://www.sciencedirect.com/science/article/pii/S2772427125000798)'
WHERE slug = 'electroculture-electric-fields-ai-study' AND locale = 'en'
  AND content NOT LIKE '%## Sources%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Fuentes\n\n- Zhang, Y. et al. (2025). *Efectos del tratamiento con campo eléctrico sobre el rendimiento de cultivos y la eliminación de patógenos: estudio validado con IA*. **ScienceDirect**. [Leer estudio](https://www.sciencedirect.com/science/article/pii/S2772427125000798)'
WHERE slug = 'electroculture-electric-fields-ai-study' AND locale = 'es'
  AND content NOT LIKE '%## Fuentes%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Zhang, Y. et al. (2025). *Effets du traitement par champ électrique sur le rendement des cultures et l''élimination des agents pathogènes : étude validée par IA*. **ScienceDirect**. [Lire l''étude](https://www.sciencedirect.com/science/article/pii/S2772427125000798)'
WHERE slug = 'electroculture-electric-fields-ai-study' AND locale = 'fr-CA'
  AND content NOT LIKE '%## Sources%';

-- ============================================================
-- ARTICLE 5: Geopathic Stress AI & IoT
-- Source: IJRSI 2025
-- ============================================================
UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Patel, R. et al. (2025). *Hybrid IoT and AI system for geopathic stress zone detection: field validation study*. **International Journal of Research and Scientific Innovation (IJRSI)**. [Read study](https://rsisinternational.org/journals/ijrsi/article.php?id=399)'
WHERE slug = 'geopathic-stress-ai-iot-detection' AND locale = 'en'
  AND content NOT LIKE '%## Sources%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Fuentes\n\n- Patel, R. et al. (2025). *Sistema híbrido IoT e IA para detección de zonas de estrés geopático: estudio de validación en campo*. **International Journal of Research and Scientific Innovation (IJRSI)**. [Leer estudio](https://rsisinternational.org/journals/ijrsi/article.php?id=399)'
WHERE slug = 'geopathic-stress-ai-iot-detection' AND locale = 'es'
  AND content NOT LIKE '%## Fuentes%';

UPDATE blog_posts SET content = content || E'\n\n---\n\n## Sources\n\n- Patel, R. et al. (2025). *Système hybride IoT et IA pour la détection des zones de stress géopathique : étude de validation sur le terrain*. **International Journal of Research and Scientific Innovation (IJRSI)**. [Lire l''étude](https://rsisinternational.org/journals/ijrsi/article.php?id=399)'
WHERE slug = 'geopathic-stress-ai-iot-detection' AND locale = 'fr-CA'
  AND content NOT LIKE '%## Sources%';
