import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/supabase/queries';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

// ── Fallback articles (full content from The Biohacker's Guide Collection) ────
const FALLBACK: Record<string, BlogPost> = {
  'geobiology-earths-magnetic-field-sleep-health': {
    id: '1', slug: 'geobiology-earths-magnetic-field-sleep-health', locale: 'en',
    title: "The Invisible Blueprint: How Earth's Magnetic Field Shapes Your Sleep and Health",
    excerpt: "What if the chronic fatigue, insomnia, and anxiety so many people normalize are not simply lifestyle issues — but symptoms of electromagnetic disharmony with the planet beneath your feet? Geobiology reveals the hidden blueprint of health.",
    tags: ['Geobiology', 'Geopathic Stress', 'Schumann Resonance', 'Sleep', 'Biohacking'],
    author_id: '1', read_time_minutes: 11, published_at: '2025-10-15', og_image_url: '/images/blog/blog-geobiology.jpg',
    content: `## What Is a Biohacker, Really?

A biohacker is not merely someone who counts calories, pops supplements, or wears a smartwatch to track their steps. A true biohacker is a seeker — a quiet rebel who asks a deeper question: *What invisible forces are shaping my health, my thoughts, my home, my very destiny?*

While modern science turns outward — to labs, to pills, to code — the biohacker turns inward. They attune themselves not just to what is measurable, but to what is meaningful: Energy. Frequency. Vibration.

Geobiology is the first initiation into that forgotten realm.

## Rediscovering the Earth Beneath Your Feet

Geobiology is the rediscovery of a forgotten science — one that reveals how the Earth's invisible forces shape every breath you take, every night of sleep, and every cell of your body.

For thousands of years, healers and builders understood that life thrives where the Earth's energy flows in harmony. They placed temples, altars, and homes on precise magnetic nodes — aligning human life with planetary rhythms. Modern science now confirms what ancient wisdom always knew: electromagnetic balance is essential to health.

When you learn geobiology, you begin to see your body not as a closed system, but as a conductor — receiving and emitting subtle energies every second. And you start to realize that many modern symptoms we have normalized — chronic fatigue, insomnia, migraines, anxiety — may actually be signs of *geopathic stress*: environmental distortions that interfere with our electromagnetic harmony.

## The Science Behind It: Schumann Resonance and the Living Earth

The Earth is not electromagnetically silent. It pulses with measurable frequencies.

The most important is the **Schumann Resonance** — an electromagnetic frequency of approximately 7.83 Hz generated in the cavity between the Earth's surface and the ionosphere. This frequency is strikingly close to the human brain's alpha-theta brainwave range (6–10 Hz), the state associated with deep relaxation, creativity, and restorative sleep.

When the Schumann Resonance is disrupted — or when artificial electromagnetic fields interfere with it — the body loses its natural synchronization with the Earth's heartbeat. The result? Disturbed sleep architecture, reduced melatonin production, increased cortisol, and a cascade of downstream health effects.

## Hartmann and Curry Lines: The Invisible Grid

In the 1950s, German physician Dr. Ernst Hartmann mapped a global network of electromagnetic lines running north-south and east-west across the entire surface of the Earth, spaced approximately 2 meters apart. These became known as the **Hartmann Grid**.

French engineer Manfred Curry later described a complementary diagonal grid — the **Curry Grid** — running at 45-degree angles to the Hartmann lines.

The intersections of these grids — called *geopathic nodes* — are points of elevated electromagnetic intensity. When your bed, your desk, or your most-used chair sits directly over such a node, the continuous electromagnetic stress can accumulate over months and years into measurable biological effects:

- Disrupted deep sleep and REM phases
- Weakened immune response
- Increased inflammation markers
- Hormonal imbalances (particularly cortisol and melatonin)
- Emotional instability and unexplained anxiety

## The Shifting Magnetic Poles: A Pilot's Perspective

As a pilot, César Arce reveals a dimension of this story that most people miss: the magnetic poles are actively shifting.

Today, the magnetic north moves so unpredictably that the **World Magnetic Model (WMM)** — the reference used by aircraft, GPS satellites, and smartphones — requires constant recalibration. Airports regularly repaint runway designations as magnetic north drifts. Navigation systems must be updated multiple times per year.

The poles are moving — and our bodies, calibrated over millions of years to Earth's magnetic field, are not immune to those changes.

## Practical Steps: Begin to Detect Geopathic Stress

### Observe the Animals
Cats seek out geopathic zones — they are electromagnetic seekers. Dogs avoid them. If your cat persistently sleeps in a particular spot in your bedroom, that location may be a Hartmann node.

### Track Your Sleep by Location
When you travel and sleep in a different bed, do you wake more refreshed than at home — even in a budget hotel? This is one of the most consistent early indicators of geopathic stress at home.

### Look for Biological Signs in Nature
Geopathic zones often correspond to places where trees grow twisted, where certain weeds proliferate, or where lightning strikes repeatedly. Nature encodes this information.

### Use Radiesthesia Tools
Dowsing rods (L-rods) and pendulums are the traditional instruments for detecting geomagnetic anomalies. Used within a scientific framework — as extensions of the nervous system's magnetosensitivity — they become measurable instruments of environmental assessment.

## You Are Not Standing on the Earth — You Are Standing Within It

The telluric currents beneath your bed. The geomagnetic fields coursing through your walls. The Schumann resonances humming just outside your hearing. These are not mystical concepts — they are measurable, verifiable, and profoundly relevant to your health.

Your body is the antenna. Your cells are listening.

*Based on Volume I of The Biohacker's Guide Collection: Geobiology — The Hidden Blueprint of Life on Earth, by César Arce.*`,
  },

  'geopathic-stress-bedroom-sleep-health': {
    id: '2', slug: 'geopathic-stress-bedroom-sleep-health', locale: 'en',
    title: "Is Your Bedroom Making You Sick? The Hidden Truth About Geopathic Stress",
    excerpt: "Imagine your bed resting over a geopathic stress point. What should be deep, restorative sleep becomes hours of tossing, turning, and waking exhausted. You blame the mattress. But what if the problem is beneath it?",
    tags: ['Geopathies', 'Geopathic Stress', 'Sleep Health', 'EMF', 'Environmental Health'],
    author_id: '1', read_time_minutes: 13, published_at: '2025-10-22', og_image_url: '/images/blog/blog-geopathies.jpg',
    content: `## The Man in the White Room

He sat in silence, watching the heart monitor beep its rhythm like a metronome of borrowed time. Ten pills a day. One for the blood. Two for the nerves. One to sleep. One to wake. Another to numb the pain that never really left.

And then, like a whisper cutting through the static, he remembered his grandmother's voice: *"We didn't use to live like this. We used to listen to the Earth."*

He looked down at his feet. Cold. Disconnected. And for the first time in decades, he asked the question that would change everything.

## When Did We Stop Healing?

Modern medicine no longer creates health — it manages illness. Doctors are trained to treat symptoms, not systems. To prescribe drugs that silence alarms without fixing the fire.

But this is not a critique of medicine. It is an invitation to remember what medicine has forgotten: your health exists in an *environment*. And that environment — the ground beneath your home, the magnetic fields in your walls, the water flowing beneath your foundation — may be affecting you in ways no blood test will reveal.

## The Hidden Stress Beneath Your Bed

Geopathic stress refers to distorted geomagnetic fields caused by underground features — water veins, geological faults, mineral deposits, and cavities — that disturb the natural electromagnetic flow of the Earth's surface.

These disturbances are measurable with magnetometers, EMF meters, and geomagnetic sensors. The physics is straightforward: underground water flowing through rock creates piezoelectric currents; geological faults create localized magnetic anomalies; mineral deposits alter the local conductivity of the Earth.

Research compiled by European physicians over the past century — including the work of Dr. Hans Nieper, Dr. Ernst Hartmann, and Dr. Manfred Curry — consistently found correlations between long-term occupancy of geopathic zones and:

- Chronic insomnia and non-restorative sleep
- Immune suppression and increased susceptibility to infection
- Hormonal dysregulation, particularly of melatonin and cortisol
- Elevated rates of degenerative disease in occupants of specific buildings
- Persistent fatigue, depression, and anxiety without identifiable clinical cause

## The Sleep Test You Can Run Tonight

### The Travel Test
Think of the last time you traveled — a different city, a different bed. Did you sleep better away from home, even in basic accommodation? If yes, the variable is not your mattress, your pillow, or your partner. It is the *location* of your bed.

### The Cat and Dog Test
Cats are electromagnetic seekers — drawn to geopathic zones. Dogs, like humans, instinctively refuse to sleep over geopathic disturbances. Watch where your animals choose to rest and where they refuse to go.

### The Symptom Journal
For 14 days, note your sleep quality and energy on waking. Then move your bed 50–80 cm in any direction and repeat for 14 more days. The difference, if geopathic stress is present, is often dramatic.

## What Lies Beneath: Underground Water and Geological Faults

Underground water moving through rock generates electromagnetic fields through the *piezoelectric effect* and friction-generated electrostatic charge. These fields propagate upward through the soil and into the structure of buildings above.

Geological faults create linear zones of geomagnetic anomaly — places where the Earth's natural field is compressed, deflected, or amplified. Medieval European construction records show that church foundations were often deliberately placed *away* from detected fault lines.

## How to Assess and Correct Geopathic Stress

### Step 1: Mapping with Radiesthesia
L-rods and pendulums, used within a scientific framework as extensions of the body's magnetosensitivity, are the classical instruments for detecting geomagnetic anomalies. Combine them with a modern EMF meter for confirmation.

### Step 2: Moving the Bed
The single most effective intervention is the simplest: move your bed. Even a shift of 50 cm can take you completely outside a geopathic zone. This costs nothing and can be tested in 14 days.

### Step 3: Shielding and Harmonization
Where relocation is not possible, protective measures include cork or natural rubber insulation beneath the bed, copper or iron shielding plates, and energetic harmonizers.

## The Grandmother's Wisdom

In 1973, a curious boy asked his grandmother why she took so many pills. She paused and said: *"We didn't use to live like this. We used to listen to the Earth. We moved with the seasons. We slept where the land was quiet."*

The land is still speaking. The only question is whether we are still listening.

*Based on Volume II of The Biohacker's Guide Collection: Geopathies — The Hidden Perils of Earth's Magnetic Field, by César Arce.*`,
  },

  'radiesthesia-body-biological-antenna': {
    id: '3', slug: 'radiesthesia-body-biological-antenna', locale: 'en',
    title: "Your Body Is an Antenna: The Science of Radiesthesia",
    excerpt: "Radiesthesia is not about magic or divination. It is about the measurable capacity of the human nervous system to detect variations in the Earth's geomagnetic field — a scientifically recognized phenomenon known as magnetosensitivity.",
    tags: ['Radiesthesia', 'Dowsing', 'Magnetosensitivity', 'EMF', 'Biohacking'],
    author_id: '1', read_time_minutes: 12, published_at: '2025-11-01', og_image_url: '/images/blog/blog-radiesthesia.jpg',
    content: `## The Art of Sensing Radiation

The word *radiesthesia* comes from the Latin *radius* (ray, radiation) and the Greek *aisthesis* (perception, sensation). It literally means: the perception of radiation.

For centuries it was practiced as dowsing — the art of finding underground water with forked sticks. For just as long, it was dismissed as superstition. But modern science has quietly, persistently accumulated evidence that something real is happening when a trained practitioner walks with rods over a geopathic zone.

That something is not mystical. It is neurological.

## Magnetosensitivity: The Recognized Science

Magnetosensitivity — the ability of biological organisms to detect and respond to magnetic fields — is one of the most extensively documented phenomena in biology.

Birds navigate thousands of kilometers using the Earth's magnetic field. Sea turtles return to their birth beaches after decades using geomagnetic imprinting. Bees maintain the orientation of their honeycombs to within 2 degrees of magnetic north.

In 2019, researchers at Caltech published research in *eNeuro* demonstrating that human brainwaves measurably respond to rotating magnetic fields — even when subjects are completely unaware of the field changes. The alpha brainwave suppression observed was similar in magnitude to the visual response to a flash of light.

Your nervous system is detecting magnetic fields right now. You are just not trained to interpret the signal.

## The Instrument Is You

The fundamental principle of radiesthesia is this: the human nervous system acts as a biological antenna — capable of detecting subtle variations in the Earth's geomagnetic field, including Hartmann and Curry grid crossings, underground water streams, and geological fault emissions.

The pendulum and the dowsing rod are not magic wands. They are *amplifiers* — mechanical extensions of involuntary micro-muscular movements driven by the nervous system's electromagnetic sensitivity. The instrument does not move. The body moves the instrument — through imperceptible ideomotor responses triggered by the detection of geomagnetic variation.

## The Modern Problem: Electrosmog

We are now immersed in a sea of artificial electromagnetic frequencies that our biology was never designed to navigate.

WiFi routers operate at 2.4 and 5 GHz. Mobile phones emit pulsed microwave radiation. Smart meters pulse every 30–60 seconds. Power lines hum at 50–60 Hz. LED lighting flickers at frequencies invisible to conscious perception but detectable by the nervous system.

This electrosmog is specific interference with the biological antenna. When your nervous system is overwhelmed by artificial electromagnetic noise, its ability to detect the subtle natural signals of the Earth's geomagnetic field is compromised.

Radiesthesia, in this context, is not an anachronism. It is a practice of restoration — of recalibrating the most sophisticated electromagnetic sensor on the planet: your nervous system.

## The Hartmann and Curry Grids: What You Are Looking For

**Hartmann Lines** run north-south and east-west at approximately 2-meter intervals. Where two Hartmann lines cross, the electromagnetic intensity is elevated.

**Curry Lines** run at 45-degree diagonals to the Hartmann grid, at approximately 3.5-meter intervals.

**Double intersections** — where a Hartmann crossing and a Curry crossing coincide — are considered the highest-intensity geopathic nodes, sometimes called *black zones* in European geobiological practice.

## A Practical First Exercise

### Materials
- A pair of L-shaped copper or steel rods (30 cm × 15 cm, freely rotating in a handle)
- A quiet room, minimal artificial EMF sources nearby

### Protocol
1. Hold the rods parallel to the ground, pointing forward, loosely held in loosely-curled fists.
2. Walk slowly across the room in a straight line, breathing calmly.
3. Note any positions where the rods deviate — crossing inward or swinging outward.
4. Mark those positions with tape on the floor.
5. Walk the perpendicular axis and note deviations again.
6. Where your marks intersect, you likely have a Hartmann line crossing.

Repeat on 3–4 separate occasions, blind to your previous marks, to test consistency.

## The Invisible Is Not Empty

Radiesthesia teaches one fundamental truth that science and intuition share: the invisible is not empty — it is alive.

The electromagnetic landscape of your home is as real as its architecture. The grid lines that pass through your bedroom, your office, your kitchen are measurable, mappable, and — crucially — modifiable.

Your body already knows this. The question is whether you will learn to listen to what it has always been trying to tell you.

*Based on Volume III of The Biohacker's Guide Collection: Radiesthesia — The Hidden Science of Earth's Energy Grids, by César Arce.*`,
  },

  'map-home-energy-rods-pendulums-practical-guide': {
    id: '4', slug: 'map-home-energy-rods-pendulums-practical-guide', locale: 'en',
    title: "How to Map Your Home's Hidden Energy Fields with Rods and Pendulums",
    excerpt: "Your home has an electromagnetic landscape you cannot see — but can learn to detect. This step-by-step guide shows you how to use L-rods, pendulums, and EMF meters to map the invisible energy grid of any space.",
    tags: ['Radionics', 'Radiesthesia', 'Dowsing', 'Home Energy', 'Practical Guide'],
    author_id: '1', read_time_minutes: 10, published_at: '2025-11-10', og_image_url: '/images/blog/blog-radionics.jpg',
    content: `## Your Home Has an Invisible Architecture

Every building sits within the Earth's geomagnetic field — and that field is not uniform. Underground water veins create localized electromagnetic corridors. Geological faults deflect natural magnetic flow. The Hartmann and Curry grids overlay every square meter of the planet's surface with a measurable electromagnetic lattice.

Most of this architecture is invisible to the naked eye. But it is entirely detectable with the right instruments.

This is not superstition. This is the same science that underlies EMF sensitivity research, magnetoreception biology, and modern environmental medicine.

## The Tools You Need

### L-Rods (Dowsing Rods)
L-shaped rods are the primary detection instrument for horizontal grid mapping:
- Made of copper, steel, or aluminum (non-magnetic metals)
- Approximately 30–40 cm on the long axis, 12–15 cm on the short handle
- Mounted in freely-rotating sleeve handles (drinking straws work perfectly)

### A Pendulum
The pendulum is used for vertical field assessment and yes/no questioning protocols:
- A symmetric weight (copper, crystal, or brass) on a 25–30 cm cord
- Held between thumb and index finger, elbow at 90 degrees, hand still

### EMF Meter (Optional but Recommended)
A tri-axial ELF magnetometer — available for under $50 — allows you to confirm radiesthetic findings with objective measurements. Look for a unit measuring in milligauss (mG) or nanotesla (nT) at 50/60 Hz.

## Step-by-Step: Mapping Your Home

### Step 1: Prepare the Space
Turn off WiFi, mobile data, and as many electrical appliances as practical. Wait 10 minutes. This reduces artificial EMF noise and allows you to detect the Earth's natural field more clearly.

### Step 2: Establish Your Baseline Response
Stand in an open area outdoors and hold the L-rods parallel, pointing forward. Walk slowly in a straight north-south line. Note how the rods respond in open, undisturbed ground — they should remain roughly parallel. This is your baseline.

### Step 3: Map Each Room Systematically
Starting from one wall:
1. Walk in parallel lines across the room, 50 cm apart.
2. Mark every point where the rods deviate (cross inward = entering a zone; spread outward = exiting a zone).
3. Use tape on the floor to mark these transition points.
4. Repeat walking perpendicular to your first passes.
5. Where transition marks cluster, you have located a grid line or underground feature.

### Step 4: Identify High-Intensity Nodes
Where two detected lines cross, you have a grid node. Mark these on a floor plan sketch of your room. Prioritize nodes that coincide with:
- The center of your bed (where your torso rests for 7–8 hours nightly)
- Your primary work chair
- Your most-used sofa position

### Step 5: Confirm with EMF Meter
At each marked node, use your EMF meter. Background levels in a geopathic node often read 1–3 mG higher than the surrounding area. This is not a large absolute difference, but it is continuous and cumulative over years of exposure.

## Radionics: When Detection Becomes Correction

Radionics extends beyond detection into energetic correction. Based on the principle that geometric forms, symbols, and material arrangements can interact with electromagnetic fields, radionics provides tools to harmonize detected disturbances.

### Paper Radionics Devices
Certain geometric diagrams — particularly those incorporating the **Seal of Solomon** (Star of David hexagram), the **Sri Yantra**, and various Lakhovsky oscillator patterns — are placed directly beneath furniture or affixed to floors above detected nodes to partially neutralize geopathic stress.

### The Lakhovsky Principle
Georges Lakhovsky proposed in the 1920s that every living cell is a biological oscillator — emitting and receiving electromagnetic waves. His Multi-Wave Oscillator was designed to restore natural oscillatory coherence disrupted by geopathic stress.

## The Most Effective Intervention Is Also the Simplest

Before investing in any device or protective technology, remember this:

**Moving your bed costs nothing and can be tested in 14 days.**

If your mapping reveals that your bed sits over a Hartmann node or an underground water vein crossing, moving the bed 50–80 cm in any direction may be sufficient to exit the zone entirely.

Detect first. Then move. Then protect. In that order.

*Based on the Practical Edition of The Biohacker's Guide Collection: Radiesthesia & Radionics Booklet, by César Arce.*`,
  },

  'electroculture-atmospheric-electricity-plant-growth': {
    id: '5', slug: 'electroculture-atmospheric-electricity-plant-growth', locale: 'en',
    title: "Tesla's Forgotten Science: Growing Plants with Atmospheric Electricity",
    excerpt: "Between Earth's surface and the ionosphere sits a 400,000-volt electric ocean. Every lightning bolt is a transaction in a planetary energy system that has always nourished life. With a simple copper spiral you can join that circuit.",
    tags: ['Electroculture', 'Atmospheric Electricity', 'Tesla', 'Plant Growth', 'Regenerative Agriculture'],
    author_id: '1', read_time_minutes: 14, published_at: '2025-11-20', og_image_url: '/images/blog/blog-electroculture.jpg',
    content: `## What If the Sky Could Fertilize the Earth?

Imagine that every bolt of lightning, every storm cloud above your head, is more than weather. Imagine it as nourishment — an invisible rain of electrons that has always flowed between heaven and soil, feeding roots and seeds and the invisible microbial communities that make agriculture possible.

This is the forgotten secret of electroculture: farming not just with water and minerals, but with the *living electricity of the atmosphere.*

It sounds radical. But the physics is well-established. The applications have been demonstrated. And the pioneers who first understood this — Nikola Tesla chief among them — were not mystics. They were engineers.

## The Earth–Ionosphere Capacitor

As physicist Richard Feynman explained in his celebrated Caltech lectures, the Earth and the ionosphere function as the two plates of a giant spherical capacitor.

The Earth's surface carries a negative charge. The ionosphere — a layer of electrically charged particles sitting 50 to 100 kilometers above — carries a positive charge. Between them exists a potential difference of approximately **400,000 volts**.

Thunderstorms are the mechanism that maintains this charge differential. There are approximately 2,000 thunderstorms active on the planet's surface at any given moment, each acting as a current generator — pumping electrons from the ionosphere to the ground, maintaining the global electric circuit in steady state.

## A Pilot's Perspective: Static Electricity in the Sky

As a commercial pilot, César Arce observed firsthand the power of atmospheric electricity from a unique vantage point.

During flight, aircraft continuously accumulate electrostatic charge through friction with air molecules — the *triboelectric effect*. At cruising altitude, a large aircraft can accumulate hundreds of kilovolts of static charge. This is managed through *static discharge wicks* — small conductive filaments on wing tips and tail surfaces that bleed off accumulated charge during flight.

The parallel with electroculture is precise. Just as the discharge wicks on an aircraft release electrostatic charge into the atmosphere, a copper spiral planted in the ground creates a conductive pathway between the atmospheric electrical potential and the soil. Instead of discharging charge away, the spiral *feeds it into the ground* — awakening seeds, roots, and the complex electrochemical processes of the rhizosphere.

## Tesla's Dream: Radiant Energy from the Sky

At the dawn of the 20th century, Nikola Tesla patented devices to capture what he called *radiant energy* — free electricity falling from the sky like unseen rain. His 1901 patent (US685957) described a system for intercepting atmospheric electric potential and converting it to usable power.

Tesla believed this energy could power homes, heal bodies, and transform agriculture. His dream was suppressed. His patents were ignored. His towers were dismantled.

But the physics did not go away.

## Justin Christofleau: The First Agricultural Evidence

In 1927, French agronomist **Justin Christofleau** published *Électroculture: Contribution à l'Agriculture*, documenting the results of years of agricultural experiments using copper spirals, zinc electrodes, and atmospheric antennas inserted into crop fields.

His results were striking:

- Potato yields nearly **doubled** in electroculture plots versus controls
- Germination rates increased by 20–40%
- Disease resistance improved measurably in treated crops
- Root development was significantly enhanced in electroculture plants

These results were replicated by agricultural researchers in Belgium, Austria, and Sweden through the 1930s — then forgotten in the rush toward chemical fertilizers after World War II.

## The DIY Copper Spiral: Your First Experiment

You can replicate Christofleau's basic experiment at home with materials costing less than $10:

### Materials
- 1.5–2 meters of 2mm copper wire (jewelers' wire or electrical copper)
- A wooden dowel or pen for winding
- Wire cutters

### Construction
1. Wind the copper wire in a clockwise spiral around the dowel, creating a coil of 7–10 turns with a diameter of approximately 3–4 cm.
2. Leave 15–20 cm of straight wire extending from the base of the coil as the ground stake.
3. At the top, form a small loop or spiral pointing upward — this is the atmospheric antenna end.

### Installation
Drive the stake into the soil at the base of a plant (10–15 cm from the stem). The coil should sit at soil level. The upward loop should be above the plant canopy if possible.

### Observation Protocol
Plant two identical seeds or seedlings in equivalent soil conditions. Install the spiral next to one; leave the other as a control. Observe and measure both over 4–6 weeks: germination rate, stem height, leaf count, and disease incidence. Document everything.

## The Sky Is Alive — and It Is Still Teaching Us

Electroculture is both a scientific guide and a philosophical awakening — a call to remember that farming, health, and life itself are electrical at their core.

The Earth's electromagnetic environment did not begin when humans built power lines. It is billions of years old. Every plant that has ever grown, every seed that has ever germinated, every root that has ever pushed through soil, has done so in constant electrical dialogue with the planet and the sky above it.

We have not discovered something new. We have remembered something ancient.

May your copper spirals carry that current forward.

*Based on Volume V of The Biohacker's Guide Collection: Electroculture — Farming with the Living Sky, by César Arce.*`,
  },
};

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const locales = ['en', 'fr-CA', 'es'];
    const results = await Promise.all(locales.map((locale) => getBlogPosts(locale)));
    const slugs = new Set(results.flat().map((p) => p.slug));
    return Array.from(slugs).map((slug) => ({ slug }));
  } catch {
    return Object.keys(FALLBACK).map((slug) => ({ slug }));
  }
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  let post: BlogPost | null = null;
  try { post = await getBlogPostBySlug(slug, locale); } catch { /* ignore */ }
  if (!post) post = FALLBACK[slug] ?? null;
  if (!post) return { title: 'Article Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: post.og_image_url ? [post.og_image_url] : [] },
  };
}

// ── Markdown renderer ─────────────────────────────────────────────────────────
function renderContent(content: string): React.ReactNode[] {
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## '))
      return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-5">{line.slice(3)}</h2>;
    if (line.startsWith('### '))
      return <h3 key={i} className="text-lg font-bold text-green-400 mt-8 mb-3">{line.slice(4)}</h3>;
    if (line.startsWith('- '))
      return <li key={i} className="text-zinc-400 leading-relaxed ml-4 list-disc">{renderInline(line.slice(2))}</li>;
    if (line.startsWith('**') && line.endsWith('**'))
      return <p key={i} className="text-white font-bold leading-relaxed">{line.slice(2, -2)}</p>;
    if (line.trim() === '')
      return <div key={i} className="h-3" />;
    return <p key={i} className="text-zinc-400 leading-relaxed">{renderInline(line)}</p>;
  });
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={i} className="text-zinc-300 italic">{part.slice(1, -1)}</em>;
    return part;
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  let post: BlogPost | null = null;
  try { post = await getBlogPostBySlug(slug, locale); } catch { /* ignore */ }
  if (!post) post = FALLBACK[slug] ?? null;
  if (!post) notFound();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
          <Link href={`/${locale}`} className="hover:text-green-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/${locale}/blog`} className="hover:text-green-400 transition-colors">{t('title')}</Link>
          <span>/</span>
          <span className="text-zinc-300 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-green-400/10 text-green-400 border border-green-400/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8 pb-8 border-b border-zinc-800">
          <span>César Arce</span>
          <span>·</span>
          <span>{formatDate(post.published_at, locale)}</span>
          <span>·</span>
          <span>{post.read_time_minutes} {t('minRead')}</span>
        </div>

        {/* OG image */}
        {post.og_image_url && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 border border-zinc-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.og_image_url} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Excerpt intro */}
        <p className="text-xl text-zinc-300 leading-relaxed italic mb-8 border-l-4 border-green-400/40 pl-6">
          {post.excerpt}
        </p>

        {/* Content */}
        <article className="max-w-none">
          {post.content ? renderContent(post.content) : (
            <p className="text-zinc-400 italic">Content coming soon...</p>
          )}
        </article>

        {/* CTA — link to book */}
        <div className="mt-16 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <p className="text-zinc-400 text-sm mb-1">Part of</p>
          <p className="text-white font-bold mb-3">The Biohacker&apos;s Guide Collection — by César Arce</p>
          <Link
            href={`/${locale}/books`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors text-sm"
          >
            🛒 Explore the Books →
          </Link>
        </div>

        {/* Share */}
        <div className="mt-10 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm mb-4 font-medium uppercase tracking-widest">Share this article</p>
          <div className="flex gap-3">
            {[
              { label: 'Facebook', color: 'hover:border-blue-500 hover:text-blue-400', href: `https://www.facebook.com/sharer/sharer.php?u=https://biohacker.digital/${locale}/blog/${post.slug}` },
              { label: 'LinkedIn', color: 'hover:border-sky-500 hover:text-sky-400', href: `https://www.linkedin.com/sharing/share-offsite/?url=https://biohacker.digital/${locale}/blog/${post.slug}` },
              { label: 'X / Twitter', color: 'hover:border-zinc-400 hover:text-white', href: `https://twitter.com/intent/tweet?url=https://biohacker.digital/${locale}/blog/${post.slug}&text=${encodeURIComponent(post.title)}` },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`px-4 py-2 border border-zinc-700 text-zinc-400 text-sm rounded-lg transition-colors ${s.color}`}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="mt-8">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors">
            ← {t('latestArticles')}
          </Link>
        </div>

      </div>
    </div>
  );
}
