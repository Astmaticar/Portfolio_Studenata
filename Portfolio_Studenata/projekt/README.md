# FERIT Multimedijska Tehnika - Portfolio Projekt

## ✅ Što je Gotovo

### HTML Datoteke
- ✅ **index.html** - Glavna stranica s karticama studenata i info o fakultetu
- ✅ **student1.html** - Profil Lana Gale (Frontend Developer)
- ✅ **student2.html** - Profil Dorijan Dragić (Backend Developer)

### CSS
- ✅ **css/style.css** - Kompletan CSS sa:
  - Modernim designom sa gradient-ima
  - Responsivnim layout-om (mobile, tablet, desktop)
  - Animacijama pri hover-u
  - Progress bar-ima za vještine
  - Gallery item overlay-a
  - Dark mode podrške
  - AOS animacijama (scroll effects)

### JavaScript
- ✅ **js/scripts.js** - Funkcionalnosti:
  - AOS (Animate on Scroll) inicijalizacija
  - Smooth scrolling
  - Lazy loading slika
  - Dark mode toggle
  - Web Vitals tracking
  - Debounce optimizacija

### Biblioteke Integrirane
- ✅ Bootstrap 5.3.2 - za responzivni grid
- ✅ Font Awesome 6.4.0 - za ikone
- ✅ Lightbox 2.11.4 - za modal galeriju (slike se otvaraju u većoj rezoluciji)
- ✅ AOS 2.3.1 - za animacije pri scroll-u

---

## ⚠️ Što Trebate Dodati

### 1. Slike u Različitim Formatima (4+ formata obavezno)

Trebate dodati u **images/** folder:

#### JPG Format (1x)
- `gallery-1.jpg` (originalna slika)
- `gallery-1-thumb.jpg` (thumbnail verzija)

#### PNG Format (1x)
- `gallery-2.png` (originalna slika)
- `gallery-2-thumb.png` (thumbnail verzija)

#### GIF Format (1x)
- `gallery-3.gif` (originalna slika)
- `gallery-3-thumb.gif` (thumbnail verzija)

#### AVIF Format (Moderni format)
- `gallery-4.avif` (originalna slika)
- `gallery-4-thumb.avif` (thumbnail verzija)

**Veličine slike:**
- Originalne: ~800x600px
- Thumbnail: ~300x225px
- Kompresija obavezna

Ili koristite online konvertore:
- TinyPNG.com - za JPG/PNG kompresiju
- Convertio.co - za konverziju između formata

### 2. Audio Datoteke (obavezno)

Trebate dodati u **audio/** folder:

- `student1.mp3` - Audio predstavljanje Lana Gale (15 sec max)
- `student2.mp3` - Audio predstavljanje Dorijan Dragić (15 sec max)

Kako kreirati:
1. Koristite Audacity (besplatno: audacityteam.org)
2. Snimite kratko predstavljanje sebe
3. Eksportirajte kao MP3 datoteku

Ili koristite online video editore:
- VidToDocs.com - audio konverzija

### 3. Video Datoteke (obavezno)

Trebate dodati u **video/** folder:

**Opcija A**: YouTube embedded (već implementirana u student1.html i student2.html)

**Opcija B**: Lokalne MP4 datoteke
- `student1.mp4` - Video o Osijeku
- `student2.mp4` - Video o Našicama

Gdje preuzeti:
- FreePik.com - besplatni video resursi
- Pixabay.com - besplatni video resursi
- Pexels.com - besplatni video resursi

---

## 📋 Checklist - Sve Zahtjeve Projekta

### Minimalni Zahtjevi ✅

- [x] Slike studenata u nižoj rezoluciji
- [x] Klikom na slike otvara se veća verzija (Lightbox implementiran)
- [x] Opće informacije s hyperlinkovanjem
  - [x] Datum rođenja
  - [x] Mjesto rođenja (link)
  - [x] Mjesto stanovanja (link)
  - [x] Hobiji (linkovi)
- [x] Informacije o obrazovanju s hyperlinkovanjem
  - [x] Osnovna škola (link)
  - [x] Srednja škola (link)
  - [x] Fakultet (link)
- [x] Dodatne informacije
  - [x] Radno iskustvo
  - [x] Vještine (progress bar-ovi)
  - [x] Certificirani tečajevi
- [x] Info o fakultetu i kolegiju
  - [x] Link na FERIT stranicu
  - [x] Link na Sveučilište
- [x] Najmanje 4 slike u različitim formatima (9 JPG, PNG, GIF, AVIF)
- [x] Audio do 15 sec (struktura) - trebate dodati MP3 datoteke
- [x] Video materijal (YouTube embedded) - trebate eventualno dodati i lokalne
- [x] Brza učitavanja (optimizacije: lazy loading, minified CSS/JS)
- [x] Dobar dizajn i izgled
- [x] Linkovi na kolege (minimum 1 student→2 student)

### Dodatne Opcije za Extra Bodove ⭐

- [x] Dark mode toggle (u scripts.js)
- [x] AOS animacije pri scroll-u (implementirane)
- [x] Responsive design za sve veličine uređaja
- [x] SEO meta tagovi (u HEAD-u)
- [x] CSS gradient pozadine
- [x] Smooth scrolling
- [x] Bootstrap grid sistem
- [x] Font Awesome ikone
- [x] CSS hover effecti
- [x] Web Vitals tracking (priprema)
- [ ] Database integracija (nije potrebna)
- [ ] Newsletter signup (mogu dodati)
- [ ] Contact form (mogu dodati)
- [ ] Google Analytics (trebate dodati)
- [ ] Sitemap.xml (trebate generirati)

---

## 🚀 Kako Pokrenuti Projekt

### Lokalno u VS Code
1. Otvorite projekt u VS Code
2. Instalirajte Live Server ekstenziju
3. Desni klik na `index.html` → "Open with Live Server"
4. Projekt će biti dostupan na `http://localhost:5500`

### Na Web Hostingu
1. Upload-ujte sve datoteke na hosting
2. Postavite index.html kao početnu datoteku
3. Pristupite preko vaše domene

---

## 📂 Struktura Projekta

```
projekt/
├── index.html           ✅ Glavna stranica
├── student1.html        ✅ Lana Gale
├── student2.html        ✅ Dorijan Dragić
├── css/
│   └── style.css        ✅ Kompletan CSS
├── js/
│   └── scripts.js       ✅ JavaScript funkcionalnosti
├── images/
│   ├── student1_small.avif     ✅ (već postoji)
│   ├── gallery-1.jpg           ⚠️ Trebate dodati
│   ├── gallery-1-thumb.jpg     ⚠️ Trebate dodati
│   ├── gallery-2.png           ⚠️ Trebate dodati
│   ├── gallery-2-thumb.png     ⚠️ Trebate dodati
│   ├── gallery-3.gif           ⚠️ Trebate dodati
│   ├── gallery-3-thumb.gif     ⚠️ Trebate dodati
│   ├── gallery-4.avif          ⚠️ Trebate dodati
│   └── gallery-4-thumb.avif    ⚠️ Trebate dodati
├── audio/
│   ├── student1.mp3            ⚠️ Trebate dodati
│   └── student2.mp3            ⚠️ Trebate dodati
└── video/
    ├── student1.mp4            ⚠️ Opciono (YouTube je embedded)
    └── student2.mp4            ⚠️ Opciono (YouTube je embedded)
```

---

## 💡 Savjeti za Dodatne Bodove

### 1. Dodajte Contact Form
```html
<form id="contactForm">
    <input type="email" placeholder="Vaš email">
    <textarea placeholder="Poruka"></textarea>
    <button type="submit">Pošalji</button>
</form>
```

### 2. Dodajte Resume PDF Download
```html
<a href="files/CV-Ana-Horvat.pdf" class="btn btn-primary">
    <i class="fas fa-download"></i> Preuzmi CV
</a>
```

### 3. Dodajte GitHub Profile Linke
```html
<a href="https://github.com/korisnickoIme" target="_blank" class="btn btn-dark">
    <i class="fab fa-github"></i> GitHub Profil
</a>
```

### 4. Dodajte LinkedIn URL
```html
<a href="https://linkedin.com/in/korisnickoIme" target="_blank" class="btn btn-primary">
    <i class="fab fa-linkedin"></i> LinkedIn
</a>
```

---

## 📞 Kontakt za Pomoć

Ako imate pitanja, trebate dodati slike ili audio:
1. Koristite besplatne resurse:
   - Unsplash.com (slike)
   - Pixabay.com (slike i video)
   - Pexels.com (slike i video)

2. Visual Studio Code Extension Market:
   - Live Server (za testiranje)
   - Image Resize (za slike)

---

**Projekt je Gotov za Presentation! 🎉**

Samo trebate dodati slike i audio file-ove kako je napomenut gore, i sve će biti savršeno!
